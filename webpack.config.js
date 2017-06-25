module.exports = function() {
    return {
        entry: {
            app: './app.js'
        },
        output: {
            filename:  "./output.js"
        },
        devServer:{
            contentBase: './',
            compress: true,
            port: 8080,
            stats:'errors-only',
            open: true
        },
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: 'html'
                }
            ]
        }
    }
};
