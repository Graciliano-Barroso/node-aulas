const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

let tarefas = []; // Armazenamento em memória

// [GET] Listar todas as tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// [GET] Buscar tarefa por ID
app.get("/tarefas/:id", (req, res) => {
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  res.json(tarefa);
});

// [POST] Criar nova tarefa
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;
  const novaTarefa = { id: uuidv4(), titulo, concluida: false };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// [PUT] Atualizar uma tarefa
app.put("/tarefas/:id", (req, res) => {
  const { titulo, concluida } = req.body;
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
});

// [DELETE] Remover uma tarefa
app.delete("/tarefas/:id", (req, res) => {
  const index = tarefas.findIndex((t) => t.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  tarefas.splice(index, 1);
  res.status(204).send(); // No Content
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
