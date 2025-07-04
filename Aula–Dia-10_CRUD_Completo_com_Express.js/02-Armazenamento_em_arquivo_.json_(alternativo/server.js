const fs = require('fs');
const caminho = './tarefas.json';

// Ler tarefas
function lerTarefas() {
  try {
    const dados = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(dados);
  } catch (err) {
    return [];
  }
}

// Salvar tarefas
function salvarTarefas(tarefas) {
  fs.writeFileSync(caminho, JSON.stringify(tarefas, null, 2));
}
