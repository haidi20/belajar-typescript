var path = require('path');

module.exports = {
    entry: './src/app.ts',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [{
            test: /.ts$/,
            loader: 'ts-loader'
        }]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    }
};