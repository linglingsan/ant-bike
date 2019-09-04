const {
  override,
  overrideDevServer,
  fixBabelImports,
  addDecoratorsLegacy,
  addLessLoader
} = require("customize-cra");
module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css"
    }),
    addDecoratorsLegacy(),
    addLessLoader({ javascriptEnabled: true })
  ),
  devServer: overrideDevServer()
};
