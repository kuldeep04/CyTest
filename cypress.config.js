const { defineConfig } = require('cypress');
const { merge } = require("mochawesome-merge");
const generate = require("mochawesome-report-generator");
const browserify = require("@cypress/browserify-preprocessor");
const sqlServer = require('cypress-sql-server');

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(cypressOn, config) {


  config.db = {
    userName: "luxorlivingadmin",
    password: "Asdf@1234",
    server: "luxorlivingdesignserver.database.windows.net",
    options: {
        database: "luxorlivingdesign",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}

  // implement node event listeners here
  const on = require('cypress-on-fix')(cypressOn)
  await addCucumberPreprocessorPlugin(cypressOn, config);
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  require('cypress-mochawesome-reporter/plugin')(on);

  return config;
};

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
    setupNodeEvents,
    specPattern: '**/*.js',
    video: false,       // <-- Enable video recording
    videoCompression: 32, // Optional (reduces file size)
    videosFolder: "cypress/videos",
  },
});
