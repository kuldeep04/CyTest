const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "j4ci1d",
 reporter: 'cypress-mochawesome-reporter',
 reporterOptions: {
  charts: true,
  reportPageTitle: 'custom-title',
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
    },
    specPattern: 'cypress/integration/testExamples/*.js',
    video: true,       // <-- Enable video recording
    videoCompression: 32, // Optional (reduces file size)
    videosFolder: "cypress/videos",
  },
});
