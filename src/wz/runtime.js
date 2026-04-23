export function getWzApi() {
  if (globalThis.wz && typeof globalThis.wz.init === "function") {
    return globalThis.wz;
  }
  throw new Error("wz runtime not loaded. Expected ./vendor/wz.js");
}

export function installCanvasPatch(api) {
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

export async function assertWasmEndpoint(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`WASM file not found at ${url} (${response.status})`);
  }

  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.length < 4 || bytes[0] !== 0x00 || bytes[1] !== 0x61 || bytes[2] !== 0x73 || bytes[3] !== 0x6d) {
    throw new Error(`WASM path resolved to non-binary content: ${url}`);
  }
}

export function populateVersionSelect(versionSelectEl, api) {
  const keys = Object.keys(api.WzMapleVersion).filter((k) => Number.isNaN(Number(k)));
  for (const key of keys) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    if (key === "GMS") {
      option.selected = true;
    }
    versionSelectEl.appendChild(option);
  }
}
