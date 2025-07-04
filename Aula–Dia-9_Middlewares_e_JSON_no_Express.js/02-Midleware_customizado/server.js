function meuMiddleware(req, res, next) {
  console.log("Middleware executado!");
  next(); // chama o próximo middleware ou rota
}

// aplicar assim:
app.use(meuMiddleware); // aplicado a todas as rotas

// ou diretamente em uma rota específica:
app.get("/rota", meuMiddleware, (req, res) => {
  res.send("Rota com middleware");
});
