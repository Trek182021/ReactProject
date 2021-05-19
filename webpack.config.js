

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./",
        assetModuleFilename: "images/[name][ext][query]",
    },

    module: {
        rules: [
            {
                test: /\.js$/, // using regex to tell babel exactly what files to transpile
                exclude: /node_modules/, //files to ignore
                use: {
                    loader: "babel-loader", // specify the loader
                },
            },
            
        ]
    }
}