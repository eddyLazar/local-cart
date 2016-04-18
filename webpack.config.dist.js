// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
      cart: "./src/main.js",
    },
    // ["./app/main.js","./app/demo.js"],
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        publicPath: "/dist"
    },
    module: {
      preLoaders: [
        { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
      ],
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
              presets: ['es2015']
            }
          }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
      
    ]
};
