const path = require('path');
module.exports = {
	mode:"development",
	devtool:'source-map',
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	entry: './src/TodoListView.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist')
	}
};
