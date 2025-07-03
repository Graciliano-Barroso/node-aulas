const fs = require("fs");
const path = require("path");

const caminhoArquivo = path.join(__dirname, "..", "tarefas.json");

function lerTarefas() {
  try {
    const dados = fs.readFileSync(caminhoArquivo, "utf8");
    return JSON.parse(dados);
  } catch (erro) {
    return [];
  }
}

function salvarTarefas(tarefas) {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(tarefas, null, 2));
}

module.exports = { lerTarefas, salvarTarefas };
