const rand = (min, max) => {
  return String(Math.floor(Math.random() * (max - min) + min));
};

const simbolos = "!'%$)(*_+=-,./;:;<>{}[]@¨^`~ªº°?|§´&#";

const geraLetrasMaiuscula = () => String.fromCharCode(rand(65, 90));
const geraLetrasMinuscula = () => String.fromCharCode(rand(97, 122));
const geraNumero = () => String.fromCharCode(rand(48, 57));
const geraSimbolo = () => simbolos[rand(0, simbolos.length - 1)];

export default function geraSenha(
  quantidade,
  maiusculas,
  minusculas,
  numeros,
  simbolos
) {
  const senhaArray = [];
  quantidade = Number(quantidade);
  for (let i = 0; i < quantidade; i++) {
    maiusculas && senhaArray.push(geraLetrasMaiuscula());
    minusculas && senhaArray.push(geraLetrasMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  return senhaArray.join("").slice(0, quantidade) || "Nada Selecionado!";
}
