import { Router } from "express";
import usuarioRoutes from "./usuario.routes.js";
import agendamentoRoutes from "./agendamento.routes.js";

const router = Router();

router.use("/usuarios", usuarioRoutes);
router.use("/agendamentos", agendamentoRoutes);

export default router;
