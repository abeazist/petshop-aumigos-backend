import { UsuarioController } from "../modules/controller/usuario.controller.js";

export async function usuarioRoutes(app) {
  app.post("/usuario", UsuarioController.criar); // cadastro
  app.post("/login", UsuarioController.login);    // login

  // Somente usuários autenticados
  app.get("/usuario/perfilAtual", { preValidation: [app.authenticate] }, UsuarioController.perfilAtual);

  app.get("/usuario", UsuarioController.listar);
  app.get("/usuario/:id", UsuarioController.buscarPorId);
  app.put("/usuario/:id", UsuarioController.atualizar);
  app.delete("/usuario/:id", UsuarioController.excluir);
}
