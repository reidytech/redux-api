const path = require("path")
const webpack = require("webpack")

module.exports = {
	context: __dirname,
	entry: [
		"./js/index.js"
	],
	devtool: "cheap-eval-source-map",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
		publicPath: "/public/"
	},
	resolve: {
		extensions: [".js", ".json"]
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js?$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader"
			}
		]
	}
}
