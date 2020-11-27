const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: {
        entry: './scripts/Index.js',

    },

    plugins: [new webpack.ProgressPlugin(),
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            inject: true,
            template: path.resolve('templates/index.html'),
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')

    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, 'scripts')],
            loader: 'babel-loader'
        }, {
            test: /.(scss|css)$/,

            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",

                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader",

                options: {
                    sourceMap: true
                }
            }]
        }]
    }

};