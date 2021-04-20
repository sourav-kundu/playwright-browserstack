// const assert = require('assert');
const expect = require('chai').expect
const { chromium } = require('playwright');

(async () => {
  const caps = {
  	'browser': 'chrome',
    'os': 'osx',
    'os_version': 'catalina',
    'name': 'My first playwright test',
    'build': 'playwright-build-1',
    'browserstack.username': 'souravkundu_ebsAug',
    'browserstack.accessKey': '7j9LeMsZB73Rsb5S5nDz'
  };
  const browser = await chromium.connect({
    wsEndpoint: `wss://${caps["browserstack.username"]}:${caps["browserstack.accessKey"]}@cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/ncr');
  const element = await page.$('[aria-label="Search"]');
  await element.click();
  await element.type('BrowserStack');
  await element.press('Enter');
  const title = await page.title('');
  console.log(title);
  expect(title).to.equal("BrowserStack - Google Search", 'Expected page title is incorrect!');
  await browser.close();
})();