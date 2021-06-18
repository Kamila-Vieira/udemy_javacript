const path = require("path");
const escreve = require("./escrever");
const le = require("./ler");

const pessoas = [
  {
    none: "Kamila",
    sobrenome: "Almeida",
  },
  {
    nome: "Luiz",
    sobrenome: "Otavio",
  },
  {
    nome: "Pessoa",
    sobrenome: "De Tal",
  },
];

const caminho = path.resolve(__dirname, "./arquivo_criado", `pessoas.json`);
const json = JSON.stringify(pessoas, "", 2);

escreve(caminho, json);

async function lerArquivo(caminho) {
  const dados = await le(caminho);
  return dados;
}

const dadosArquivo = lerArquivo(caminho);

dadosArquivo
  .then((dados) => {
    const json = JSON.parse(dados);
    console.log(json);
  })
  .catch((e) => {
    console.log(e);
  });
