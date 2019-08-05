const HtmlWebpackPlugin = require('html-webpack-plugin')
const DLLReferencePlugin = require('webpack/lib/DllReferencePlugin')
const mock = require('./mock.js')
module.exports = {
    devServer:{
        port: 9000,
        before: function(app, server){
            mock(app);
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem-exclude')({
                        "remUnit": 75,
                        "exclude": /node_modules|mint-ui/i
                    })
                ]
            }
        }
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
                inject: true,
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeAttributeQuotes: true
                }
            }),
            new DLLReferencePlugin({
                context: process.cwd(),
                manifest: require('./public/dll/common.manifest.json')
            })
        ]
    }
}