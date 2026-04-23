export async function canvasToPngBytes(canvasLike) {
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
