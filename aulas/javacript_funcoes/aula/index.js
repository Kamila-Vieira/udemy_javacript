// //closures

// function retornaOutraFunção(nome) {
//   return function () {
//     return nome;
//   };
// }

// const funcaoPrincipal = retornaOutraFunção('kamila');
// const funcaoPrincipal2 = retornaOutraFunção('Vieira');

// console.log(funcaoPrincipal.call());
// console.log(funcaoPrincipal2.call());

// //callbacks

// function rand(min = 1000, max = 3000) {
//   const num = Math.random() * (max - min) + min;
//   return Math.floor(num);
// }

// function f1(callback) {
//   setTimeout(function () {
//     console.log('f1');
//     if (callback) callback();
//   }, rand());
// }

// function f2(callback) {
//   setTimeout(function () {
//     console.log('f2');
//     if (callback) callback();
//   }, rand());
// }

// function f3(callback) {
//   setTimeout(function () {
//     console.log('f3');
//     if (callback) callback();
//   }, rand());
// }

// f1(f1Callback);

// function f1Callback() {
//   f2(f2Callback);
// }

// function f2Callback() {
//   f3(f3Callback);
// }

// function f3Callback() {
//   console.log('Olá mundo!');
// }

// //factory functions

// function criaPessoa(nome, sobrenome, a, p) {
//   return {
//     nome,
//     sobrenome,

//     // Getter
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },

//     // Setter
//     set nomeCompleto(valor) {
//       valor = valor.split(' ');
//       this.nome = valor.shift();
//       this.sobrenome = valor.join(' ');
//     },

//     fala(assunto = 'falando sobre NADA') {
//       return `${this.nome} está ${assunto}.`;
//     },

//     altura: a,
//     peso: p,

//     // Getter
//     get imc() {
//       const indice = this.peso / this.altura ** 2;
//       return indice.toFixed(2);
//     },
//   };
// }

// const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
// const p2 = criaPessoa('João', 'Otávio', 1.9, 57);
// const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

// console.log(p1.imc);
// console.log(p2.imc);
// console.log(p3.imc);

//função recursiva
const limite = 10;

function recursiva(max) {
  console.log('função recursiva', max);
  if (max >= limite) return; //limite
  max++; //acréscrimo
  recursiva(max); //laço
}
recursiva(0); //inicio

for (let max = 0; max <= limite; max++) {
  console.log('laço for', max);
}

//funções geradoras

function* geradora1() {
  // Código
  yield 'Valor 1';
  // Código
  yield 'Valor 2';
  // Código
  yield 'Valor 3';
}

const g1 = geradora1();

function executa(max, fct) {
  if (max >= 4) return;
  max++;
  console.log(fct.next());
  executa(max, fct);
}
//executa(0, g1);

function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

//executa(0, g2);

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

const g3 = geradora3();

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

console.log(g4.next());
console.log(g4.next());
console.log(g4.next());
console.log(g4.next());
console.log(g4.next());
console.log(g4.next());
console.log(g4.next());

function* geradora5() {
  yield function () {
    console.log('Vim do yield 1');
  };

  // ...
  return function () {
    console.log('Vim do return');
  };
  // ...

  yield function () {
    console.log('Vim do yield 2');
  };
}

const g5 = geradora5();

g5.next().value();
g5.next().value();
