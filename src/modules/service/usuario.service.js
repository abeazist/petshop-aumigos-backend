import bcrypt from "bcrypt";
import { UsuarioRepository } from "../repository/usuario.repository.js";

export class UsuarioService {
  constructor() {
    this.repo = new UsuarioRepository();
  }

  async criar(data) {
    const { nome, email, senha, telefone, endereco, cpf } = data;

    if (!nome || !email || !senha) {
      throw new Error("Nome, email e senha são obrigatórios");
    }

    if (!cpf) {
      throw new Error("CPF obrigatório");
    }

    // verifica email duplicado
    const existente = await this.repo.buscarPorEmail(email);
    if (existente) {
      throw new Error("Email já está cadastrado");
    }

    // criptografar a senha
    const hash = await bcrypt.hash(senha, 10);

    const novoUsuario = await this.repo.criar({
      nome,
      cpf,
      telefone,
      endereco,
      email,
      senha: hash,
    });

    delete novoUsuario.senha; // não retornar a senha
    return novoUsuario;
  }

  // LOGIN
  async email(email, senha) {
    if (!email || !senha) {
      throw new Error("Email e senha são obrigatórios");
    }

    const usuario = await this.repo.buscarPorEmail(email);
    if (!usuario) {
      throw new Error("Credenciais inválidas");
    }

    const match = await bcrypt.compare(senha, usuario.senha);
    if (!match) {
      throw new Error("Credenciais inválidas");
    }

    delete usuario.senha;
    return usuario;
  }


  // LISTAR USUÁRIOS
  async listar() {
    return await this.repo.listar();
  }


  // BUSCAR POR ID
  async buscarPorId(id) {
    const user = await this.repo.buscarPorId(id);
    if (!user) throw new Error("Usuário não encontrado");
    delete user.senha;
    return user;
  }


  // ATUALIZAR USUÁRIO
  async atualizar(id, data) {
    // se for atualizar a senha, criptografa de novo
    if (data.senha) {
      data.senha = await bcrypt.hash(data.senha, 10);
    }

    const userAtualizado = await this.repo.atualizar(id, data);
    delete userAtualizado.senha;
    return userAtualizado;
  }

  // EXCLUIR USUÁRIO
  async excluir(id) {
    return await this.repo.excluir(id);
  }
}
