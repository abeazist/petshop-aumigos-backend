import { AgendamentoRepository } from "../repository/agendamento.repository.js";

class AgendamentoServiceClass {
  
  async listar() {
    return await AgendamentoRepository.listar();
  }

  async buscarPorId(id) {
    const ag = await AgendamentoRepository.buscarPorId(id);
    if (!ag) throw new Error("Agendamento não encontrado");
    return ag;
  }

  async criar(data) {
    return await AgendamentoRepository.criar(data);
  }

  async deletar(id) {
    return await AgendamentoRepository.deletar(id);
  }
}

export const AgendamentoService = new AgendamentoServiceClass();
