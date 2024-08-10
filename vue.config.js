const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.devtool = "source-map";
    }
  },
  pwa: {
    workboxPluginMode: 'GenerateSW', // Automatically generate the service worker
    workboxOptions: {
      skipWaiting: true, // Activate new service worker immediately
      clientsClaim: true, // Take control of clients immediately
    },
  },
});
