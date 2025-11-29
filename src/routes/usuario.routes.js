import { UsuarioController } from "../modules/controller/usuario.controller.js";

export async function usuarioRoutes(app) {
  app.get("/usuario", UsuarioController.listar);
  app.get("/usuario/:id", UsuarioController.buscarPorId);
  app.post("/usuario", UsuarioController.criar);
  app.put("/usuario/:id", UsuarioController.atualizar);
  app.delete("/usuario/:id", UsuarioController.excluir);
}
