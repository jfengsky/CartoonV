const webpack = require('webpack')
module.exports = {
  mode: 'production',
  entry: {
    index: "./dist/src/index.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/public/"
  },
  devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
}