const express = require("express");
const app = express();
const rotasTarefas = require("./tarefas/tarefas.routes");

app.use(express.json());

// Rota base para tarefas
app.use("/tarefas", rotasTarefas);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
