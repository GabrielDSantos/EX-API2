/* eslint-disable class-methods-use-this */
import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Gabriel',
      sobrenome: 'Santos',
      email: 'gabrielsantos022@gmail.com',
      idade: 19,
      peso: 72,
      altura: 1.81,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
