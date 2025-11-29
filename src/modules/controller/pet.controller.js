import { PetService } from "../service/pet.service.js";

export const PetController = {
  async listar(req, reply) {
    const pets = await PetService.listar();
    return reply.send(pets);
  },

  async buscarPorId(req, reply) {
    const { id } = req.params;
    try {
      const pet = await PetService.buscarPorId(id);
      return reply.send(pet);
    } catch (e) {
      return reply.code(404).send({ error: e.message });
    }
  },

  async criar(req, reply) {
    try {
      const novoPet = await PetService.criar(req.body);
      return reply.code(201).send(novoPet);
    } catch (e) {
      return reply.code(400).send({ error: e.message });
    }
  },

  async atualizar(req, reply) {
    const { id } = req.params;
    try {
      const updated = await PetService.atualizar(id, req.body);
      return reply.send(updated);
    } catch (e) {
      return reply.code(400).send({ error: e.message });
    }
  },

  async deletar(req, reply) {
    const { id } = req.params;
    try {
      await PetService.deletar(id);
      return reply.send({ message: "Pet removido com sucesso." });
    } catch (e) {
      return reply.code(404).send({ error: e.message });
    }
  }
};
