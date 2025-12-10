import { UsuarioService } from "../service/usuario.service.js";

const service = new UsuarioService();

export const UsuarioController = {

  criar: async (request, reply) => {
    try {
      const usuario = await service.criar(request.body);
      return reply.code(201).send(usuario);
    } catch (err) {
      return reply.code(400).send({ error: err.message });
    }
  },

  login: async (request, reply) => {
  try {
    const { email, senha } = request.body;

    const usuario = await service.login(email, senha);

    const token = await reply.jwtSign({
      idUsuario: usuario.idUsuario,
      email: usuario.email,
    });

    return reply.send({ token, usuario });
  } catch (err) {
    return reply.code(401).send({ error: err.message });
  }
},



  perfilAtual: async (request, reply) => {
  try {
    const usuario = await service.buscarPorId(request.user.idUsuario);
    return reply.send(usuario);
  } catch (err) {
    return reply.code(404).send({ error: err.message });
  }
},

  listar: async (request, reply) => {
    const usuarios = await service.listar();
    return reply.send(usuarios);
  },

  buscarPorId: async (request, reply) => {
    try {
      const usuario = await service.buscarPorId(request.params.id);
      return reply.send(usuario);
    } catch (err) {
      return reply.code(404).send({ error: err.message });
    }
  },

  atualizar: async (request, reply) => {
    const usuario = await service.atualizar(request.params.id, request.body);
    return reply.send(usuario);
  },

  excluir: async (request, reply) => {
    await service.excluir(request.params.id);
    return reply.code(204).send();
  }
};
