const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  module: { 
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: "./src/template.html"}),
            ],
};