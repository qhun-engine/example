const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/frontend/Game.ts',
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'dist', 'public')
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: "src/server/public",
      to: ""
    }])
  ]
};