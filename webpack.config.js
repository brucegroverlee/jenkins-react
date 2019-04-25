const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const parseDotenv = (fileEnv) => {
  return Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
}

module.exports = (env) => {
  const envPath = path.join(__dirname, `.env.${env.ENVIRONMENT}`);
  const fileEnv = dotenv.config({ path: envPath }).parsed;
  const envKeys = parseDotenv(fileEnv);

  return{
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.[hash:4].js'
    },
    module: {
      rules:[{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      },{
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },{
        test: /\.(png|jpe?g|ico|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 25000
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle.[hash:4].css'
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devServer: {
      port: 3000,
      host: '0.0.0.0',
      historyApiFallback: true
    }
  };
}
