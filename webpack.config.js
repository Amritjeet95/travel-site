const fs = require('fs');
const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/scripts/App.js',
   
    
    devServer: {
        watchFiles: ['./app/**/*.html'],
        static: {
           directory: path.join(__dirname, 'app'), 
           watch: false,
        },
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },
  
      output: {
        filename: 'bundled.js', 
        path: path.resolve(__dirname, 'app'),
    },
    
    mode: 'development',
    module: {
        rules: [
             {
                test: /\.css$/i,
                use: ["style-loader", "css-loader?url=false", {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}]
             }
        ]
    }
}