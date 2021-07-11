import Aluno from "../models/Aluno";

class HomeControllwe {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Maria",
      sobrenome: "Souza",
      email: "mariazinha@gmail.com",
      idade: 53,
      peso: 50.0,
      altura: 1.46,
    });
    /* res.status(200).json({
      tudoCerto: true,
    }); */
    res.json(novoAluno);
  }
}

export default new HomeControllwe();
