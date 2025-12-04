CREATE TABLE "itemServico" (
	"idTipoServico" integer NOT NULL,
	"idServico" integer NOT NULL,
	"preco" numeric(10, 2),
	"idPet" integer,
	CONSTRAINT "itemServico_idTipoServico_idServico_pk" PRIMARY KEY("idTipoServico","idServico")
);
--> statement-breakpoint
CREATE TABLE "pet" (
	"idPet" serial PRIMARY KEY NOT NULL,
	"nome" varchar(150) NOT NULL,
	"dataNascimento" date,
	"sinpatinhas" varchar(255),
	"idUsuario" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "portePet" (
	"idPortePet" serial PRIMARY KEY NOT NULL,
	"portePet" varchar(100),
	"idRacaPet" integer,
	"idTipoServico" integer
);
--> statement-breakpoint
CREATE TABLE "racaPet" (
	"idRacaPet" serial PRIMARY KEY NOT NULL,
	"raca" varchar(150),
	"idTipoPet" integer
);
--> statement-breakpoint
CREATE TABLE "servico" (
	"idServico" serial PRIMARY KEY NOT NULL,
	"cpf" varchar(14),
	"idPet" integer,
	"idTipoServico" integer,
	"status" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "tipoPet" (
	"idTipoPet" serial PRIMARY KEY NOT NULL,
	"tipo" varchar(150),
	"sinpatinhas" varchar(255),
	"idRacaPet" integer
);
--> statement-breakpoint
CREATE TABLE "tipoServico" (
	"idTipoServico" serial PRIMARY KEY NOT NULL,
	"tipoServico" varchar(150),
	"preco" numeric(10, 2)
);
--> statement-breakpoint
CREATE TABLE "tipoUsuario" (
	"idTipoUsuario" serial PRIMARY KEY NOT NULL,
	"idUsuario" integer,
	"tipo" varchar(100)
);
--> statement-breakpoint
CREATE TABLE "usuario" (
	"idUsuario" serial PRIMARY KEY NOT NULL,
	"nome" varchar(150) NOT NULL,
	"cpf" varchar(14) NOT NULL,
	"telefone" varchar(20),
	"endereco" varchar(200),
	"email" varchar(100) NOT NULL,
	"senha" varchar(100) NOT NULL,
	CONSTRAINT "usuario_cpf_unique" UNIQUE("cpf")
);
