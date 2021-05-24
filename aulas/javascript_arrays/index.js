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
