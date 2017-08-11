var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool:"cheap-module-source-map",
    entry: {
        main: './app/index.js',
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', // 指定公共 bundle 的名字。
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),

        new ExtractTextPlugin('main.css'),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', "sass-loader"]
                })
            }, {
                test: /\.css$/,
                use: 'css-loader'
            }, {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}]],
                        plugins: ['syntax-dynamic-import']
                    }
                }]
            },{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};