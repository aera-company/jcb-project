import { openSync } from "fontkit";
import fs from "node:fs/promises";

// Static Montserrat Bold (wght 700) instanced from public/fonts/montserrat-latin.woff2,
// because fontkit cannot read variations from the woff2 build.
const montserrat = openSync("scripts/assets/montserrat-bold.ttf");

const CAP = 700; // Montserrat cap height, in font units.
const STROKE = 150; // Matches the Bold stems of J, C and B.
const PLUS = 560; // The plus sits a little under cap height.
const RADIUS = 10;
const GAP = -10; // The J hook tucks slightly under the plus arm.
const PAD = 12;

function roundedRect(x, y, w, h, r) {
  return (
    "M" + (x + r) + " " + y +
    "H" + (x + w - r) + "Q" + (x + w) + " " + y + " " + (x + w) + " " + (y + r) +
    "V" + (y + h - r) + "Q" + (x + w) + " " + (y + h) + " " + (x + w - r) + " " + (y + h) +
    "H" + (x + r) + "Q" + x + " " + (y + h) + " " + x + " " + (y + h - r) +
    "V" + (y + r) + "Q" + x + " " + y + " " + (x + r) + " " + y + "Z"
  );
}

// Plus, in a y-down coordinate space whose baseline is at y = CAP.
const plusTop = (CAP - PLUS) / 2;
const plusMid = (PLUS - STROKE) / 2;
const plus =
  '<path d="' +
  roundedRect(0, plusTop + plusMid, PLUS, STROKE, RADIUS) +
  roundedRect(plusMid, plusTop, STROKE, PLUS, RADIUS) +
  '"/>';

// JCB outlines; glyph paths are y-up, so flip them onto the baseline.
const run = montserrat.layout("JCB");
let cursor = PLUS + GAP - run.glyphs[0].bbox.minX;
let right = 0;
const letters = run.glyphs
  .map((glyph, i) => {
    // Montserrat's J has a flag at the top-left; the +JCB J is a plain stem.
    const clip = glyph.name === "J" ? ' clip-path="url(#j-stem)"' : "";
    const path =
      '<path transform="translate(' + cursor + " " + CAP + ') scale(1 -1)" d="' +
      glyph.path.toSVG() +
      '"' + clip + "/>";
    right = cursor + glyph.bbox.maxX;
    cursor += run.positions[i].xAdvance;
    return path;
  })
  .join("");

// Everything except the flag (x < stem, y > 565), in J glyph units.
const jStem =
  '<defs><clipPath id="j-stem"><path clip-rule="evenodd" d="M-200 -200H800V900H-200Z' +
  'M-200 565H303V900H-200Z"/></clipPath></defs>';

const minY = -Math.max(...run.glyphs.map((g) => g.bbox.maxY - CAP), 0);
const maxY = CAP - Math.min(...run.glyphs.map((g) => g.bbox.minY), 0);
const width = Math.ceil(right + PAD * 2);
const height = Math.ceil(maxY - minY + PAD * 2);
const viewBox = [-PAD, Math.floor(minY - PAD), width, height].join(" ");

for (const [name, color] of [
  ["plus-jcb", "#666757"],
  ["plus-jcb-white", "#ffffff"],
]) {
  await fs.writeFile(
    "public/brand/" + name + ".svg",
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + viewBox +
      '" width="' + width + '" height="' + height +
      '" role="img" aria-label="+JCB"><title>+JCB</title>' + jStem + '<g fill="' + color + '">' +
      plus + letters +
      "</g></svg>",
  );
}
console.log("Created +JCB wordmark " + width + "×" + height + ".");
