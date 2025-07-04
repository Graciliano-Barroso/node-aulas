const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  const produtoId = reqUrl.searchParams.get('id');

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Você buscou pelo produto de ID: ${produtoId}`);
});

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
