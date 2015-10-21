var path = require('path');
var pkg = require('../package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEBUG = process.env.NODE_ENV === 'development';

var jsxLoader;
var sassLoader;
var cssLoader;
var fileLoader = 'file-loader?name=[path][name].[ext]';
var htmlLoader = [
    'file-loader?name=[path][name].[ext]',
    'template-html-loader?' + [
        'raw=true',
        'engine=lodash',
        'version=' + pkg.version,
        'title=' + pkg.name,
        'debug=' + DEBUG
    ].join('&')
].join('!');
var jsonLoader = ['json-loader'];

var sassParams = [
    'outputStyle=expanded',
    'includePaths[]=' + path.resolve(__dirname, '../app/scss'),
    'includePaths[]=' + path.resolve(__dirname, '../node_modules')
];

if (DEBUG) {
    jsxLoader = [];
    jsxLoader.push('react-hot');
    jsxLoader.push('babel-loader?optional[]=runtime&stage=0&plugins=rewire');
    sassParams.push('sourceMap', 'sourceMapContents=true');
    sassLoader = [
        'style-loader',
        'css-loader?sourceMap&localIndentName=[name]__[local]___[hash:base64:5]', //?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader',
        'sass-loader?' + sassParams.join('&')
    ].join('!');
    cssLoader = [
        'style-loader',
        'css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader'
    ].join('!');
} else {
    jsxLoader = ['babel-loader?optional[]=runtime&stage=0&plugins=rewire'];
    sassLoader = ExtractTextPlugin.extract('style-loader', [
        'css-loader?modules&localIdentName=[hash:base64:5]',
        'postcss-loader',
        'sass-loader?' + sassParams.join('&')
    ].join('!'));
    cssLoader = ExtractTextPlugin.extract('style-loader', [
        'css-loader?modules&localIdentName=[hash:base64:5]',
        'postcss-loader'
    ].join('!'));
}


var loaders = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: jsxLoader
    },
    {
        test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff2?$|\.ttf$|\.otf$|\.eot$/,
        loader: fileLoader
    },
    {
        test: /\.html$/,
        loader: htmlLoader
    },
    {
        test: /node_modules\/.*\.css$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: cssLoader
    },
    {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: jsonLoader
    },
    {
        test: /\.scss$/,
        loader: sassLoader
    }
];

module.exports = loaders;