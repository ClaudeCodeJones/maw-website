import { mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, readdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Auto-increment screenshot filename
const screenshotDir = join(__dirname, 'temporary screenshots');
await mkdir(screenshotDir, { recursive: true });

function getNextFilename() {
  let files = [];
  try { files = readdirSync(screenshotDir); } catch {}
  const nums = files
    .map(f => f.match(/^screenshot-(\d+)/))
    .filter(Boolean)
    .map(m => parseInt(m[1]));
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  const suffix = label ? `-${label}` : '';
  return join(screenshotDir, `screenshot-${next}${suffix}.png`);
}

const outPath = getNextFilename();

// Try multiple puppeteer locations
const puppeteerPaths = [
  'C:/Users/nateh/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer',
  'C:/Users/NathanJones/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer',
  join(__dirname, 'node_modules/puppeteer'),
  'puppeteer',
];

let puppeteer;
for (const p of puppeteerPaths) {
  try {
    puppeteer = (await import(p)).default;
    break;
  } catch {}
}

if (!puppeteer) {
  console.error('Puppeteer not found. Tried:', puppeteerPaths.join(', '));
  process.exit(1);
}

// Chrome executable paths to try
const chromePaths = [
  'C:/Users/nateh/.cache/puppeteer/chrome/win64-131.0.6778.204/chrome-win64/chrome.exe',
  'C:/Users/NathanJones/.cache/puppeteer/chrome/win64-131.0.6778.204/chrome-win64/chrome.exe',
];

let executablePath;
for (const p of chromePaths) {
  if (existsSync(p)) { executablePath = p; break; }
}

const browser = await puppeteer.launch({
  headless: true,
  ...(executablePath ? { executablePath } : {}),
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
const isMobile = process.argv[4] === 'mobile';
await page.setViewport({ width: isMobile ? 390 : 1440, height: isMobile ? 844 : 900, deviceScaleFactor: 1.5 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

// Trigger all scroll-reveal elements (IntersectionObserver won't fire off-screen in full-page screenshots)
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
});

// Wait for CSS transitions and fonts to settle
await new Promise(r => setTimeout(r, 900));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outPath}`);
