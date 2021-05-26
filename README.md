# playwright-browserstack
Sample Playwright tests to run on BrowserStack

## Introduction

You can now run your Playwright tests on the BrowserStack infrastructure. Porting your existing Playwright tests to run on BrowserStack, can be done in a matter of minutes.

This guide walks you through running a sample Playwright test on BrowserStack and then goes on to run tests on privately hosted websites and also shows cross-browser tests run in parallel to speed up the build execution.

## Pre-requisites

You need BrowserStack credentials to be able to run Playwright tests and also you need to be included in the Beta group so that we can enable Playwright access for you in our infra while the integration is in closed-beta.

If you have already been included in the beta group, proceed ahead. Else, you can [reach out to support](https://www.browserstack.com/contact#technical-support) to get included in the beta group.

You have to replace `YOUR_USERNAME` and `YOUR_ACCESS_KEY` in the sample scripts in this repository with your BrowserStack credentials which can be found in your [Account Settings](https://www.browserstack.com/accounts/settings) page.

## Run your first Playwright test on BrowserStack

1. Clone this repository
2. Install the dependencies using `npm install`
3. Run the sample script using `node google_search.js`

## Run cross-browser tests in parallel

1. Clone this repository
2. Install the dependencies using `npm install`
3. Run the `parallel_test.js` script using `node parallel_test.js`

## Run sample test on privately hosted websites

1. You have to download the BrowserStack Local binary from the links below (depending on your environment):
   * [OS X (10.7 and above)](https://www.browserstack.com/browserstack-local/BrowserStackLocal-darwin-x64.zip)
   * [Linux 32-bit](https://www.browserstack.com/browserstack-local/BrowserStackLocal-linux-ia32.zip)
   * [Linux 64-bit](https://www.browserstack.com/browserstack-local/BrowserStackLocal-linux-x64.zip)
   * [Windows (XP and above)](https://www.browserstack.com/browserstack-local/BrowserStackLocal-win32.zip)
2. Once you have downloaded and unzipped the file, you can initiate the binary by running the command: `./BrowserStackLocal --key YOUR_ACCESS_KEY`
3. Once you see the terminal say “\[SUCCESS\] You can now access your local server(s) in our remote browser”, your local testing connection is considered established.
4. You can then run the sample Local test using `node local_test.js`

## Supported Browsers and Playwright versions

BrowserStack Playwright tests in beta supports the following browsers across the following OS versions:

### Browsers supported
1. Chrome (`'browser': 'chrome'`)
2. Firefox (`'browser': 'firefox'`)
3. Safari (`'browser': 'safari'`) - this is basically Webkit

**The browser version that will be used to run your test is the same that comes bundled with the Playwright version**. Supported Playwright versions and the option to specify them is given in a later section of this page.

**Note**: You can also run your tests in any of the mobile `devices` that Playwright supports for emulation. You can find the [sample code for running in an iPhone emulator](https://github.com/sourav-kundu/playwright-browserstack/blob/master/sample_test_on_iPhone.js) and the [sample for running on Pixel](https://github.com/sourav-kundu/playwright-browserstack/blob/master/sample_test_on_Pixel.js). The complete list of `devices` supported by Playwright can be found [here](https://github.com/microsoft/playwright/blob/master/src/server/deviceDescriptors.js)

### OS (with versions) supported
1. Windows 10 (`'os': 'Windows', 'os_version': '10'`)
2. macOS Big Sur (`'os': 'osx', 'os_version': 'Big Sur'`)
3. macOS Catalina (`'os': 'osx', 'os_version': 'Catalina'`)
4. macOS Mojave (`'os': 'osx', 'os_version': 'Mojave'`)

### Playwright versions supported

Currently, we are supporting 2 Playwright versions viz. `1.10.0` and `1.9.0`.
Playwright version can be specified using a capability as: `'browserstack.playwrightVersion': '1.10.0'`. If you do not specify a value for this capability then your tests would run on the default version `1.10.0`.

## Facing issues?

If you are facing any issue with any of the above or any other issue in trying to run your Playwright tests on BrowserStack, you can reach out to me directly at `sourav.k@browserstack.com` and I will be happy to debug your issues or at the least ensure that your issue becomes our top priority to resolve.