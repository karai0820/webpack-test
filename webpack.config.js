const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	mode:'development',
	entry:'./src/js/app.js',
	output:{
		path: '/home/arai/tb_js_course/helloWebpack/dist',
		filename:'[hash].bundle.js',
	},
devServer:{
	contentBase:'./dist'
},
module:{
	rules:[
	{
		test:/\.scss$/,
		use:
		[
		{loader:MiniCssExtractPlugin.loader,
		options:{
			publicPath:'/home/arai/tb_js_course/helloWebpack/dist'
				}
		},
		'css-loader',
		'sass-loader',
		]
	},
		{
			test:/\.(jpg)$/,
			use:['file-loader?name=[name]-[hash].[ext]']
		},
		{
			test:/\.html$/,
			use:['html-loader']

		}
	
		]
},
plugins:[
new MiniCssExtractPlugin({
	filename:"bundled_style.css"
}),
new HtmlWebpackPlugin({
	title:"helloWebpack",
	template:"./src/html/index.html"

}),
new CleanWebpackPlugin()

],
};