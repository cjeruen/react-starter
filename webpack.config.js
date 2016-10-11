
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist/js",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel-loader"
        }]
    }
};
