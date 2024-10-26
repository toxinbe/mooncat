const path = require("path");

module.exports = {
    mode: "development", // Thêm dòng này để xác định chế độ
    entry: "./resources/js/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/js"),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        historyApiFallback: true, // Thêm dòng này
    },
};
