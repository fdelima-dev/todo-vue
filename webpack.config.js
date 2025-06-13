const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // outras regras
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
