const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'myBundle.js'
  },
  devServer: {
    before: function(src, server){
      server._watch('./src/*.html')
    },
    contentBase: path.join(__dirname, 'src'),
      hot: true,
      port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: 'images/'
        }
      }
    ]
  }
}