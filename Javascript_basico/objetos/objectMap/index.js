const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

const novasPessoas = {};

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas[id] = { ...pessoa };
}

const novasPessoas2 = new Map();

for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas2.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas2);
console.log(novasPessoas2.get(2));

for (const [identifier, { id, nome }] of novasPessoas2) {
  console.log(identifier, id, nome);
}
for (const chave of novasPessoas2.keys()) {
  console.log(chave);
}

novasPessoas2.delete(2);

for (const valor of novasPessoas2.values()) {
  console.log(valor);
}
