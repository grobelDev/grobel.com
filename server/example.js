const puppeteer = require('puppeteer');

var options = {
  headless: false,
  args: ['--disable-extensions-except=./ublock', '--load-extension=./ublock']
};

async function getExample() {
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 2 });
  await page.goto('https://coinmarketcap.com/');
  let screenshot = await page.screenshot({ path: './screenshots/example.png' });

  await browser.close();

  return screenshot;
}

async function getHn() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {
    waitUntil: 'networkidle2'
  });
  let pdf = await page.pdf({ path: 'hn.pdf', format: 'A4' });

  await browser.close();

  return pdf;
}

module.exports = {
  getExample: getExample,
  getHn: getHn
  // getFileMeta: getFileMeta,
  // getFiles: getFiles
};
