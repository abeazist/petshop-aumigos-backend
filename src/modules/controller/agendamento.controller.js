import {
  criarAgendamentoService,
  listarAgendamentosService,
  deletarAgendamentoService,
} from "../service/agendamento.service.js";

export async function criarAgendamentoController(req, res) {
  try {
    const novo = await criarAgendamentoService(req.body);
    return res.status(201).json(novo);
  } catch (err) {
    return res.status(400).json({ erro: err.message });
  }
}

export async function listarAgendamentosController(req, res) {
  const lista = await listarAgendamentosService();
  return res.json(lista);
}

export async function deletarAgendamentoController(req, res) {
  try {
    await deletarAgendamentoService(req.params.id);
    return res.json({ mensagem: "Agendamento deletado" });
  } catch (err) {
    return res.status(400).json({ erro: err.message });
  }
}
