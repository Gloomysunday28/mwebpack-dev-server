class HTMLWebpackPlugin {
  constructor() {
  }

  init(modules, config, mwebpack) {
    const initHTMLPlugin = new mwebpack.HTMLWebpackPlugin()
    initHTMLPlugin.init(modules, config)
  }
}

module.exports = HTMLWebpackPlugin
