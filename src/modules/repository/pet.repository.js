import { db } from "../../db.js";
import { pet } from "../../schema.js";
import { eq } from "drizzle-orm";

export const PetRepository = {
  
  listar: async () => {
    return await db.select().from(pet);
  },

  buscarPorId: async (id) => {
    const result = await db.select().from(pet).where(eq(pet.idPet, id));
    return result[0];
  },

  criar: async (data) => {
    const result = await db.insert(pet).values(data).returning();
    return result[0];
  },

  atualizar: async (id, data) => {
    const result = await db.update(pet).set(data).where(eq(pet.idPet, id)).returning();
    return result[0];
  },

  deletar: async (id) => {
    await db.delete(pet).where(eq(pet.idPet, id));
  }

};
