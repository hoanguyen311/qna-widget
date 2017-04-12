const path = require('path');
const common = require('./common');
const root = path.resolve(`${__dirname}/..`);

module.exports = Object.assign({}, common, {
    output: {
        path: `${root}/dist`,
        filename: '[name].js',
        publicPath: 'dist'
    },
    devServer: {
        contentBase: [ root, `${root}/examples` ],
        port: 9000
    }
});
