const { it, expect } = require('@playwright/test');
const { chromium } = require('playwright');

it('is a basic test with the page', async () => {
  const caps = {
  	'browser': 'chrome',
    'os': 'osx',
    'os_version': 'catalina',
    'name': 'Basic structure for porting Playwright tests',
    'build': 'Playwright bare bones structure',
    'browserstack.networkLogs': 'true',
    'browserstack.playwrightLogs': 'true',
    'browserstack.playwrightVersion': '1.9.0',
    'browserstack.console': 'verbose',
    'browserstack.debug': 'true',
    'browserstack.video': 'true',
    'acceptSslCerts': 'true',
    'browserstack.username': 'souravkundu_ebsAug',
    'browserstack.accessKey': '7j9LeMsZB73Rsb5S5nDz'
  };
  const browser = await chromium.connect({
    wsEndpoint: `wss://${caps["browserstack.username"]}:${caps["browserstack.accessKey"]}@cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
  });
  const page = await browser.newPage();

  /*
  *   Your test script goes here
  */
  await page.goto('https://playwright.dev/');
  expect(await page.innerText('.navbar__title')).toBe('Playwright');
  console.log(page.title);

  // The browser.close is important at the end of each script so the BrowserStack knows when your script has finished. Removing this can lead to Idle Timeouts
  await browser.close();
});