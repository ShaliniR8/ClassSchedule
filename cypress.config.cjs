const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mrpiq4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
  },
});