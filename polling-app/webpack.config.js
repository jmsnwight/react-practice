module.exports = {
  entry: './app-client.js',
  output: {
    filename: "public/bundle.js"
  },
  module : {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)|app-server.js/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
