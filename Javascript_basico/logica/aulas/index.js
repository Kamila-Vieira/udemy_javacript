// Curto circuito
/* 
Valores Falsy
false
null / undefined
'' "" ``
NaN
0
*/
const file = require("./file.json");

console.log("Kamila" && "Almeida");
console.log("Kamila" && "");

function falaOi() {
  return "oi";
}
let vaiExecutar = "kaaa";
console.log(vaiExecutar && falaOi());

console.log("" || "segundo" || "terceiro");

console.log(0 || false || null || undefined || "kamila");

const data = new Date(Date.now());

//console.log(data.toString());
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1);
console.log("Ano", data.getFullYear());
console.log("Horas", data.getHours());
console.log("Minutos", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("Dia da Semana", data.getDay());
console.log("Agora", data.toString());

//Desestruturação Array

const array = [1, 2, 3, 4, 5, 6];
const [um, , tres, ...resto] = array;
const [quatro, cinco, seis] = resto;

console.log(um, tres);
console.log(quatro, cinco, seis);

//Tratar e lançar erros

function naoExistoFct(x, y) {
  if (typeof x !== "number") {
    throw new Error("x precisa ser número.");
  }
  if (typeof y !== "number") {
    throw new Error("y precisa ser número.");
  }
  return x + y;
}

try {
  naoExisto();
} catch (error) {
  console.log("a função naoExisto não existe");
} finally {
  console.log(naoExistoFct(1, 2));
}

function jsonParse(json) {
  try {
    console.log(JSON.parse(json));
  } catch (error) {
    if (error instanceof SyntaxError) {
      // console.log('o arquivo file.json possui um erro de sintax');
      // //console.error(error.lineNumber);
      // //console.error(error.columnNumber);
      // //console.error(error.message);
      // //console.error(error.name);
      // //console.error(error.fileName);
      // //console.error(error.stack);
    }
    return;
  } finally {
    console.log("Stringify antes de parse: ", JSON.parse(JSON.stringify(json)));
  }
}

jsonParse(file);

function retornaHora(data) {
  if (data && !(data instanceof Date))
    throw new TypeError("Esperando instancia de Date.");
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
try {
  const horaErrada = retornaHora(11);
} catch (error) {
  console.log("Lançou o erro:", error.message);
} finally {
  const novaData = new Date("01-01-1970 12:58:01");
  const horaCorreta = retornaHora(novaData);
  const horaAgora = retornaHora();
  console.log("hora correta", horaCorreta);
  console.log("hora agora", horaAgora);
}
