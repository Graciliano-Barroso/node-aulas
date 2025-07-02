const http = require("http");
const url = require("url");
const { lerTarefas, salvarTarefas } = require("./utils/helpers");

const PORTA = 3001;

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  const id = parseInt(pathname.split("/")[2]);
  let corpo = "";

  req.on("data", (chunk) => (corpo += chunk.toString()));

  req.on("end", () => {
    let tarefas = lerTarefas();

    // GET /tarefas
    if (req.method === "GET" && pathname === "/tarefas") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(tarefas));
    }

    // GET /tarefas/:id
    else if (req.method === "GET" && pathname.startsWith("/tarefas/")) {
      const tarefa = tarefas.find((t) => t.id === id);
      if (tarefa) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(tarefa));
      } else {
        res.writeHead(404);
        res.end("Tarefa não encontrada");
      }
    }

    // POST /tarefas
    else if (req.method === "POST" && pathname === "/tarefas") {
      const novaTarefa = JSON.parse(corpo);
      if (!novaTarefa.titulo) {
        res.writeHead(400);
        return res.end('Campo "titulo" é obrigatório');
      }

      const tarefa = {
        id: Date.now(),
        titulo: novaTarefa.titulo,
        concluida: novaTarefa.concluida === undefined ? false : novaTarefa.concluida,
      };

      tarefas.push(tarefa);
      salvarTarefas(tarefas);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(tarefa));
    }

    // PUT /tarefas/:id
    else if (req.method === "PUT" && pathname.startsWith("/tarefas/")) {
      const dadosAtualizados = JSON.parse(corpo);
      const index = tarefas.findIndex((t) => t.id === id);

      if (index !== -1) {
        tarefas[index] = {
          ...tarefas[index],
          ...dadosAtualizados,
        };
        salvarTarefas(tarefas);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(tarefas[index]));
      } else {
        res.writeHead(404);
        res.end("Tarefa não encontrada");
      }
    }

    // DELETE /tarefas/:id
    else if (req.method === "DELETE" && pathname.startsWith("/tarefas/")) {
      const index = tarefas.findIndex((t) => t.id === id);
      if (index !== -1) {
        const tarefaRemovida = tarefas.splice(index, 1)[0];
        salvarTarefas(tarefas);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(tarefaRemovida));
      } else {
        res.writeHead(404);
        res.end("Tarefa não encontrada");
      }
    }

    // Rota não encontrada
    else {
      res.writeHead(404);
      res.end("Rota não encontrada");
    }
  });
});

server.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORTA}`);
});
