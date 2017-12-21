const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const DEV = process.env.NODE_ENV !== 'production';
// console.log('DEV ENV:', DEV);

const devPlugins = DEV ? [

] : [];

module.exports = {
    context: __dirname + "/src",
    entry: {
        javascript: './app.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.min.js',
        // publicPath: '/react-scratch/',
    },
  
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015", "react"],
                    plugins: ["react-html-attrs", "transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            title: 'scratch powered!',
            inject: 'body'
        })
    ].concat(devPlugins),
    
    devtool: DEV && 'source-map',
    devServer: {
        contentBase: __dirname + "/dist",
        // compress: true,
        port: 9000
    }
}