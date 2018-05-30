const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackInlineAssetsPlugin = require('html-webpack-inline-assets-plugin');

 
const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}

module.exports = {
   entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].bundle.js",
        publicPath: ''
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
    	rules: [
    	    {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'happypack/loader?id=js'
			},
			
            {
                test: /\.(jpg|gif|png|svg)$/i,
                exclude: /fonts/,
                use: [
                    //'file-loader?name=[name].[ext]&outputPath=img/&useRelativePath=true',
                    'file-loader?name=[name].[ext]&useRelativePath=true',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                enabled: false,
                                progressive: false,
                                quality: 70
                            }
                        }
                    }
                ]  
            },
            
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/, 
                exclude: /img/,
                use: [
                    {
                        loader: 'url-loader?limit=100000',
                        options: {
        				    name: 'fonts/[name].[ext]'
        				}
                    }
                ]
                
            }
		]
    },
    
    devServer: {
        compress: true,
        hot: true,
        open: true,
        inline: true
    },

    plugins: [
/*
        new HappyPack({
          id: 'scss',
          threads: 4,
          loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        }),
*/

        new HappyPack({
          id: 'js',
          threads: 4,
          loaders: ['babel-loader?presets[]=env']
        }),

		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    cache: false,
    		chunks: ['app'],
            template: './src/index.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'obszary-praktyk.html',
		    cache: false,
    		chunks: ['app'],
            template: './src/obszary-praktyk.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'obszary-praktyk--single.html',
		    cache: false,
    		chunks: ['app'],
            template: './src/obszary-praktyk--single.html',
            minify: false
		}),
		
        new HtmlWebpackPlugin({
		    filename: 'o-kancelarii.html',
		    cache: false,
    		chunks: ['app'],
            template: './src/o-kancelarii.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'blog.html',
		    cache: false,
    		chunks: ['app'],
            template: './src/blog.html',
            minify: false
		}),
		
		new HtmlWebpackPlugin({
		    filename: 'blog--single.html',
		    cache: false,
    		chunks: ['app'],
            template: './src/blog--single.html',
            minify: false
		}),
	]
};
