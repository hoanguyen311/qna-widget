const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

const getPlugins = () => {
    if (isProduction) {
        return [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                comments: false
            })
        ];
    }

    return [];
}

module.exports = {
    context: `${__dirname}/src`,
    entry: './main.js',
    devtool: isProduction ? false : 'cheap-sourcemap',
    output: {
        path: `${__dirname}/dist`,
        library: 'QnAWidget',
        filename: 'qna-widget.js',
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
                                "browsers": ["last 2 versions", "safari >= 7", "ie >= 10"]
                            },
                            modules: false
                        }]],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', {
                    loader: 'css-loader',
                    options: {
                        minimize: isProduction
                    }
                } ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: getPlugins(),
    devServer: {
        contentBase: [ __dirname, `${__dirname}/examples` ],
        port: 9000
    }
};
