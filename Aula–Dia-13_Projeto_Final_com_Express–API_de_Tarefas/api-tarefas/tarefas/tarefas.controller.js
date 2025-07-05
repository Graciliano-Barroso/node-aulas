const { lerTarefas, salvarTarefas } = require("./tarefas.service");
const gerarId = require("../utils/gerarId");

exports.listar = (req, res) => {
  const tarefas = lerTarefas();
  res.json(tarefas);
};

exports.buscarPorId = (req, res) => {
  const tarefas = lerTarefas();
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  res.json(tarefa);
};

exports.criar = (req, res) => {
  const { titulo } = req.body;
  const tarefas = lerTarefas();
  const nova = { id: gerarId(), titulo, concluida: false };
  tarefas.push(nova);
  salvarTarefas(tarefas);
  res.status(201).json(nova);
};

exports.atualizar = (req, res) => {
  const { titulo, concluida } = req.body;
  const tarefas = lerTarefas();
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  salvarTarefas(tarefas);
  res.json(tarefa);
};

exports.remover = (req, res) => {
  let tarefas = lerTarefas();
  const existe = tarefas.some((t) => t.id === req.params.id);
  if (!existe)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  tarefas = tarefas.filter((t) => t.id !== req.params.id);
  salvarTarefas(tarefas);
  res.status(204).send();
};
