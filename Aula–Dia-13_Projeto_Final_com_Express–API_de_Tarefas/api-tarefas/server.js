const express = require("express");
const app = express();
const tarefasRoutes = require("./tarefas/tarefas.routes");

app.use(express.json());
app.use("/tarefas", tarefasRoutes);

app.listen(3000, () => {
  console.log("API de tarefas rodando em http://localhost:3000");
});
