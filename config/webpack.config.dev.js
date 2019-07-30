'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
require('babel-polyfill');
module.exports = {
    entry: [
        'react-hot-loader/patch',
        '@babel/polyfill',
        path.resolve(__dirname, '../src', 'index.js')
    ],
    output: {
        path: path.resolve(__dirname, '../src'),
        publicPath: '/',
        filename: 'script.js'
    },
    resolve: {
        modules: [path.resolve(__dirname, '../node_modules')],
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        historyApiFallback: true,
        inline: true,
        hot: true,
        open: true,
        port: 4000,
        overlay: {
            warning: true,
            errors: true
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/env', '@babel/react',],
                plugins: [
                    [
                        "@babel/plugin-proposal-class-properties"
                    ]
                ]
            }
        },
        {
            test: /\.(css|scss)$/,
            // loader: 'style-loader!css-loader'
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 1,
                    },
                },
                {
                    loader: require.resolve("sass-loader"),
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                flexbox: 'no-2009',
                            }),
                        ],
                    },
                },
            ],
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ]
}