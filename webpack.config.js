// eslint-disable-next-line
const path = require('path');

// eslint-disable-next-line
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// eslint-disable-next-line
module.exports = {

  entry: './js/index.js',
  
  output: {
    // eslint-disable-next-line
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {        
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
               {
                 loader: "file-loader",
  
                 options: {
                   outputPath: 'img'
                 }
               }
             ]
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }), 
  ],
};