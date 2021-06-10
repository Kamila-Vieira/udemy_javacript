// fetch("pessoas.json")
//   .then((response) => response.json())
//   .then((response) => carregaElementosNaPagina(response));

axios("pessoas.json").then((response) =>
  carregaElementosNaPagina(response.data)
);

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");
  const resultado = document.querySelector(".resultado");
  for (const pessoa of json) {
    const tr = document.createElement("tr");

    let tdNome = document.createElement("td");
    tdNome.innerHTML = pessoa.nome;
    tr.appendChild(tdNome);

    let tdIdade = document.createElement("td");
    tdIdade.innerHTML = pessoa.idade + " anos";
    tr.appendChild(tdIdade);

    let tdSalario = document.createElement("td");
    tdSalario.innerHTML = "R$ " + pessoa.salario;
    tr.appendChild(tdSalario);

    table.appendChild(tr);
  }
  resultado.appendChild(table);
}
