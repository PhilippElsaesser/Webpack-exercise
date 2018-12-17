const path = require('path');

module.exports = {  
    entry: {  
        app: './js/index.js'  
    },  

    output: {  
        path: path.resolve(__dirname, 'dist'),  
        filename: 'bundle.js'  
    },
    mode: 'production',
    
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    }
};
