module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  }
}
