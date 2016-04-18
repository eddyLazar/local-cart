// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
      lib: "./src/main.js",
      demo: "./demo/demo.js",
    },
    // ["./app/main.js","./app/demo.js"],
    output: {
        path: __dirname + "/build",
        filename: "[name].js",
        publicPath: "/build"
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
        // new ExtractTextPlugin('[name].css', {
        //     allChunks: true
        // }),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          'riot': 'riot'
            
        })
    ]
};
