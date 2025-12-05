import { db } from "../../db.js";
import { agendamentos } from "../../schema.js";

export async function criarAgendamentoRepo(dados) {
  const novo = await db.insert(agendamentos).values(dados).returning();
  return novo[0];
}

export async function listarAgendamentosRepo() {
  return await db.select().from(agendamentos);
}

export async function deletarAgendamentoRepo(id) {
  await db.delete(agendamentos).where(agendamentos.id.eq(id));
}
