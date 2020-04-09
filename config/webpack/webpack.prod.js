const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CompressionPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      cleanupOutdatedCaches: true,
      navigateFallback: '/index.html',
      navigateFallbackAllowlist: [/^(?!\/__)/],
    }),
  ],
});
