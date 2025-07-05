const gerarId = require("../utils/gerarId");

let tarefas = []; // Simulação em memória

exports.listar = (req, res) => {
  res.json(tarefas);
};

exports.buscarPorId = (req, res) => {
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  res.json(tarefa);
};

exports.criar = (req, res) => {
  const { titulo } = req.body;
  const nova = { id: gerarId(), titulo, concluida: false };
  tarefas.push(nova);
  res.status(201).json(nova);
};

exports.atualizar = (req, res) => {
  const { titulo, concluida } = req.body;
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
};

exports.remover = (req, res) => {
  const index = tarefas.findIndex((t) => t.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  tarefas.splice(index, 1);
  res.status(204).send();
};
