const path = require("path"); // CommonJS

module.exports = {
  mode: "development", // Ambiente de desenvolvimento development/production
  entry: "./src/index.js",
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
    ],
  },
  devtool: "source-map", // Mapei erro no arquivo bundle.js
};
