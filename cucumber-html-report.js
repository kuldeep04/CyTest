const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: './cypress/CucumberReports',
	reportPath: 'cypress/CucumberReports/cucumber-htmlreport.html',
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "latest",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Test Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 19th 2025, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});