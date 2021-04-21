const expect = require('chai').expect
const { chromium, devices } = require('playwright');
(async () => {
  /*
  * The following caps variable is for defining the BrowserStack specific capabilities
  * The test will run in the browser/os combination is specified here
  * The name of the test and also the build name goes here as well
  * The credentials also need to be part of the caps as 'browserstack.username' and 'browserstack.accessKey'
  */
  const caps = {
  	'browser': 'chrome',
    'name': 'Test on Playwright emulated Pixel 5',
    'build': 'playwright-build-4',
    'browserstack.username': 'YOUR_USERNAME',
    'browserstack.accessKey': 'YOUR_ACCESS_KEY'
  };
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
  });
  const context = await browser.newContext({...devices['Pixel 5']});  // Complete list of devices - https://github.com/microsoft/playwright/blob/master/src/server/deviceDescriptors.js
  const page = await context.newPage();
  /*
  * This is the end of BrowserStack specific code. The following lines belong to the sample test that we will run.
  */
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