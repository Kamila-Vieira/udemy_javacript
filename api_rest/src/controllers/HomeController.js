import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Joao",
      sobrenome: "Souza",
      email: "joao@gmail.com",
      idade: 29,
      peso: 90.0,
      altura: 1.87,
    });
    /* res.status(200).json({
      tudoCerto: true,
    }); */
    return res.json(novoAluno);
  }
}

export default new HomeController();
