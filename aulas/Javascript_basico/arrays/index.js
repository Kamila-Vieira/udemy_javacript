//               -6       -5        -4       -3      -2       -1
//                0        1         2        3       4        5
const nomes = ["João", "Eduardo", "Julia", "Maria", "Ana", "Kamila"];

// splice => pop

console.log([...nomes].pop());
console.log([...nomes].splice(-1, 1));

// splice => push

//nomes.push("Jonas")
nomes.splice(nomes.length, 0, "Jonas");
console.log(nomes);

// splice => unshift

//nomes.unshift("Edu")
nomes.splice(0, 0, "Edu");
console.log(nomes);

delete nomes[0];
console.log(nomes);

const valorInicialDoAcumulador = 0;

const numeros = [1, 4, 6, 5, 43, 34, 24, 42];

const somaDosValoresPares = numeros.reduce(
  (acumulador, valor, array, indice) => {
    if (valor % 2 === 0) acumulador += valor;
    return acumulador;
  },
  valorInicialDoAcumulador
);
console.log("soma Dos Valores Pares", somaDosValoresPares);

const pessoas = [
  { nome: "Aparecida", idade: 43 },
  { nome: "Maria", idade: 34 },
  { nome: "José", idade: 53 },
  { nome: "Juliana", idade: 24 },
  { nome: "Kamila", idade: 21 },
  { nome: "Eliane", idade: 32 },
];

const somaDeIdadesMaioresQueTrinta = pessoas.reduce((acumulador, valor) => {
  if (valor.idade > 30) acumulador += valor.idade;
  return acumulador;
}, valorInicialDoAcumulador);

console.log("soma De Idades Maiores Que Trinta", somaDeIdadesMaioresQueTrinta);

// reduce ==> filter

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log("pessoa Mais Velha", pessoaMaisVelha);

const pessoaMaisJovem = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade < valor.idade) return acumulador;
  return valor;
});

console.log("pessoa Mais Jovem", pessoaMaisJovem);

// Retorne a soma do dobro de todos os pares
// -> Filtrar números pares
// -> Dobrar valores filtrados
// -> Somar tudo

const numeros2 = [1, 4, 6, 5, 43, 34, 24, 42, 45, 76, 54, 12, 18];

const somaDoDobroDosPares = numeros2
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2)
  .reduce((acumulador, numero) => acumulador + numero);

console.log("soma Do Dobro Dos Pares", somaDoDobroDosPares);
