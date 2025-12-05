import {
  criarAgendamentoRepo,
  listarAgendamentosRepo,
  deletarAgendamentoRepo,
} from "../repository/agendamento.repository.js";

export async function criarAgendamentoService(dados) {
  if (!dados.nomePet || !dados.cpfTutor || !dados.telefone || !dados.servico || !dados.dataAgendamento) {
    throw new Error("Dados incompletos");
  }

  return await criarAgendamentoRepo(dados);
}

export async function listarAgendamentosService() {
  return await listarAgendamentosRepo();
}

export async function deletarAgendamentoService(id) {
  return await deletarAgendamentoRepo(id);
}
