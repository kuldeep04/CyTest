const { defineConfig } = require('cypress');
const { merge } = require("mochawesome-merge");
const generate = require("mochawesome-report-generator");

module.exports = defineConfig({
  projectId: "j4ci1d",
 reporter: 'cypress-mochawesome-reporter',
 reporterOptions: {
  reportDir: "cypress/reports/mochawesome-report",
  overwrite: true,
  embeddedScreenshots: true,
  inlineAssets: true,
  saveJson:true,
  html: false,
  json: true
},
 env:{
    url: "https://rahulshettyacademy.com" 
 },
 retries:{
  runMode: 2,
 },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/integration/testExamples/*.js',
    video: true,       // <-- Enable video recording
    videoCompression: 32, // Optional (reduces file size)
    videosFolder: "cypress/videos",
  },
});
