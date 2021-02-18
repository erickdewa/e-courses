const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.js('resources/js/bootstrap.js', 'public/js')
	.js([
		'public/assets/js/index.js',
	], 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.webpackConfig({
	    node: {
	    	console: false,
	    	fs: 'empty',
	    	net: 'empty',
	    	tls: 'empty'
	    },
	    module: {
	    	rules: [{
	        	test: /\.s[ac]ss$/,
	        	include: /node_modules/,
	        	loaders: ['style-loader', 'css-loader', 'sass-loader']
	    	}]
	    }
	});