const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    main: './src/entry-server'
  },
  devtool: false,
  optimization: {
    splitChunks: false,
    runtimeChunk: false
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new VueSSRServerPlugin(),
  ]
})

module.exports = webpackConfig
