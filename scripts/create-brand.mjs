import { openSync } from "fontkit";
import fs from "node:fs/promises";

const playfair = openSync("public/fonts/playfair-display-latin.woff2");
const montserrat = openSync("public/fonts/montserrat-latin.woff2");
const original = await fs.readFile("public/images/logo.svg", "utf8");
const originalShapes = [...original.matchAll(/<(?:circle|path)\b[^>]*\/>/g)]
  .map(([shape]) => shape.replace(/class="[^"]*"/g, ""))
  .join("");

function outlines(font, text, x, y, size) {
  const run = font.layout(text);
  const scale = size / font.unitsPerEm;
  let cursor = x;
  return run.glyphs
    .map((glyph, i) => {
      const position = run.positions[i];
      const path =
        '<path transform="translate(' +
        (cursor + position.xOffset * scale) +
        " " +
        (y - position.yOffset * scale) +
        ") scale(" +
        scale +
        " " +
        -scale +
        ')" d="' +
        glyph.path.toSVG() +
        '"/>';
      cursor += position.xAdvance * scale;
      return path;
    })
    .join("");
}
const wordmark =
  outlines(montserrat, "+", 166, 149, 99) +
  outlines(playfair, "JCB", 246, 153, 163);
const content =
  '<g transform="translate(9 9) scale(.82)">' +
  originalShapes +
  "</g>" +
  wordmark;
for (const [name, color] of [
  ["plus-jcb", "#666757"],
  ["plus-jcb-white", "#ffffff"],
]) {
  await fs.writeFile(
    "public/brand/" + name + ".svg",
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 592 198" role="img" aria-label="+JCB"><title>+JCB — Jardim Clube da Barra</title><g fill="' +
      color +
      '">' +
      content +
      "</g></svg>",
  );
}
console.log("Created +JCB lockups from official symbol and outlined type.");
