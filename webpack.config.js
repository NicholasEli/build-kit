var path = require('path');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');


module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './client/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            include: [path.resolve(__dirname, 'client')],
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-3'],
                plugins: ['transform-react-jsx']
            }
        }, {
            test: /\.scss$/,
            include: [path.resolve(__dirname, 'sass/style.scss')],
            loaders: ['style-loader' ,'css-loader' ,'sass-loader']
        }]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
};