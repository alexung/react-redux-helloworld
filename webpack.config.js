var path = require('path');

// this is duplicating some logic in gulpfile but it makes
// it so that we can use webpack independently
module.exports = {
  entry: [
    'babel-polyfill',
    [__dirname, 'src', 'app', 'index.js'].join(path.sep)
  ],
  resolve: {
    modulesDirectories: ['node_modules']
  },
  output: {
    path: [__dirname, 'src'].join(path.sep),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};