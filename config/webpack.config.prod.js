const webpack = require('webpack')
const merge = require('webpack-merge')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const helpers = require('./helpers')
const commonConfig = require('./webpack.config.common')

const webpackConfig = merge(commonConfig, {
  mode: 'production',
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
  },
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', {discardComments: {removeAll: true}}],
        },
      }),
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `npm.${ packageName.replace('@', '') }`
          },
        },
        styles: {
          test: /\.css$/,
          name: 'styles',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
})

module.exports = webpackConfig
