const cp = require('child_process');
const clientPlaywrightVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

const caps_chromium = {
    'browser': 'chrome',
    'os': 'osx',
    'os_version': 'big sur',
    'name': 'Playwright-jest test on Chromium',
    'build': 'playwright-jest-build-1',
    'browserstack.username': 'YOUR_USERNAME',
    'browserstack.accessKey': 'YOUR_ACCESS_KEY',
    'client.playwrightVersion': clientPlaywrightVersion
};

const caps_firefox = {
    'browser': 'firefox',
    'os': 'osx',
    'os_version': 'big sur',
    'name': 'Playwright-jest test on Firefox',
    'build': 'playwright-jest-build-1',
    'browserstack.username': 'YOUR_USERNAME',
    'browserstack.accessKey': 'YOUR_ACCESS_KEY',
    'client.playwrightVersion': clientPlaywrightVersion
};

const caps_webkit = {
    'browser': 'safari',
    'os': 'osx',
    'os_version': 'big sur',
    'name': 'Playwright-jest test on Webkit',
    'build': 'playwright-jest-build-1',
    'browserstack.username': 'YOUR_USERNAME',
    'browserstack.accessKey': 'YOUR_ACCESS_KEY',
    'client.playwrightVersion': clientPlaywrightVersion
};

module.exports = {
    connectOptions: {
        chromium: {
          wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps_chromium))}`
        },
        firefox: {
          wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps_firefox))}`
        },
        webkit: {
            wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps_webkit))}`
        }
      },
      browsers: ['chromium', 'firefox', 'webkit'],
}