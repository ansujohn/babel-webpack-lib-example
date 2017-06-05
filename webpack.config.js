const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

let plugins = [];

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({minimize: true}));
}

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sampleLib.js',
        library: 'sampleLib',
        libraryTarget: 'commonjs2',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    externals: {
        'lodash': {
            commonjs2: 'lodash'
        },
        'isomorphic-fetch': {
            commonjs2: 'isomorphic-fetch'
        }
    },
    module: {
        loaders: [{
            loader: 'babel-loader',

            // Skip any files outside of `src` directory
            include: [
                path.join(__dirname, 'src')
            ],

            // Only run `.js`  files through Babel
            test: /\.js$/
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    stats: {
        colors: true,
        errors: true,
        errorDetails: true,
        progress: true
    },
    plugins: plugins
};
