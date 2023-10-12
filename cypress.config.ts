import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "t4nguo",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  "video": true,
  "videosFolder": "cypress/videos",
});
