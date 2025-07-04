const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  const pathname = reqUrl.pathname;
  const params = reqUrl.searchParams;

  let resposta = `Caminho: ${pathname}\n`;

  // Itera sobre todos os parâmetros da query
  for (const [chave, valor] of params) {
    resposta += `${chave}: ${valor}\n`;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(resposta);
});

server.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});
