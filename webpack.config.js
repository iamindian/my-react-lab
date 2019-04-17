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
	entry:{
		react: path.join(__dirname, 'src', 'pure-react.js'),
		redux: path.join(__dirname, 'src', 'react-redux-saga.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};
