const { defineConfig } = require('cypress');
const { merge } = require("mochawesome-merge");
const generate = require("mochawesome-report-generator");

module.exports = defineConfig({
  projectId: "j4ci1d",
 reporter: 'cypress-mochawesome-reporter',
 reporterOptions: {
  reportDir: "cypress/reports/html",
  overwrite: false,
  html: true,
  json: true,
  charts: true,
  reportPageTitle: 'Cypress E2E test',
  embeddedScreenshots: true,
  inlineAssets: true,
  videoOnFailOnly:true,
  saveAllAttempts: false,
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
