import geraSenha from "./geradores";

const submitForm = document.querySelector(".gerar-senha");
const senhaGerada = document.querySelector(".senha-gerada");

export default () => {
  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const quantidade = +document.getElementById("quantidade").value;
    const maiusculas = document.getElementById("maiusculas").checked;
    const minusculas = document.getElementById("minusculas").checked;
    const numeros = document.getElementById("numeros").checked;
    const simbolos = document.getElementById("simbolos").checked;

    const senha = geraSenha(
      quantidade,
      maiusculas,
      minusculas,
      numeros,
      simbolos
    );

    senhaGerada.innerHTML = senha;
  });
};
