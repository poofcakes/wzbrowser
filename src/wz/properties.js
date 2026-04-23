import { escapeXml } from "../utils/text.js";

export function getPropertyChildren(prop) {
  const childrenSet = prop?.wzProperties;
  if (!childrenSet || typeof childrenSet[Symbol.iterator] !== "function") {
    return [];
  }
  return [...childrenSet];
}

export function formatValue(value) {
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

export function collectCanvasProps(properties, wzApi) {
  const out = [];
  const path = [];
  walkPropsForCanvas(properties, path, out, wzApi);
  return out;
}

function walkPropsForCanvas(properties, path, out, wzApi) {
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
      walkPropsForCanvas(children, path, out, wzApi);
    }
    path.pop();
  }
}

export function buildSelectedImageXml(selectedImage, selectedImagePath, wzApi) {
  const props = [...selectedImage.wzProperties];
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push(`<WzImage path="${escapeXml(selectedImagePath)}">`);
  for (const prop of props) {
    writePropertyXml(prop, 1, lines, wzApi);
  }
  lines.push("</WzImage>");
  return lines.join("\n");
}

function writePropertyXml(prop, depth, outLines, wzApi) {
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
    writePropertyXml(child, depth + 1, outLines, wzApi);
  }
  outLines.push(`${indent}</Property>`);
}
