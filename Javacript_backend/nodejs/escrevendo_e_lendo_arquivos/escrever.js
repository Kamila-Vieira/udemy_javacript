const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  // flag: "w" => limpa o arquivo toda vez que executa
  // flag: "a" => adiciona no final do arquivo toda vez que executa
  // encoding: "utf8" => padrão
  fs.writeFile(caminho, dados, { flag: "w" });
};
