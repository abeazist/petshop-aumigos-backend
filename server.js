import {app} from "./src/app.js";

app.listen({ port: 3000 }, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
