import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import "dotenv/config";


import { petRoutes } from "./routes/pet.routes.js";
import { usuarioRoutes } from "./routes/usuario.routes.js";

app.register(usuarioRoutes, { prefix: "/api" });
app.register(petRoutes, { prefix: "/api" });

// rota teste
app.get("/", async () => {
  return { status: "Servidor funcionando" };
});

export const app = Fastify({
  logger: true
});


// CORS – permite seu frontend acessar o backend
app.register(cors, {
  origin: "*",
});


// JWT – autenticação

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET
});

// Middleware para rotas protegidas
app.decorate("authenticate", async function (request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.code(401).send({ error: "Token inválido ou ausente" });
  }
});

