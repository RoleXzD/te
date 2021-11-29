module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        appId: "solartweaks.patcher",
          productName: "MoonHook",
        win: {
          target: "nsis",
          publisherName: "Darw1n"
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        extraResources: [
          {
            from: "./src/template/",
            to: "template",
            filter: ["**/*"]
          }
        ]
      }
    }
  }
}
