const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: null,
    testIsolation: true,
  },
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/output/reports/"
  },
  retries: { "runMode": 0, "openMode": 0 },
  pageLoadTimeout: 30000, //60000 default 
  responseTimeout: 60000, //30000 default
  downloadsFolder: 'cypress/output',
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/output/screenshots',
  videosFolder: 'cypress/output/videos',
  screenshotOnRunFailure: true,
  wideo: true,
});
