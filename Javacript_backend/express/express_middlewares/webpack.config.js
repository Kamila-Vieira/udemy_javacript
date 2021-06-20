const path = require("path"); // CommonJS

module.exports = {
  mode: "production", // Ambiente de desenvolvimento development/production
  entry: "./frontend/main.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"), // onde ficará o arquivo transpilado
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/, // pasta que não será transpilada
        test: /\.js$/, // tipos de arquivos que serão analisados e transpilados
        use: {
          // o que o transpilador irá usar
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map", // Mapei erro no arquivo bundle.js
};
