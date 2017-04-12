const path = require('path');
const webpack = require('webpack');
const root = path.resolve(`${__dirname}/..`);

module.exports = {
    context: `${root}/src`,
    entry: {
        'qna-widget' : './qna-widget.js',
        'pending-questions-popup' : './pending-questions-popup.js'
    },
    devtool: 'cheap-sourcemap',
    output: {
        path: `${root}/dist`,
        filename: '[name].js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env", {
                            "targets": {
                                "browsers": ["last 2 versions" ]
                            },
                            "modules": false
                        }]],
                        plugins: [ 'transform-object-rest-spread' ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'raw-loader' ]
            }
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     use: 'url-loader'
            // }
        ]
    },
    plugins: []
};
