// const assert = require('assert');
const expect = require('chai').expect
const { chromium } = require('playwright');

const packageJson = require('./package.json');
const clientPlaywrightVersion = packageJson['devDependencies']['playwright'].substring(1);

(async () => {
  const caps = {
  	'browser': 'chrome',
    'os': 'osx',
    'os_version': 'catalina',
    'name': 'Playwright sample Local test',
    'build': 'playwright-build-3',
    'browserstack.local': 'true',
    'browserstack.username': 'YOUR_USERNAME',
    'browserstack.accessKey': 'YOUR_ACCESS_KEY',
    'client.playwrightVersion': clientPlaywrightVersion  // Playwright version being used on your local project needs to be passed in this capability for BrowserStack to be able to map request and responses correctly
  };
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:45454');
  const title = await page.title('');
  console.log(title);
  try {
    expect(title).to.equal("BrowserStack Local", 'Expected page title is incorrect!');
    // following line of code is responsible for marking the status of the test on BrowserStack as 'passed'. You can use this code in your after hook after each test
    await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'passed',reason: 'Local connection established successfully'}})}`);
  } catch {
    await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'failed',reason: 'Page title did not match'}})}`);
  }
  await browser.close();
})();