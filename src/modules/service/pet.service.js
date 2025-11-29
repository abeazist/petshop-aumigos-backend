import { PetRepository } from "../repository/pet.repository.js";

class PetServiceClass {
  async listar() {
    return await PetRepository.listar();
  }

  async buscarPorId(id) {
    const pet = await PetRepository.buscarPorId(id);
    if (!pet) throw new Error("Pet não encontrado");
    return pet;
  }

  async criar(data) {
    return await PetRepository.criar(data);
  }

  async atualizar(id, data) {
    return await PetRepository.atualizar(id, data);
  }

  async deletar(id) {
    return await PetRepository.deletar(id);
  }
}

export const PetService = new PetServiceClass();
