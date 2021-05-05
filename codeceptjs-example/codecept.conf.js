const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const caps = {
  'browser': 'chrome',
  'os': 'osx',
  'os_version': 'catalina',
  'name': 'Codecept test using Playwright',
  'build': 'CodeceptJS on BrowserStack',
  'browserstack.username': 'YOUR_USERNAME',
  'browserstack.accessKey': 'YOUR_ACCESS_KEY'
};

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      // url: 'http://localhost',
      show: true,
      browser: 'chromium',
      chromium: {
        browserWSEndpoint: { wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}` }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}