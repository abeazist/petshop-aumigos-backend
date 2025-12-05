import { Router } from "express";
import {
  criarAgendamentoController,
  listarAgendamentosController,
  deletarAgendamentoController,
} from "../modules/controller/agendamento.controller.js";

const router = Router();

router.post("/", criarAgendamentoController);
router.get("/", listarAgendamentosController);
router.delete("/:id", deletarAgendamentoController);

export default router;
