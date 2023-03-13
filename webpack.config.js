const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');


const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
  },
  }
}

module.exports = ({develop}) =>({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'eval-cheap-module-source-map' : 'source-map',
  entry: path.resolve(__dirname, './src/index.ts'),
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
  },  
  module: {
    rules: [ 
      {
        test: /\.(?:ico|gif|png|jpg|jpg|svg)$/i,
        type:'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader' 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
           miniCss.loader,
           'css-loader',
           'sass-loader',
        ]
      },
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
},
  plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/index.html'),
  }),
  new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
  new miniCss({
    filename: 'style.css',
 }),
  ],
  ...devServer(develop),
});