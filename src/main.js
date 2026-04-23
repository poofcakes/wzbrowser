import JSZip from "jszip";
import { canvasToPngBytes } from "./wz/canvas.js";
import { collectCanvasProps, buildSelectedImageXml, formatValue, getPropertyChildren } from "./wz/properties.js";
import { assertWasmEndpoint, getWzApi, installCanvasPatch, populateVersionSelect } from "./wz/runtime.js";
import { downloadBlob, errorText, escapeHtml, sanitizeFileName } from "./utils/text.js";

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
let imageEntries = null;
let imageRootNode = null;
let expandedFolders = new Set();
let selectedImagePath = "";
let selectedImage = null;
let currentCanvasEntries = [];
let selectedCanvasUrl = null;
let wzApi = null;
let parseProgressTimer = null;
let imageIndexBuildPromise = null;
let filterRenderToken = 0;

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
  populateVersionSelect(versionSelect, wzApi);
  status("Loading WebAssembly...");
  const wasmUrl = new URL("./vendor/wz.wasm", window.location.href).toString();
  await assertWasmEndpoint(wasmUrl);
  await wzApi.init();
  status("Ready. Choose one .wz file and click Open.");
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
    const ok = await wz.parseWzFile(parseInfo, true);
    if (!ok) {
      wz.dispose();
      finishParseProgress(false, "Parse failed");
      status(`Failed to parse WZ: ${parseInfo.message || "unknown parse error"}`);
      return;
    }

    currentWz = wz;
    imageRootNode = createDirNode(wz.wzDirectory, "");
    await ensureDirectoryParsed(imageRootNode);
    expandedFolders = new Set();
    renderImageList();
    finishParseProgress(true, "Directory parse complete");
    status(`Loaded ${file.name}. Expand folders for fast browsing, or filter to build full IMG index.`);
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

function renderImageList() {
  imageListEl.innerHTML = "";
  const query = imageFilterInput.value.trim().toLowerCase();
  if (query) {
    void renderFilteredImageList(query);
    return;
  }

  if (!imageRootNode || imageRootNode.children.length === 0) {
    const li = document.createElement("li");
    li.textContent = "(No IMG entries)";
    imageListEl.appendChild(li);
    return;
  }

  renderImageTree(imageRootNode.children, 0);
}

async function renderFilteredImageList(query) {
  const token = ++filterRenderToken;
  if (!imageEntries) {
    const li = document.createElement("li");
    li.textContent = "(Indexing IMG entries for filter...)";
    imageListEl.appendChild(li);
    try {
      await ensureImageIndexBuilt();
    } catch (err) {
      if (token !== filterRenderToken) {
        return;
      }
      imageListEl.innerHTML = "";
      const failed = document.createElement("li");
      failed.textContent = "(Failed to build IMG index)";
      imageListEl.appendChild(failed);
      status(`IMG index build failed: ${errorText(err)}`);
      return;
    }
    if (token !== filterRenderToken) {
      return;
    }
  }

  const visible = (imageEntries ?? [])
    .filter((entry) => entry.path.toLowerCase().includes(query))
    .slice(0, 4000);

  imageListEl.innerHTML = "";
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
      li.addEventListener("click", async () => {
        if (expandedFolders.has(node.path)) {
          expandedFolders.delete(node.path);
          renderImageList();
          return;
        }

        expandedFolders.add(node.path);
        renderImageList();
        try {
          await ensureDirectoryParsed(node);
        } catch (err) {
          expandedFolders.delete(node.path);
          status(`Failed to parse directory ${node.path}: ${errorText(err)}`);
        }
        renderImageList();
      });
      imageListEl.appendChild(li);

      if (expandedFolders.has(node.path)) {
        if (!node.loaded) {
          const loading = document.createElement("li");
          loading.textContent = "(Loading...)";
          loading.classList.add("folder-row");
          loading.style.paddingLeft = `${22 + depth * 14}px`;
          imageListEl.appendChild(loading);
        } else {
          renderImageTree(node.children, depth + 1);
        }
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

function createDirNode(dir, path) {
  return {
    kind: "dir",
    name: dir?.name ?? "",
    path,
    dir,
    loaded: false,
    loadingPromise: null,
    children: []
  };
}

async function ensureDirectoryParsed(node) {
  if (!node || node.kind !== "dir" || node.loaded) {
    return;
  }

  if (node.loadingPromise) {
    await node.loadingPromise;
    return;
  }

  node.loadingPromise = (async () => {
    if (!node.dir.parsed) {
      await node.dir.parseDirectory(true);
    }

    const nextChildren = [];
    for (const subDir of node.dir.wzDirectories) {
      const subPath = node.path ? `${node.path}/${subDir.name}` : subDir.name;
      nextChildren.push(createDirNode(subDir, subPath));
    }
    for (const image of node.dir.wzImages) {
      const imgPath = node.path ? `${node.path}/${image.name}` : image.name;
      nextChildren.push({
        kind: "file",
        name: image.name,
        path: imgPath,
        entry: {
          path: imgPath,
          image
        }
      });
    }

    nextChildren.sort((a, b) => {
      if (a.kind !== b.kind) {
        return a.kind === "dir" ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });

    node.children = nextChildren;
    node.loaded = true;
  })();

  try {
    await node.loadingPromise;
  } finally {
    node.loadingPromise = null;
  }
}

async function ensureImageIndexBuilt() {
  if (imageEntries) {
    return imageEntries;
  }
  if (imageIndexBuildPromise) {
    return imageIndexBuildPromise;
  }
  if (!currentWz?.wzDirectory) {
    imageEntries = [];
    return imageEntries;
  }

  status("Building full IMG index for filter...");
  imageIndexBuildPromise = (async () => {
    const out = [];
    await collectImagesLazy(currentWz.wzDirectory, [], out, { dirsVisited: 0 });
    out.sort((a, b) => a.path.localeCompare(b.path));
    imageEntries = out;
    status(`Indexed ${out.length} IMG entries. Filter is ready.`);
    return out;
  })();

  try {
    return await imageIndexBuildPromise;
  } finally {
    imageIndexBuildPromise = null;
  }
}

async function collectImagesLazy(dir, prefix, out, state) {
  if (!dir.parsed) {
    await dir.parseDirectory(true);
  }

  for (const image of dir.wzImages) {
    out.push({
      path: [...prefix, image.name].join("/"),
      image
    });
  }

  for (const subDir of dir.wzDirectories) {
    prefix.push(subDir.name);
    await collectImagesLazy(subDir, prefix, out, state);
    prefix.pop();
    state.dirsVisited++;
    if (state.dirsVisited % 25 === 0) {
      await yieldToMainThread();
    }
  }
}

function yieldToMainThread() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
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
  const canvases = collectCanvasProps(props, wzApi);
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

function clearImageState() {
  imageEntries = null;
  imageRootNode = null;
  imageIndexBuildPromise = null;
  filterRenderToken++;
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
    const xml = buildSelectedImageXml(selectedImage, selectedImagePath, wzApi);
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

function disposeCurrentWz() {
  if (!currentWz) {
    return;
  }
  currentWz.dispose();
  currentWz = null;
}

function status(message) {
  statusEl.textContent = message;
}
