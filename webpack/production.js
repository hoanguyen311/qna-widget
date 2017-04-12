const webpack = require('webpack');
const Manifest = require('webpack-manifest-plugin');
const common = require('./common');

module.exports = [
    Object.assign({}, common, {
        entry: {
            'main' : './qna-widget.js'
        },
        plugins: common.plugins.concat([
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                comments: false
            })
        ])
    }),
    Object.assign({}, common, {
        entry: {
            'pending-questions-popup' : './pending-questions-popup.js'
        },
        plugins: common.plugins.concat([
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                comments: false
            }),
            new Manifest({ fileName: 'manifest.json' })
        ]),
        output: Object.assign({}, common.output, {
            filename: '[name].[chunkhash].js'
        }),
    })
]
