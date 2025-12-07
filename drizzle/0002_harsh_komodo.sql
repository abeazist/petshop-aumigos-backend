CREATE TABLE "agendamentos" (
	"id" serial PRIMARY KEY NOT NULL,
	"nomePet" varchar NOT NULL,
	"simpatinhas" varchar,
	"cpfTutor" varchar NOT NULL,
	"telefone" varchar NOT NULL,
	"servico" varchar NOT NULL,
	"dataAgendamento" date NOT NULL
);
