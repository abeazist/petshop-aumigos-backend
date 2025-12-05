import Fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import "dotenv/config";

import cors from "@fastify/cors";
import { petRoutes } from "./routes/pet.routes.js";
import { usuarioRoutes } from "./routes/usuario.routes.js";

// -----------------------------
// AQUI VOCÊ DECLARA O APP

const app = Fastify({
  logger: true
});


// CORS


await app.register(cors, {
  // origin: "*",
  origin: ["http://localhost:5173", "https://petshop-aumigos-backend.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],

});


// JWT
app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET
});


app.decorate("authenticate", async function (request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.code(401).send({ error: "Token inválido ou ausente" });
  }
});

// ROTAS

app.register(usuarioRoutes, { prefix: "/api" });
app.register(petRoutes, { prefix: "/api" });

// rota teste
app.get("/", async () => {
  return { status: "Servidor funcionando" };
});

export { app };
