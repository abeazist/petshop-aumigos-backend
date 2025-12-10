import { AgendamentoService } from "../service/agendamento.service.js";

export const AgendamentoController = {
  listar: async (req, reply) => {
    const lista = await AgendamentoService.listar();
    return reply.send(lista);
  },

  buscarPorId: async (req, reply) => {
    const { id } = req.params;
    const item = await AgendamentoService.buscarPorId(id);
    if (!item) return reply.code(404).send({ error: "Agendamento não encontrado" });
    return reply.send(item);
  },

  criar: async (req, reply) => {
    try {
      const novo = await AgendamentoService.criar(req.body);
      return reply.code(201).send(novo);
    } catch (e) {
      return reply.code(400).send({ error: e.message });
    }
  },

  deletar: async (req, reply) => {
    const { id } = req.params;
    await AgendamentoService.deletar(id);
    return reply.send({ message: "Agendamento removido com sucesso" });
  }
};
