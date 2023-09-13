const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "smvz27",
  e2e: {
    baseUrl: "https://tourmaline-phoenix-60b7bc.netlify.app/",
    supportFile: false
  },
});
