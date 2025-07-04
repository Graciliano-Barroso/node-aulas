const http = require("http");

const server = http.createServer((req, res) => {

    const url = new URL("http://localhost:3000/perfil?user=graciliano&id=5")

    console.log(`Caminho: ${url.pathname}`); // /perfil
    console.log(`user: ${url.searchParams.get('user')}`); // graciliano
    console.log(`id: ${url.searchParams.get('id')}`); // 5
})

server.listen(3002, () => console.log('Servidor rodando na porta 3002'));