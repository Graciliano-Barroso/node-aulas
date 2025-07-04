const express = require('express');
const app = express();

app.use(express.json()); // Middleware para ler JSON no corpo da requisição

// Rota GET simples
app.get('/', (req, res) => {
    res.send('Bem-vindo à API com Express!');
});

// Rota POST simples
app.post('/mensagem', (req, res) => {
    const { texto } = req.body;
    res.send(`Mensagem recebida: ${texto}`);
});

// Servidor escutando na porta 3001
app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});
