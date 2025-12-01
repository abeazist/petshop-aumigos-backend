import {db} from "../../db.js"
import { usuario } from "../../schema.js";
import { eq } from "drizzle-orm";

export class UsuarioRepository {

  async criar(data) {
    const novo = await db.insert(usuario).values(data).returning();
    return novo[0];
  }

  async listar() {
    return await db.select().from(usuario);
  }

  async buscarPorId(id) {
    const result = await db
      .select()
      .from(usuario)
      .where(eq(usuario.idUsuario, id));
    return result[0];
  }

  async buscarPorEmail(email) {
    const res = await db
      .select()
      .from(usuario)
      .where(eq(usuario.email, email))
      .limit(1);

    return res[0] || null;
  }

  async atualizar(id, data) {
    const result = await db
      .update(usuario)
      .set(data)
      .where(eq(usuario.idUsuario, id))
      .returning();
    return result[0];
  }

  async excluir(id) {
    return await db
      .delete(usuario)
      .where(eq(usuario.idUsuario, id))
      .returning();
  }
}
