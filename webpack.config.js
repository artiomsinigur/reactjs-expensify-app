// https://webpack.js.org/configuration/mode/
// https://www.valentinog.com/blog/babel/
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Get absolute path console.log(__dirname)
// path.join - concatenate public folder to absolute path

module.exports = (env) => {
    const isProduction = env === 'production'
    return {
        // where webpack should start
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        mode: 'development',
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
        ],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        } 
                    }
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 9000,
            historyApiFallback: true
        }
    }
}