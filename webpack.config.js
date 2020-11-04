const path = require('path');
module.exports = {
    entry: {
        main: './src/index.js',
        import: './src/import.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: { cacheDirectory: true },
                exclude: /node_modules/
            }
        ],
    },
    target: 'node',
    watchOptions: {
        ignored: /node_modules/,
    }
};
