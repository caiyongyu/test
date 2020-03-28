const HtmlWebpackPlugin = require('html-webpack-plugin'); 
// const ExtracttextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  mode:"development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer:{
    contentBase:"./dist",
    inline:true
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      {
        test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "env", "react"
                ]
            }
        },
        exclude: /node_modules/
    },

//blog.csdn.net/hjh15827475896/article/details/86174626
      // { test: /\.css$/, use: ExtracttextPlugin.extract({
      //   fallback:"style-loader",
      //   use:[{
      //     loader:'css-loader',
      //     options:{
      //       minimize:true
      //     }
      //   }],
      //   publicPath:"../"
      // }) },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'file-loader?name=img/[name].[ext]' },
      { test: /\.html$/, use: 'html-withimg-loader' }
    ]
  },
  plugins:[
    // new ExtracttextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      minify:{
        collapseWhitespace: true,
        removeAttributeQuotes: true,
    
    //是否移除注释 默认false
    removeComments: true,
    removeEmptyAttributes: true
      }
    })
    
  ]
};