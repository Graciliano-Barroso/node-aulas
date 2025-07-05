const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "tarefas.json");

function lerTarefas() {
  try {
    const dados = fs.readFileSync(caminho, "utf-8");
    return JSON.parse(dados);
  } catch {
    return [];
  }
}

function salvarTarefas(tarefas) {
  fs.writeFileSync(caminho, JSON.stringify(tarefas, null, 2));
}

module.exports = {
  lerTarefas,
  salvarTarefas,
};
