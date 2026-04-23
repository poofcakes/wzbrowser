import "./styles.css";
import JSZip from "jszip";

const wzFileInput = document.getElementById("wzFileInput");
const versionSelect = document.getElementById("versionSelect");
const openBtn = document.getElementById("openBtn");
const statusEl = document.getElementById("status");
const parseProgressWrapEl = document.getElementById("parseProgressWrap");
const parseProgressBarEl = document.getElementById("parseProgressBar");
const parseProgressTextEl = document.getElementById("parseProgressText");
const imageFilterInput = document.getElementById("imageFilterInput");
const imageListEl = document.getElementById("imageList");
const selectedImageEl = document.getElementById("selectedImage");
const downloadXmlBtn = document.getElementById("downloadXmlBtn");
const downloadPngZipBtn = document.getElementById("downloadPngZipBtn");
const propertyTreeEl = document.getElementById("propertyTree");
const canvasListEl = document.getElementById("canvasList");
const selectedCanvasEl = document.getElementById("selectedCanvas");
const canvasPreviewEl = document.getElementById("canvasPreview");

let currentWz = null;
let imageEntries = [];
let imageTreeRoot = null;
let expandedFolders = new Set();
let selectedImagePath = "";
let selectedImage = null;
let currentCanvasEntries = [];
let selectedCanvasUrl = null;
let wzApi = null;
let parseProgressTimer = null;

boot().catch((err) => {
  status(`Init failed: ${errorText(err)}`);
});

downloadXmlBtn.addEventListener("click", async () => {
  await exportSelectedImageXml();
});

downloadPngZipBtn.addEventListener("click", async () => {
  await exportSelectedImagePngZip();
});

async function boot() {
  wzApi = getWzApi();
  installCanvasPatch(wzApi);
  downloadXmlBtn.disabled = true;
  downloadPngZipBtn.disabled = true;
  populateVersionSelect();
  status("Loading WebAssembly...");
  const wasmUrl = new URL("./vendor/wz.wasm", window.location.href).toString();
  await assertWasmEndpoint(wasmUrl);
  await wzApi.init();
  status("Ready. Choose one .wz file and click Open.");
}

function installCanvasPatch(api) {
  const CanvasCtor = api?.Canvas;
  if (!CanvasCtor || typeof CanvasCtor.prototype?.getBufferAsync !== "function") {
    return;
  }

  if (CanvasCtor.prototype.__wzExplorerPatchedGetBufferAsync) {
    return;
  }

  const original = CanvasCtor.prototype.getBufferAsync;
  CanvasCtor.prototype.getBufferAsync = async function patchedGetBufferAsync(mime = "image/png") {
    try {
      return await original.call(this, mime);
    } catch (_) {
      const domCanvas =
        this?._canvas ??
        (typeof this?.getCanvas === "function" ? this.getCanvas() : this);
      if (typeof domCanvas?.toBlob === "function") {
        const blob = await new Promise((resolve, reject) => {
          domCanvas.toBlob((value) => {
            if (value) {
              resolve(value);
              return;
            }
            reject(new Error("Canvas toBlob() returned null"));
          }, mime);
        });
        return new Uint8Array(await blob.arrayBuffer());
      }

      if (typeof domCanvas?.toDataURL === "function") {
        const dataUrl = domCanvas.toDataURL(mime);
        const base64 = dataUrl.split(",", 2)[1] ?? "";
        const bytes = atob(base64);
        const arr = new Uint8Array(bytes.length);
        for (let i = 0; i < bytes.length; i++) {
          arr[i] = bytes.charCodeAt(i);
        }
        return arr;
      }

      throw new Error("Canvas encoding fallback failed");
    }
  };

  CanvasCtor.prototype.__wzExplorerPatchedGetBufferAsync = true;
}

function getWzApi() {
  if (globalThis.wz && typeof globalThis.wz.init === "function") {
    return globalThis.wz;
  }
  throw new Error("wz runtime not loaded. Expected ./vendor/wz.js");
}

async function assertWasmEndpoint(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`WASM file not found at ${url} (${response.status})`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.length < 4 || bytes[0] !== 0x00 || bytes[1] !== 0x61 || bytes[2] !== 0x73 || bytes[3] !== 0x6d) {
    throw new Error(`WASM path resolved to non-binary content: ${url}`);
  }
}

openBtn.addEventListener("click", async () => {
  const file = wzFileInput.files?.[0];
  if (!file) {
    status("Choose a .wz file first.");
    return;
  }

  try {
    await openWzFile(file);
  } catch (err) {
    status(`Open failed: ${errorText(err)}`);
    openBtn.disabled = false;
    finishParseProgress(false, "Open failed");
  }
});

imageFilterInput.addEventListener("input", () => {
  renderImageList();
});

async function openWzFile(file) {
  disposeCurrentWz();
  clearImageState();

  status(`Parsing header + directory: ${file.name}`);
  openBtn.disabled = true;
  startParseProgress(file);

  try {
    const version = versionSelect.value;
    const wz = new wzApi.WzFile(file, wzApi.WzMapleVersion[version]);
    const parseInfo = { message: "" };
    const ok = await wz.parseWzFile(parseInfo);
    if (!ok) {
      wz.dispose();
      finishParseProgress(false, "Parse failed");
      status(`Failed to parse WZ: ${parseInfo.message || "unknown parse error"}`);
      return;
    }

    currentWz = wz;
    imageEntries = collectImages(wz.wzDirectory);
    imageTreeRoot = buildImageTree(imageEntries);
    expandedFolders = new Set();
    renderImageList();
    finishParseProgress(true, "Directory parse complete");
    status(`Loaded ${imageEntries.length} IMG entries from ${file.name}`);
  } finally {
    openBtn.disabled = false;
  }
}

function startParseProgress(file) {
  clearParseProgressTimer();
  parseProgressWrapEl.hidden = false;
  parseProgressBarEl.style.width = "0%";
  parseProgressTextEl.textContent = "Reading WZ structure...";

  const fileSizeMb = file.size / (1024 * 1024);
  // Heuristic timing estimate for directory/header parse stage.
  // Intentionally conservative so progress does not jump too fast.
  const estimatedMs = Math.max(4000, Math.min(45000, Math.floor(fileSizeMb * 350)));
  const startedAt = Date.now();

  parseProgressTimer = setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const ratio = Math.min(1, elapsed / estimatedMs);
    let pct = Math.floor(3 + ratio * 77);

    // If parse takes longer than estimate, keep slowly creeping forward.
    if (elapsed > estimatedMs) {
      const overtimeMs = elapsed - estimatedMs;
      pct += Math.floor(overtimeMs / 2500);
    }

    pct = Math.min(95, Math.max(2, pct));
    parseProgressBarEl.style.width = `${pct}%`;
    parseProgressTextEl.textContent = `Reading WZ structure... ${pct}% (estimate)`;
  }, 120);
}

function finishParseProgress(ok, label) {
  clearParseProgressTimer();
  parseProgressBarEl.style.width = ok ? "100%" : "0%";
  parseProgressTextEl.textContent = ok ? `${label} (100%)` : label;
}

function clearParseProgressTimer() {
  if (parseProgressTimer) {
    clearInterval(parseProgressTimer);
    parseProgressTimer = null;
  }
}

function collectImages(rootDir) {
  if (!rootDir) {
    return [];
  }

  const out = [];
  walkDirectory(rootDir, [], out);
  out.sort((a, b) => a.path.localeCompare(b.path));
  return out;
}

function walkDirectory(dir, prefix, out) {
  for (const subDir of dir.wzDirectories) {
    prefix.push(subDir.name);
    walkDirectory(subDir, prefix, out);
    prefix.pop();
  }

  for (const image of dir.wzImages) {
    out.push({
      path: [...prefix, image.name].join("/"),
      image
    });
  }
}

function renderImageList() {
  imageListEl.innerHTML = "";
  const query = imageFilterInput.value.trim().toLowerCase();
  if (query) {
    renderFilteredImageList(query);
    return;
  }

  if (!imageTreeRoot || imageTreeRoot.children.length === 0) {
    const li = document.createElement("li");
    li.textContent = "(No IMG entries)";
    imageListEl.appendChild(li);
    return;
  }

  renderImageTree(imageTreeRoot.children, 0);
}

function renderFilteredImageList(query) {
  const visible = imageEntries
    .filter((entry) => entry.path.toLowerCase().includes(query))
    .slice(0, 4000);

  if (visible.length === 0) {
    const li = document.createElement("li");
    li.textContent = "(No matching IMG entries)";
    imageListEl.appendChild(li);
    return;
  }

  for (const entry of visible) {
    const li = document.createElement("li");
    li.textContent = entry.path;
    if (entry.path === selectedImagePath) {
      li.classList.add("active");
    }
    li.addEventListener("click", async () => {
      await openImage(entry);
      renderImageList();
    });
    imageListEl.appendChild(li);
  }
}

function renderImageTree(nodes, depth) {
  for (const node of nodes) {
    if (node.kind === "dir") {
      const li = document.createElement("li");
      li.textContent = `${expandedFolders.has(node.path) ? "▾" : "▸"} ${node.name}/`;
      li.classList.add("folder-row");
      li.style.paddingLeft = `${8 + depth * 14}px`;
      li.addEventListener("click", () => {
        if (expandedFolders.has(node.path)) {
          expandedFolders.delete(node.path);
        } else {
          expandedFolders.add(node.path);
        }
        renderImageList();
      });
      imageListEl.appendChild(li);

      if (expandedFolders.has(node.path)) {
        renderImageTree(node.children, depth + 1);
      }
      continue;
    }

    const li = document.createElement("li");
    li.textContent = node.name;
    li.style.paddingLeft = `${8 + depth * 14}px`;
    if (node.entry.path === selectedImagePath) {
      li.classList.add("active");
    }
    li.addEventListener("click", async () => {
      await openImage(node.entry);
      renderImageList();
    });
    imageListEl.appendChild(li);
  }
}

function buildImageTree(entries) {
  const root = { kind: "dir", name: "", path: "", childrenMap: new Map() };

  for (const entry of entries) {
    const parts = entry.path.split("/").filter(Boolean);
    if (parts.length === 0) {
      continue;
    }

    let current = root;
    let currentPath = "";
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLeaf = i === parts.length - 1;
      currentPath = currentPath ? `${currentPath}/${part}` : part;

      if (isLeaf) {
        current.childrenMap.set(`file:${part}`, {
          kind: "file",
          name: part,
          path: currentPath,
          entry
        });
        continue;
      }

      const key = `dir:${part}`;
      if (!current.childrenMap.has(key)) {
        current.childrenMap.set(key, {
          kind: "dir",
          name: part,
          path: currentPath,
          childrenMap: new Map()
        });
      }
      current = current.childrenMap.get(key);
    }
  }

  return normalizeTree(root);
}

function normalizeTree(node) {
  if (node.kind === "file") {
    return node;
  }

  const children = [...node.childrenMap.values()].map((child) => normalizeTree(child));
  children.sort((a, b) => {
    if (a.kind !== b.kind) {
      return a.kind === "dir" ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });

  return {
    kind: "dir",
    name: node.name,
    path: node.path,
    children
  };
}

async function openImage(entry) {
  selectedImage = entry.image;
  selectedImagePath = entry.path;
  selectedImageEl.textContent = selectedImagePath;
  propertyTreeEl.textContent = "Parsing .img...";
  clearCanvasState();

  await selectedImage.parseImage();
  const props = [...selectedImage.wzProperties];

  renderPropertyTree(props);
  const canvases = collectCanvasProps(props);
  renderCanvasList(canvases);
  downloadXmlBtn.disabled = false;
  downloadPngZipBtn.disabled = canvases.length === 0;
  status(`Parsed ${selectedImagePath} (${props.length} top-level props)`);
}

function renderPropertyTree(properties) {
  propertyTreeEl.innerHTML = "";
  if (properties.length === 0) {
    propertyTreeEl.textContent = "(No properties)";
    return;
  }

  const rootUl = document.createElement("ul");
  for (const prop of properties) {
    rootUl.appendChild(renderPropertyNode(prop));
  }
  propertyTreeEl.appendChild(rootUl);
}

function renderPropertyNode(prop) {
  const li = document.createElement("li");
  const type = prop.constructor?.name ?? "Property";
  const name = prop.name ?? "(unnamed)";
  const value = formatValue(prop.wzValue);

  li.innerHTML = `<span class="prop-type">${escapeHtml(type)}</span> <span class="prop-name">${escapeHtml(name)}</span>${value ? ` = <span class="prop-value">${escapeHtml(value)}</span>` : ""}`;

  const children = getPropertyChildren(prop);
  if (children.length > 0) {
    const ul = document.createElement("ul");
    for (const child of children) {
      ul.appendChild(renderPropertyNode(child));
    }
    li.appendChild(ul);
  }
  return li;
}

function getPropertyChildren(prop) {
  const childrenSet = prop?.wzProperties;
  if (!childrenSet || typeof childrenSet[Symbol.iterator] !== "function") {
    return [];
  }
  return [...childrenSet];
}

function formatValue(value) {
  if (value === undefined || value === null) {
    return "";
  }
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "bigint") {
    return `${String(value)}n`;
  }
  if (typeof value === "object") {
    if ("x" in value && "y" in value) {
      return `(${value.x}, ${value.y})`;
    }
    return "[object]";
  }
  return String(value);
}

function collectCanvasProps(properties) {
  const out = [];
  const path = [];
  walkPropsForCanvas(properties, path, out);
  return out;
}

function walkPropsForCanvas(properties, path, out) {
  for (const prop of properties) {
    path.push(prop.name ?? "(unnamed)");
    if (prop instanceof wzApi.WzCanvasProperty) {
      out.push({
        path: path.join("/"),
        prop
      });
    }
    const children = getPropertyChildren(prop);
    if (children.length > 0) {
      walkPropsForCanvas(children, path, out);
    }
    path.pop();
  }
}

function renderCanvasList(canvases) {
  currentCanvasEntries = canvases;
  canvasListEl.innerHTML = "";

  if (canvases.length === 0) {
    const li = document.createElement("li");
    li.textContent = "(No canvas props)";
    canvasListEl.appendChild(li);
    return;
  }

  for (const canvas of canvases) {
    const li = document.createElement("li");
    li.textContent = canvas.path;
    li.addEventListener("click", async () => {
      for (const node of canvasListEl.querySelectorAll("li")) {
        node.classList.remove("active");
      }
      li.classList.add("active");
      await showCanvas(canvas);
    });
    canvasListEl.appendChild(li);
  }
}

async function showCanvas(canvasEntry) {
  selectedCanvasEl.textContent = canvasEntry.path;
  if (selectedCanvasUrl) {
    URL.revokeObjectURL(selectedCanvasUrl);
    selectedCanvasUrl = null;
  }

  try {
    const canvas = await canvasEntry.prop.getBitmap();
    if (!canvas) {
      status(`Canvas decode failed: ${canvasEntry.path}`);
      return;
    }

    const pngBytes = await canvasToPngBytes(canvas);
    if (typeof canvas.dispose === "function") {
      canvas.dispose();
    }

    const blob = new Blob([pngBytes], { type: "image/png" });
    selectedCanvasUrl = URL.createObjectURL(blob);
    canvasPreviewEl.src = selectedCanvasUrl;
    canvasPreviewEl.hidden = false;
    status(`Previewing canvas: ${canvasEntry.path}`);
  } catch (err) {
    canvasPreviewEl.removeAttribute("src");
    canvasPreviewEl.hidden = true;
    status(`Canvas decode failed: ${errorText(err)}`);
  }
}

async function canvasToPngBytes(canvasLike) {
  // Prefer DOM canvas paths first; @tybys/wz 1.0.0 has a browser bug
  // where Canvas.getBufferAsync() delegates to a missing _canvas method.
  const domCanvas =
    canvasLike?._canvas ??
    (typeof canvasLike?.getCanvas === "function" ? canvasLike.getCanvas() : canvasLike);

  if (typeof domCanvas?.toBlob === "function") {
    const blob = await new Promise((resolve, reject) => {
      domCanvas.toBlob((value) => {
        if (value) {
          resolve(value);
          return;
        }
        reject(new Error("Canvas toBlob() returned null"));
      }, "image/png");
    });
    return new Uint8Array(await blob.arrayBuffer());
  }

  if (typeof domCanvas?.toDataURL === "function") {
    const dataUrl = domCanvas.toDataURL("image/png");
    const base64 = dataUrl.split(",", 2)[1] ?? "";
    const bytes = atob(base64);
    const arr = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      arr[i] = bytes.charCodeAt(i);
    }
    return arr;
  }

  if (typeof canvasLike?.getBufferAsync === "function") {
    return canvasLike.getBufferAsync("image/png");
  }

  throw new Error("Unsupported canvas object shape for PNG encoding");
}

function populateVersionSelect() {
  const keys = Object.keys(wzApi.WzMapleVersion).filter((k) => Number.isNaN(Number(k)));
  for (const key of keys) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    if (key === "GMS") {
      option.selected = true;
    }
    versionSelect.appendChild(option);
  }
}

function clearImageState() {
  imageEntries = [];
  imageTreeRoot = null;
  expandedFolders = new Set();
  selectedImage = null;
  selectedImagePath = "";
  selectedImageEl.textContent = "";
  propertyTreeEl.textContent = "";
  imageListEl.innerHTML = "";
  currentCanvasEntries = [];
  downloadXmlBtn.disabled = true;
  downloadPngZipBtn.disabled = true;
  clearCanvasState();
}

function clearCanvasState() {
  canvasListEl.innerHTML = "";
  selectedCanvasEl.textContent = "";
  canvasPreviewEl.removeAttribute("src");
  canvasPreviewEl.hidden = true;
  if (selectedCanvasUrl) {
    URL.revokeObjectURL(selectedCanvasUrl);
    selectedCanvasUrl = null;
  }
}

async function exportSelectedImageXml() {
  if (!selectedImage || !selectedImagePath) {
    status("Select an IMG entry first.");
    return;
  }

  try {
    const xml = buildSelectedImageXml();
    const fileName = `${sanitizeFileName(selectedImagePath)}.xml`;
    downloadBlob(new Blob([xml], { type: "application/xml;charset=utf-8" }), fileName);
    status(`Downloaded XML: ${fileName}`);
  } catch (err) {
    status(`XML export failed: ${errorText(err)}`);
  }
}

async function exportSelectedImagePngZip() {
  if (!selectedImage || !selectedImagePath) {
    status("Select an IMG entry first.");
    return;
  }

  if (!currentCanvasEntries || currentCanvasEntries.length === 0) {
    status("No canvas PNGs available in this image.");
    return;
  }

  const fileBase = sanitizeFileName(selectedImagePath);
  status(`Exporting ${currentCanvasEntries.length} canvas PNGs...`);
  downloadPngZipBtn.disabled = true;
  downloadXmlBtn.disabled = true;

  try {
    const zip = new JSZip();
    const root = zip.folder(fileBase) ?? zip;

    for (let i = 0; i < currentCanvasEntries.length; i++) {
      const item = currentCanvasEntries[i];
      const canvas = await item.prop.getBitmap();
      if (!canvas) {
        continue;
      }

      try {
        const pngBytes = await canvasToPngBytes(canvas);
        const entryName = `${sanitizeFileName(item.path)}.png`;
        root.file(entryName, pngBytes);
      } finally {
        if (typeof canvas.dispose === "function") {
          canvas.dispose();
        }
      }

      if ((i + 1) % 10 === 0 || i + 1 === currentCanvasEntries.length) {
        status(`Exporting PNGs... ${i + 1}/${currentCanvasEntries.length}`);
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const outFile = `${fileBase}-png.zip`;
    downloadBlob(zipBlob, outFile);
    status(`Downloaded PNG zip: ${outFile}`);
  } catch (err) {
    status(`PNG export failed: ${errorText(err)}`);
  } finally {
    downloadPngZipBtn.disabled = false;
    downloadXmlBtn.disabled = false;
  }
}

function buildSelectedImageXml() {
  const props = [...selectedImage.wzProperties];
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push(`<WzImage path="${escapeXml(selectedImagePath)}">`);
  for (const prop of props) {
    writePropertyXml(prop, 1, lines);
  }
  lines.push("</WzImage>");
  return lines.join("\n");
}

function writePropertyXml(prop, depth, outLines) {
  const indent = "  ".repeat(depth);
  const typeName = prop?.constructor?.name ?? "Property";
  const name = prop?.name ?? "";
  const children = getPropertyChildren(prop);
  const valueText = formatValue(prop?.wzValue);
  const attrs = [`type="${escapeXml(typeName)}"`, `name="${escapeXml(name)}"`];

  if (prop instanceof wzApi.WzCanvasProperty && prop?.pngProperty) {
    attrs.push(`width="${prop.pngProperty.width}"`);
    attrs.push(`height="${prop.pngProperty.height}"`);
  }

  if (children.length === 0) {
    if (valueText) {
      attrs.push(`value="${escapeXml(valueText)}"`);
    }
    outLines.push(`${indent}<Property ${attrs.join(" ")} />`);
    return;
  }

  outLines.push(`${indent}<Property ${attrs.join(" ")}>`);  
  for (const child of children) {
    writePropertyXml(child, depth + 1, outLines);
  }
  outLines.push(`${indent}</Property>`);
}

function sanitizeFileName(value) {
  return value.replace(/[\\/:*?"<>|]+/g, "_");
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function disposeCurrentWz() {
  if (!currentWz) {
    return;
  }
  currentWz.dispose();
  currentWz = null;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function status(message) {
  statusEl.textContent = message;
}

function errorText(err) {
  if (err?.message) {
    return err.message;
  }
  return String(err);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}
