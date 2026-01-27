const fs = require("fs");
const path = require("path");

// Source images folder (tracked inside the repo)
const INPUT_DIR = path.join(__dirname, '..', 'assets', 'images');

// Output file at repo root (ignored)
const OUTPUT_FILE = path.join(__dirname, '..', 'puck-base64.json');

const exts = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function mime(ext) {
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  return "application/octet-stream";
}

const files = fs.readdirSync(INPUT_DIR).filter(f =>
  exts.has(path.extname(f).toLowerCase())
);

if (!files.length) {
  console.error("❌ No images found in assets/images");
  process.exit(1);
}

const output = {};

for (const file of files) {
  const fullPath = path.join(INPUT_DIR, file);
  const ext = path.extname(file).toLowerCase();
  const key = path.parse(file).name;

  const buffer = fs.readFileSync(fullPath);
  const base64 = buffer.toString("base64");

  // Data URL format
  output[key] = `data:${mime(ext)};base64,${base64}`;
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
console.log(`✅ ${files.length} images converted → puck-base64.json`);
