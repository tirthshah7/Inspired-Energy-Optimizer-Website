import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'logo-icon.svg');
const pngPath = join(root, 'public', 'logo-icon.png');

const svg = readFileSync(svgPath);
await sharp(svg)
  .resize(512, 512)
  .png()
  .toFile(pngPath);

console.log('Generated public/logo-icon.png (512×512)');
