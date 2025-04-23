// reference: https://codepen.io/nigelotoole/pen/abbzQwg

export const LENS_SIZE = 150;

export const drawMagnifier = (
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  cx: number,
  cy: number,
  magnification: number
): void => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const size = LENS_SIZE;
  const zoom = 1 / magnification;

  canvas.width = size;
  canvas.height = size;

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, size, size);

  // Calculate source coordinates adjusting to the natural image size
  const sx = cx * (img.naturalWidth / img.width) - size / (2 * zoom);
  const sy = cy * (img.naturalHeight / img.height) - size / (2 * zoom);

  // Draw magnified part of the image
  ctx.drawImage(img, sx, sy, size / zoom, size / zoom, 0, 0, size, size);

  // --- Apply Fisheye Effect ---
  const imgData = ctx.getImageData(0, 0, size, size);
  const pixels = imgData.data;
  const pixelsCopy = new Uint8ClampedArray(pixels);
  const w = size;
  const h = size;

  for (let y = 0; y < h; y++) {
    const ny = (2 * y) / h - 1;
    const ny2 = ny * ny;
    for (let x = 0; x < w; x++) {
      const nx = (2 * x) / w - 1;
      const r = Math.sqrt(nx * nx + ny2);
      if (r <= 1.0) {
        let nr = Math.sqrt(1.0 - r * r);
        nr = (r + (1.0 - nr)) / 2.0; // fisheye mapping
        if (nr <= 1.0) {
          const theta = Math.atan2(ny, nx);
          const nxn = nr * Math.cos(theta);
          const nyn = nr * Math.sin(theta);
          const x2 = Math.floor(((nxn + 1) * w) / 2);
          const y2 = Math.floor(((nyn + 1) * h) / 2);
          const srcIndex = (y2 * w + x2) * 4;
          const dstIndex = (y * w + x) * 4;
          pixels[dstIndex] = pixelsCopy[srcIndex];
          pixels[dstIndex + 1] = pixelsCopy[srcIndex + 1];
          pixels[dstIndex + 2] = pixelsCopy[srcIndex + 2];
          pixels[dstIndex + 3] = pixelsCopy[srcIndex + 3];
        }
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);
};
