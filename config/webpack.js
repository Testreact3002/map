const path = require("path");
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('dotenv').config();
const paths = process.env.NODE_PATH.split(path.delimiter)
module.exports = {
    experiments: {
       outputModule: false
    },
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "index.mjs",
        module: false,
    },
   optimization: {
       minimize: false,
    },
    resolve: {
      modules: [
	    ...paths,
	    "node_modules"
      ],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties' ]
                },
            }
        }, {
            test: /\.css$/,
            use: [
                  { loader: "style-loader" },
                  {
		    loader: "css-loader",
		    options : {
                      modules : false
		    }
		  }
                ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            include: [
              ...paths.map( p =>  new RegExp(path.normalize(p)+"[^/]+/img/")),
              path.resolve("node_modules")
            ],
            use: [
                {
                    loader: 'file-loader',
                    options: {
                      outputPath:"img",
                    }
                }
            ]

        },
        {
            test: /\.(svg)$/,
            include: [
              ...paths.map( p =>  new RegExp(path.normalize(p)+"[^/]+/img/")),
              path.resolve("node_modules")
            ],
            use: [
                {
                    loader: 'file-loader',
                    options: {
                      outputPath:"img",
                    }
                }
            ]

        }
        ]
    },
    plugins: [
	new Dotenv(),
        new  CleanWebpackPlugin(),
    ]
}
