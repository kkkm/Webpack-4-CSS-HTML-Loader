const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
      rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
     plugins: [
//    new HtmlWebPackPlugin({
//      template: "./src/static/index.html",
//      filename: "./index.html"
//    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
    optimization: {
    splitChunks: {
        cacheGroups: {
            default: false,
            vendors: false,
            // vendor chunk
            vendor: {
                // sync + async chunks
                chunks: 'all',
                // import file path containing node_modules
                test: /node_modules/
            }
        }
    }
},
    performance: {
    maxEntrypointSize: 400000
  }
};