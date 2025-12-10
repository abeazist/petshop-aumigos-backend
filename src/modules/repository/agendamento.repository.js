import { db } from "../../db.js";
import { agendamento } from "../../schema.js";
import { eq } from "drizzle-orm";

export const AgendamentoRepository = {
  listar: async () => {
    return await db.select().from(agendamento);
  },

  buscarPorId: async (id) => {
    const result = await db.select().from(agendamento).where(eq(agendamento.idAgendamento, id));
    return result[0];
  },

  criar: async (data) => {
    const result = await db.insert(agendamento).values(data).returning();
    return result[0];
  },

  deletar: async (id) => {
    await db.delete(agendamento).where(eq(agendamento.idAgendamento, id));
  }
};
