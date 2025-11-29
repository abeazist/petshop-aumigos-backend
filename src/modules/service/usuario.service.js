import { UsuarioRepository } from "../repository/usuario.repository.js";

export class UsuarioService {
  constructor() {
    this.repo = new UsuarioRepository();
  }

  async criar(data) {
    // exemplo: impedir cadastro sem CPF
    if (!data.cpf) throw new Error("CPF obrigatório");

    return await this.repo.criar(data);
  }

  async listar() {
    return await this.repo.listar();
  }

  async buscarPorId(id) {
    const user = await this.repo.buscarPorId(id);
    if (!user) throw new Error("Usuário não encontrado");
    return user;
  }

  async atualizar(id, data) {
    return await this.repo.atualizar(id, data);
  }

  async excluir(id) {
    return await this.repo.excluir(id);
  }
}
