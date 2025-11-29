import { db } from "../../db.js";
import { tipoUsuario } from "../../schema.js";

export class TipoUsuarioRepository {
  async listar() {
    return await db.select().from(tipoUsuario);
  }
}
