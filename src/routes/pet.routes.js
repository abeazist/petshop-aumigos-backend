import { PetController } from "../modules/controller/pet.controller.js";

export async function petRoutes(app) {
  app.get("/pet", PetController.listar);
  app.get("/pet/:id", PetController.buscarPorId);
  app.post("/pet", PetController.criar);
  app.put("/pet/:id", PetController.atualizar);
  app.delete("/pet/:id", PetController.deletar);
}
