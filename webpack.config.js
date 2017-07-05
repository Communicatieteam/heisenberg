const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
	entry: './assets/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './_dist'),
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader' },
						{
							loader: 'sass-loader'
							// options: {
							// 	outputStyle: 'compressed'
							// }
						}
					]
				})
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				include: [
					path.resolve(__dirname, 'assets/main.js'),
					path.resolve(__dirname, 'assets/js'),
					path.resolve(__dirname, 'node_modules/foundation-sites/js')
				],
				}
			}
		],
	},
	plugins: [
		new BrowserSyncPlugin({
			proxy: 'http://heisenberg.dev',
			files: [
				'**.*.php'
			],
		}),
		new ExtractTextPlugin('[name].css'),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: { warnings: false },
		// 	output: { comments: false },
		// 	sourceMap: true
		// })
	],
};

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new UglifyJSPlugin({
			sourceMap: true,
			compress: { warnings: false },
			output: { comments: false }
		}),
		new OptimizeCssAssetsPlugin()
	);
}

module.exports = config;