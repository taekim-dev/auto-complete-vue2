const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.devtool = "source-map";
    }
  },
  pwa: {
    name: 'AUTO-COMPLETE-VUE2',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
});
