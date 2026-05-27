import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INPUT  = path.join(__dirname, 'public/imagess/logo');
const OUTPUT = path.join(__dirname, 'public/imagess/logo.png');

// Flood-fill background removal from all 4 corners
// Only removes the connected white region touching the edges
const THRESHOLD = 30; // max distance from white (255,255,255) to count as background

function colorDistance(r, g, b) {
  return Math.sqrt((255 - r) ** 2 + (255 - g) ** 2 + (255 - b) ** 2);
}

function floodFill(data, width, height, startX, startY, visited) {
  const stack = [[startX, startY]];
  while (stack.length > 0) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    const idx = (y * width + x) * 4;
    if (visited[y * width + x]) continue;
    visited[y * width + x] = true;
    const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
    // Skip if already transparent or not close to white
    if (a === 0 || colorDistance(r, g, b) > THRESHOLD) continue;
    // Make this pixel transparent
    data[idx + 3] = 0;
    stack.push([x+1, y], [x-1, y], [x, y+1], [x, y-1]);
  }
}

async function removeBackground() {
  const image = await Jimp.read(INPUT);
  const { width, height, data } = image.bitmap;
  const visited = new Uint8Array(width * height);

  // Flood fill from all 4 corners
  floodFill(data, width, height, 0, 0, visited);
  floodFill(data, width, height, width - 1, 0, visited);
  floodFill(data, width, height, 0, height - 1, visited);
  floodFill(data, width, height, width - 1, height - 1, visited);

  await image.write(OUTPUT);
  console.log('✅ Background removed! Saved to:', OUTPUT);
}

removeBackground().catch(console.error);
