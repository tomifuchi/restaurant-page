const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    }, 
    devtool: "inline-source-map",
    plugins: [
        new htmlWebpackPlugin({
            title: "Restaurant page",
            filename: "index.html",
            template: "src/pug/index.pug",
        }),
   ],
    module: {
        rules: [
            //Images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            //Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
        
            },
            //Pug
            {
                test: /\.pug$/,
                use: {
                    loader: "pug-loader",
                    options: {
                        pretty: true,
                    },
                },
            },
            //Sass
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            //Babel
            {
                test: /\.js$/i,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                }
            },
        ],
    }
}
