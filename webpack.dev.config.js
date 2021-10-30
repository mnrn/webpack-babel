module.exports = {
  mode: 'development',
  devtool: 'inline-sourve-map',
  watchOptions: {
    ignored: /node_modules/
  },
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
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
