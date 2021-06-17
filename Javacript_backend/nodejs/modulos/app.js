const path = require("path");
const { sobrenome, falaNome, nome, Pessoa } = require("./mod1");
// const { letraA, letraB, letraC, letraD } = require("./mod1");
// console.log(letraA, letraB, letraC, letraD);
// console.log(path);

console.log(falaNome());
console.log(sobrenome);
console.log(nome);
const p1 = new Pessoa("Kamila", "Vieira");
console.log(p1);

console.log(__filename);

console.log(__dirname);
console.log(path.resolve(__dirname, "..", "..", "express"));
