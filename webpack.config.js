const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

// var WebpackNotifierPlugin = require("webpack-notifier");

// module.exports = {
//     entry: ['babel-polyfill', "./src/client/registration/index.js"],
//     output: {
//         path: __dirname + "/src/client/builds/",
//         filename: "registration-bundle.js"
//     },
//     module: {
//         rules: [
//             { test: /\.css$/, loader: "style-loader!css-loader" },
//             { test: /\.jsx?$/, loader: "babel-loader" }
//         ]
//     },
//     plugins: [
//         new WebpackNotifierPlugin(),
//     ],
//     devtool: "source-map"
// };
