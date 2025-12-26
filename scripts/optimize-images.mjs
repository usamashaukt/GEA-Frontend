import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");

/**
 * Write a resized WebP variant for an existing image.
 * - Keeps original file untouched unless `outPath === inPath`.
 * - Avoids upscaling.
 */
async function writeWebpVariant({
  inPath,
  outPath,
  width,
  quality = 72,
  effort = 5,
}) {
  const img = sharp(inPath, { failOn: "none" });
  const meta = await img.metadata();
  const targetWidth = Math.min(width, meta.width ?? width);

  await fs.mkdir(path.dirname(outPath), { recursive: true });

  await img
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality, effort })
    .toFile(outPath);
}

async function writeJpegVariant({
  inPath,
  outPath,
  width,
  quality = 75,
  mozjpeg = true,
}) {
  const img = sharp(inPath, { failOn: "none" });
  const meta = await img.metadata();
  const targetWidth = Math.min(width, meta.width ?? width);

  await fs.mkdir(path.dirname(outPath), { recursive: true });

  await img
    .resize({ width: targetWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg })
    .toFile(outPath);
}

async function main() {
  // Hero: add a 1366w candidate; keep existing filenames intact.
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/big-ben/hero-sec.webp"),
    outPath: path.join(publicDir, "assets/images/big-ben/hero-sec-1366.webp"),
    width: 1366,
    quality: 74,
  });

  // Big images used at many sizes: generate responsive variants.
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/Aus-bg/sydney-opera-house.webp"),
    outPath: path.join(
      publicDir,
      "assets/images/Aus-bg/sydney-opera-house-256.webp"
    ),
    width: 256,
    quality: 70,
  });
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/Aus-bg/sydney-opera-house.webp"),
    outPath: path.join(
      publicDir,
      "assets/images/Aus-bg/sydney-opera-house-512.webp"
    ),
    width: 512,
    quality: 72,
  });
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/Aus-bg/sydney-opera-house.webp"),
    outPath: path.join(
      publicDir,
      "assets/images/Aus-bg/sydney-opera-house-1024.webp"
    ),
    width: 1024,
    quality: 74,
  });

  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/big-ben/big-Ben-London.webp"),
    outPath: path.join(publicDir, "assets/images/big-ben/big-Ben-London-256.webp"),
    width: 256,
    quality: 74,
  });
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/big-ben/big-Ben-London.webp"),
    outPath: path.join(publicDir, "assets/images/big-ben/big-Ben-London-512.webp"),
    width: 512,
    quality: 76,
  });
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/big-ben/big-Ben-London.webp"),
    outPath: path.join(
      publicDir,
      "assets/images/big-ben/big-Ben-London-1024.webp"
    ),
    width: 1024,
    quality: 78,
  });

  // Student image: keep JPG path, add WebP sources.
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/studentpics/student3.jpg"),
    outPath: path.join(publicDir, "assets/images/studentpics/student3-400.webp"),
    width: 400,
    quality: 72,
  });
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/studentpics/student3.jpg"),
    outPath: path.join(publicDir, "assets/images/studentpics/student3-800.webp"),
    width: 800,
    quality: 74,
  });

  // Logos: generate smaller variants (keep original URLs unchanged).
  // These are only displayed ~160px wide; 320w supports 2x DPR.
  const uniLogos = [
    "BPP.webp",
    "Heriot-watt.webp",
    "LSBU.webp",
    "Gisma_Business_School_Logo_02.2022.svg.webp",
    "uws.webp",
    "lincoln.webp",
    "bangor.webp",
    "Arden-University.webp",
    "bcu.webp",
    "Bedfordshire.webp",
  ];
  for (const file of uniLogos) {
    const inPath = path.join(publicDir, "assets/images/uni-logos", file);
    const base = file.replace(/\.webp$/i, "");
    await writeWebpVariant({
      inPath,
      outPath: path.join(publicDir, "assets/images/uni-logos", `${base}-160.webp`),
      width: 160,
      quality: 80,
    });
    await writeWebpVariant({
      inPath,
      outPath: path.join(publicDir, "assets/images/uni-logos", `${base}-320.webp`),
      width: 320,
      quality: 82,
    });
  }

  // Brand logo: displayed ~100px; generate variants (keep original URL unchanged).
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/hu-logo/hu-logo-bg.webp"),
    outPath: path.join(publicDir, "assets/images/hu-logo/hu-logo-bg-150.webp"),
    width: 150,
    quality: 82,
  });
  await writeWebpVariant({
    inPath: path.join(publicDir, "assets/images/hu-logo/hu-logo-bg.webp"),
    outPath: path.join(publicDir, "assets/images/hu-logo/hu-logo-bg-300.webp"),
    width: 300,
    quality: 84,
  });

  console.log("Image optimization complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


