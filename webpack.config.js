const HtmlWebpackPlugin = require("html-webpack-plugin"),
      MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        js: './src/index.js',
        react: './src/index_react.js',
        ts: './src/index_ts.js'
    },
    output: {
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/i,
                //use: [MiniCssExtractPlugin.loader, "css-loader"],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i, //  la es es opcional jpg|jpeg
                use: ["file-loader?=name=assets/[name].[ext]", 'image-webpack-loader'],
            },
            {
                test: /\.(ttf)$/i, 
                use: ["file-loader?=name=assets/[name].[ext]"],
            },
            
            
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: "./src/index.html",
        //     filename: "./index.html",
        // })
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            chunks: ["js"],
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./react.html",
            chunks: ["react"],
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./ts.html",
            chunks: ["ts"],
            hash: true
        }),
        new MiniCssExtractPlugin(),
    ]
}