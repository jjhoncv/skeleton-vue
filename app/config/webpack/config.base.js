const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const {
  dotenvOverride,
  createVarsDefinePlugin
} = require('./utils');

dotenvOverride();

const rootPath = path.join(__dirname, '../../');
const publicPath = process.env.PATH_STATIC + '/';

module.exports = {
  devtool: 'source-map',
  entry: path.join(rootPath, 'src/index.js'),
  output: {
    path: path.join(rootPath, 'dist'),
    publicPath
  },
  module: {
    rules: [{
        test: /\.(jpe?g|png|svg|woff2|woff|ttf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            publicPath
          }
        }
      },
      {
        test: /\.js$/,
        exclude: path.join(rootPath, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin()),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: path.join(rootPath, 'public/index.html')
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@app': rootPath
    }
  }
};
