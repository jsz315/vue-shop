const path = require('path')
const DLLPlugin = require('webpack/lib/DLLPlugin')

const dllPath = 'public/dll'

module.exports = {
    mode: 'production',
    entry: {
        common: ['vue', 'vuex', 'vue-router', 'axios', 'mint-ui']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, dllPath),
        library: '_dll_[name]'
    },
    plugins: [
        new DLLPlugin({
            name: '_dll_[name]',
            path: path.join(__dirname, dllPath, '[name].manifest.json'),
            context: process.cwd()
        })
    ]
}