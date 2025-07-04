const express = require('express');
const app = express();
const fs = require('fs'); // Módulo para manipulação de arquivos

app.use(express.json()); // Middleware para ler JSON no corpo da requisição

// Rota GET para listar tarefas
app.get('/tarefas', (req, res) => {
    fs.readFile('tarefas.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao ler o arquivo de tarefas.' });
        }
        const tarefas = JSON.parse(data);
        res.json(tarefas);
    });
});

// Rota GET para buscar uma tarefa pelo id
app.get('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile('tarefas.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao ler o arquivo de tarefas.' });
        }
        let tarefas = [];
        try {
            tarefas = JSON.parse(data);
        } catch (e) {
            return res.status(500).json({ erro: 'Erro ao processar o arquivo de tarefas.' });
        }

        const tarefa = tarefas.find(t => t.id === id);
        if (!tarefa) {
            return res.status(404).json({ erro: 'Tarefa não encontrada.' });
        }

        res.json(tarefa);
    });
});

// Rota POST para criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const { titulo, concluida } = req.body;
    // Lê as tarefas existentes
    fs.readFile('tarefas.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao ler o arquivo de tarefas.' });
        }
        let tarefas = [];
        try {
            tarefas = JSON.parse(data);
        } catch (e) {
            tarefas = [];
        }

        // Gera novo id incremental
        const novoId = tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id || 0)) + 1 : 1;

        // Cria a nova tarefa
        const tarefa = {
            id: novoId,
            titulo,
            concluida: concluida === undefined ? false : concluida
        };

        // Adiciona ao array
        tarefas.push(tarefa);

        // Salva no arquivo
        fs.writeFile('tarefas.json', JSON.stringify(tarefas, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ erro: 'Erro ao salvar a tarefa.' });
            }
            res.status(201).json(tarefa);
        });
    });
});

// Rota PUT para atualizar uma tarefa existente
app.put('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, concluida } = req.body;

    fs.readFile('tarefas.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao ler o arquivo de tarefas.' });
        }
        let tarefas = [];
        try {
            tarefas = JSON.parse(data);
        } catch (e) {
            return res.status(500).json({ erro: 'Erro ao processar o arquivo de tarefas.' });
        }

        const index = tarefas.findIndex(t => t.id === id);
        if (index === -1) {
            return res.status(404).json({ erro: 'Tarefa não encontrada.' });
        }

        // Atualiza apenas os campos enviados
        if (titulo !== undefined) tarefas[index].titulo = titulo;
        if (concluida !== undefined) tarefas[index].concluida = concluida;

        fs.writeFile('tarefas.json', JSON.stringify(tarefas, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ erro: 'Erro ao salvar a tarefa.' });
            }
            res.json(tarefas[index]);
        });
    });
});

// Rota DELETE para remover uma tarefa existente
app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile('tarefas.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao ler o arquivo de tarefas.' });
        }
        let tarefas = [];
        try {
            tarefas = JSON.parse(data);
        } catch (e) {
            return res.status(500).json({ erro: 'Erro ao processar o arquivo de tarefas.' });
        }

        const index = tarefas.findIndex(t => t.id === id);
        if (index === -1) {
            return res.status(404).json({ erro: 'Tarefa não encontrada.' });
        }

        // Remove a tarefa do array
        const tarefaRemovida = tarefas.splice(index, 1)[0];

        fs.writeFile('tarefas.json', JSON.stringify(tarefas, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ erro: 'Erro ao salvar o arquivo de tarefas.' });
            }
            res.json({ mensagem: 'Tarefa removida com sucesso.', tarefa: tarefaRemovida });
        });
    });
});

// Servidor escutando na porta 3001
app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});
