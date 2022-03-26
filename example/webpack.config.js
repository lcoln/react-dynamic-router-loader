/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-13 19:17:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-26 19:41:48
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  output: {
    filename: `js/[name].[chunkhash].js`,
    chunkFilename: `js/[name].[chunkhash].js`,
    publicPath: '/'
  },
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".json",
    ],
  },
  // watch: true,
  devServer: {
    static: {
      directory: require("path").join('dist', 'static'),
    },
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 30009
  },
  module: {
    rules: [{
      test: /\.json$/,
      type: 'javascript/auto',
      resourceQuery: /dynamicRouter/,
      use: {
        loader: '@linteng/dynamic-router/react-loader',
        options: {
          pagesPath: path.resolve(process.cwd(), 'src', 'pages'),
        },
      },
    }, 
    {
      test: /\.(js|mjs|ts|tsx)$/,
      include: [
        require("path").resolve("./src"),
        require("path").resolve("./webpack"),
        require("path").resolve('../../airui/dist')
      ],
      use: ["babel-loader"],
      exclude: /node_modules/,
    }, 
    {
      test: /\.less$/,
      use: [
        // compiles Less to CSS
        'style-loader',
        'css-loader',
        'less-loader',
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      isBuild: false,
    }),
  ]
};