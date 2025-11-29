import Fastify from "fastify";
import { petRoutes } from "./routes/pet.routes.js";
import { usuarioRoutes } from "./routes/usuario.routes.js";

const app = Fastify();

app.register(petRoutes, { prefix: "/api" });
app.register(usuarioRoutes, { prefix: "/api" });

app.get("/", async () => {
  return { status: "Servidor funcionando " };
});


export { app };
