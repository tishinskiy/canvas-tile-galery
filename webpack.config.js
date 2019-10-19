const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [
		'./src/js/index.js',
	],
	output: {
		filename: './js/bundle.js'
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		publicPath: '/',
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src/js'),
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						"presets": [
							[
								"@babel/preset-env",
							]
						]
					}
				}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/views/index.html'
		})
	]
};