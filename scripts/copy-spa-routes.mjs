import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const distDir = 'dist';
const sitemapPath = 'public/sitemap.xml';
const indexPath = join(distDir, 'index.html');
const basePath = '/exclusive-global-advisory/';

if (!existsSync(indexPath)) {
  throw new Error(`Missing ${indexPath}. Run vite build before copying routes.`);
}

const sitemap = readFileSync(sitemapPath, 'utf8');
const paths = Array.from(sitemap.matchAll(/<loc>https:\/\/dainer1992-ship-it\.github\.io\/exclusive-global-advisory\/([^<]*)<\/loc>/g))
  .map((match) => `/${match[1]}`)
  .filter((path) => path !== '/' && !path.includes('.'));

for (const path of paths) {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  const target = join(distDir, normalized.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(indexPath, target);
}

console.log(`Copied SPA index to ${paths.length} GitHub Pages routes under ${basePath}`);
