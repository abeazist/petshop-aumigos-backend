import { pgTable, serial, varchar, integer, numeric, date, primaryKey } from "drizzle-orm/pg-core";

//
// USUÁRIO
//
export const usuario = pgTable("usuario", {
  idUsuario: serial("idUsuario").primaryKey(),
  nome: varchar("nome", { length: 150 }).notNull(),
  cpf: varchar("cpf", { length: 14 }).notNull().unique(),
  telefone: varchar("telefone", { length: 20 }),
  endereco: varchar("endereco", { length: 200 }),
  email: varchar("email", { length: 100 }).notNull(),
  senha: varchar("senha", { length: 100 }).notNull()
});

//
// TIPO USUÁRIO
//
export const tipoUsuario = pgTable("tipoUsuario", {
  idTipoUsuario: serial("idTipoUsuario").primaryKey(),
  idUsuario: integer("idUsuario"),
  tipo: varchar("tipo", { length: 100 }),

}, (table) => ({
  fkUsuario: {
    columns: [table.idUsuario],
    foreignColumns: [usuario.idUsuario],
  }
}));

//
// TIPO SERVIÇO
//
export const tipoServico = pgTable("tipoServico", {
  idTipoServico: serial("idTipoServico").primaryKey(),
  tipoServico: varchar("tipoServico", { length: 150 }),
  preco: numeric("preco", { precision: 10, scale: 2 })
});

//
// TIPO PET
//
export const tipoPet = pgTable("tipoPet", {
  idTipoPet: serial("idTipoPet").primaryKey(),
  tipo: varchar("tipo", { length: 150 }),
  sinpatinhas: varchar("sinpatinhas", { length: 255 }),
  idRacaPet: integer("idRacaPet")
});

//
// PET
//
export const pet = pgTable("pet", {
  idPet: serial("idPet").primaryKey(),
  nome: varchar("nome", { length: 150 }).notNull(),
  dataNascimento: date("dataNascimento"),
  sinpatinhas: varchar("sinpatinhas", { length: 255 }),
  idUsuario: integer("idUsuario").notNull(),

}, (table) => ({
  fkUsuario: {
    columns: [table.idUsuario],
    foreignColumns: [usuario.idUsuario],
  }
}));

//
// RAÇA PET
//
export const racaPet = pgTable("racaPet", {
  idRacaPet: serial("idRacaPet").primaryKey(),
  raca: varchar("raca", { length: 150 }),
  idTipoPet: integer("idTipoPet"),

}, (table) => ({
  fkTipoPet: {
    columns: [table.idTipoPet],
    foreignColumns: [tipoPet.idTipoPet],
  }
}));

//
// RELAÇÃO tipoPet → racaPet 
//
tipoPet.addForeignKey?.({
  columns: [tipoPet.idRacaPet],
  foreignColumns: [racaPet.idRacaPet],
});

//
// SERVIÇO
//
export const servico = pgTable("servico", {
  idServico: serial("idServico").primaryKey(),
  cpf: varchar("cpf", { length: 14 }),
  idPet: integer("idPet"),
  idTipoServico: integer("idTipoServico"),
  status: varchar("status", { length: 50 }),

}, (table) => ({
  fkPet: {
    columns: [table.idPet],
    foreignColumns: [pet.idPet],
  },
  fkTipoServico: {
    columns: [table.idTipoServico],
    foreignColumns: [tipoServico.idTipoServico],
  }
}));

//
// PORTE PET
//
export const portePet = pgTable("portePet", {
  idPortePet: serial("idPortePet").primaryKey(),
  portePet: varchar("portePet", { length: 100 }),
  idRacaPet: integer("idRacaPet"),
  idTipoServico: integer("idTipoServico"),

}, (table) => ({
  fkRacaPet: {
    columns: [table.idRacaPet],
    foreignColumns: [racaPet.idRacaPet],
  },
  fkTipoServico: {
    columns: [table.idTipoServico],
    foreignColumns: [tipoServico.idTipoServico],
  }
}));

//
// ITEM SERVIÇO 
//
export const itemServico = pgTable("itemServico",
  {
    idTipoServico: integer("idTipoServico").notNull(),
    idServico: integer("idServico").notNull(),
    preco: numeric("preco", { precision: 10, scale: 2 }),
    idPet: integer("idPet"),

  },
  (table) => ({
    primaryKey: primaryKey(table.idTipoServico, table.idServico),

    fkTipoServico: {
      columns: [table.idTipoServico],
      foreignColumns: [tipoServico.idTipoServico],
    },

    fkServico: {
      columns: [table.idServico],
      foreignColumns: [servico.idServico],
    },

    fkPet: {
      columns: [table.idPet],
      foreignColumns: [pet.idPet],
    }
  })
);