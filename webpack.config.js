const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + "/src",
    entry: {
        javascript: './app.js',
        // html: './index.html',
    },
  
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

    output: {
        path: __dirname + "/dist",
        filename: "app.min.js",
    },

    devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        port: 9000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            title: 'scratch powered!',
            inject: 'body'
        })
    ]
};