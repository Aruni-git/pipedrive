const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewreportHeight: 1080,
  viewportWidth:1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://app.pipedrive.com",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],
    watchForFileChanges: false
    
  
  },

});
