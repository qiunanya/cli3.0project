const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("Assets", resolve("src/assets"))
      .set("Components", resolve("src/components"))
      .set("Layout", resolve("src/layout"))
      //   .set("static", resolve("src/static"))
      .set("Views", resolve("src/views"));
  },
  baseUrl: process.env.NODE_ENV === "production" ? "/backstage/" : "/",
  devServer: {
    // host: "99.99.99.111",
    hot: true
  }
};
