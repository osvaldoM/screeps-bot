const path = require('path');

module.exports = {
    devtool: 'source-map',
    externals: {
        global: 'global',
    },
    optimization: {
        minimize: false,
    },
    entry: path.resolve(__dirname, 'src/main.js'),
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        libraryTarget: 'commonjs-module',
    },
    resolve: {
        modules: [path.join(__dirname, 'src/')],
    },
};
