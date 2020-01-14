const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const helpers = require('./helpers')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const isDev = process.env.NODE_ENV === 'development'

const webpackConfig = {
  entry: {
    polyfill: '@babel/polyfill',
    main: helpers.root('src', 'entry-client'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
      '@': helpers.root('src'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|ts|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [helpers.root('src')],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [helpers.root('src')],
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: isDev}},
        ],
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: isDev}},
          {loader: 'sass-loader', options: {sourceMap: isDev}},
        ],
      },
      {
        test: /\.sass$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          {loader: 'css-loader', options: {sourceMap: isDev}},
          {loader: 'sass-loader', options: {sourceMap: isDev}},
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]?[hash]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist'],
    }),
    new ProgressBarPlugin({
      clear: true,
    }),
    new VueLoaderPlugin(),
    new HtmlPlugin({template: 'index.html', chunksSortMode: 'dependency'}),
    new VueSSRClientPlugin(),
  ],
  stats: 'errors-only',
}

module.exports = webpackConfig
