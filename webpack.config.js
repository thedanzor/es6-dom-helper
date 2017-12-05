var webpack = require('webpack');
var path = require('path');
var libraryName = 'app';
var outputFile = libraryName + '.js';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: __dirname + '/src/index.js',
	devtool: 'source-map',
	output: {
		path: __dirname + '/build',
		filename: outputFile,
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [
			{
				test: /(\.jsx|\.js)$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
					'css-loader!sass-loader!postcss-loader'
				)
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=public/fonts/[name].[ext]'
			}
		]
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
		extensions: ['*', '.js', '.css', '.jsx']
	},
	plugins: [new ExtractTextPlugin({ filename: 'style.css', allChunks: true })]
};

module.exports = config;
