import { app } from "./src/app.js";

// async function main() {
//   try {
//     await app.listen({ port: 3000 });
//     console.log("Servidor rodando em http://localhost:3000");
//   } catch (err) {
//     console.error("Erro ao iniciar o servidor:", err);
//     process.exit(1);
//   }
// }
// main();

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await app.listen({ port: PORT, host: "0.0.0.0" });
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (err) {
    console.error("Erro ao iniciar o servidor:", err);
    process.exit(1);
  }
}

main();
