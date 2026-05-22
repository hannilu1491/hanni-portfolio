import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const manifestPath = path.join(root, "asset-manifest.json");
const assets = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

function download(url, target) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(root, target);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    const file = fs.createWriteStream(filePath);
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0", "Accept": "image/avif,image/webp,image/*,*/*" } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(filePath);
        return resolve(download(response.headers.location, target));
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath);
        return reject(new Error(`Failed ${response.statusCode}: ${url}`));
      }

      response.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", (err) => {
      file.close();
      try { fs.unlinkSync(filePath); } catch {}
      reject(err);
    });
  });
}

let ok = 0;
for (const asset of assets) {
  try {
    console.log(`Downloading ${asset.target}`);
    await download(asset.url, asset.target);
    ok++;
  } catch (error) {
    console.error(`Failed: ${asset.target}`);
    console.error(error.message);
  }
}

console.log(`Done. Downloaded ${ok}/${assets.length} assets.`);