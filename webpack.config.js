const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = (env) => {
    const mode = env.mode || 'development'
    return{
        entry: './src/index.tsx',
        output: {
            filename: "index.[hash].js",
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        mode,
        devServer: {
            open:true,
            port:3002,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        optimization: {
            usedExports: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/i,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/index.html' }),
            new webpack.ProgressPlugin(),
        ],
    }
}