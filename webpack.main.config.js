module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
