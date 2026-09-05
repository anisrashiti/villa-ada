import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';

// Keep supplied photographs intact; generate responsive assets separately.
const directory = 'public/images';
await mkdir(`${directory}/optimized`, { recursive: true });
let originalBytes = 0;
let optimizedBytes = 0;
for (const file of (await readdir(directory)).filter((name) =>
  name.endsWith('.jpeg'),
)) {
  originalBytes += (await stat(`${directory}/${file}`)).size;
  for (const width of [480, 960, 1600]) {
    const output = `${directory}/optimized/${file.replace('.jpeg', '')}-${width}.webp`;
    const result = await sharp(`${directory}/${file}`)
      .rotate()
      .resize({ width })
      .webp({ quality: 80, effort: 5 })
      .toFile(output);
    if (width === 1600) optimizedBytes += result.size;
  }
}
console.log(
  JSON.stringify({
    originalBytes,
    optimizedBytes,
    reduction: `${Math.round((1 - optimizedBytes / originalBytes) * 100)}%`,
  }),
);
