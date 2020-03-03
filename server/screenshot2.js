const puppeteer = require('puppeteer');

exports.screenshot2 = async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.send(
      'Please provide URL as GET parameter, for example: <a href="?url=https://example.com">?url=https://example.com</a>'
    );
  }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 800, deviceScaleFactor: 2 });
  await page.goto(url, {
    waitUntil: 'networkidle2'
  });
  const imageBuffer = await page.screenshot();
  browser.close();

  return imageBuffer;
};
