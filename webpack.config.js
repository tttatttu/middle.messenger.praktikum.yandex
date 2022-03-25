const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss']
  },
  mode:  'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(svg|woff(2)?)$/,
        type: 'asset/resource'
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {importLoaders: 1}
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json')
            }
          }
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}
