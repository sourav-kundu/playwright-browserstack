// const assert = require('assert');
const expect = require('chai').expect
const { chromium } = require('playwright');

(async () => {
  const caps = {
  	'browser': 'chrome',
    'os': 'osx',
    'os_version': 'catalina',
    'name': 'Playwright sample Local test',
    'build': 'playwright-build-3',
    'browserstack.local': 'true',
    'browserstack.username': 'YOUR_USERNAME',
    'browserstack.accessKey': 'YOUR_ACCESS_KEY'
  };
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:45454');
  const title = await page.title('');
  console.log(title);
  expect(title).to.equal("BrowserStack Local", 'Expected page title is incorrect!');
  await browser.close();
})();