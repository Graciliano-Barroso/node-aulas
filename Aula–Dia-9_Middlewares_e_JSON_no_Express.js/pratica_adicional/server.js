const express = require("express");
const app = express();

app.use(express.json());

function logHora(req, res, next) {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
}

app.use(logHora); // Middleware global

app.get("/", (req, res) => {
  res.send("Bem-vindo!");
});

app.post("/dados", (req, res) => {
  res.json({ recebido: req.body });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
