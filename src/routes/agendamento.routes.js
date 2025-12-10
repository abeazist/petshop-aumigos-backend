import { AgendamentoController } from "../modules/controller/agendamento.controller.js";

export async function agendamentoRoutes(app) {
  app.get("/agendamentos", AgendamentoController.listar);
  app.get("/agendamentos/:id", AgendamentoController.buscarPorId);
  app.post("/agendamentos", AgendamentoController.criar);
  app.delete("/agendamentos/:id", AgendamentoController.deletar);
}
