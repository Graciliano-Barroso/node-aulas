# 🗂️ **Plano de Estudo (básico) de Node.js** (2 semanas)

![imagem do node js!](/assets/images/Nodejs_logo.png)

# 📄Índice

- [📘 Aula – Dia 1: Introdução ao Node.js e Configuração do Ambiente](#id01)

<br>

> 🎯 Objetivo: Entender como o Node.js funciona, aprender a construir APIs e preparar o terreno para o Nest.js.

---

<a name="id01"></a>

# 📘 Aula – Dia 1: Introdução ao Node.js e Configuração do Ambiente

> 🎯 Objetivo da Aula
>
> Compreender o que é o Node.js, para que ele serve, como instalá-lo e como criar seus primeiros scripts em JavaScript rodando no terminal.

---

## 🧠 1. O que é o Node.js?

Node.js é um ambiente de execução JavaScript do lado do servidor, construído sobre o motor V8 do Google Chrome. Ele permite que você execute código JavaScript fora do navegador, geralmente para construir servidores, APIs, automações e ferramentas de linha de comando.

### 🔧 Características principais:

- Baseado em eventos (event-driven)

- Assíncrono e não bloqueante

- Excelente para I/O intensivo (APIs, leitura de arquivos, redes)

- Usa o npm (Node Package Manager), o maior repositório de pacotes do mundo

---

## 🖥️ 2. Instalando o Node.js

### ✅ Passo a passo para instalar:

1. Acesse: [https://nodejs.org](https://nodejs.org)

2. Baixe a versão LTS (Long Term Support) para maior estabilidade.

3. Siga o instalador padrão para o seu sistema operacional.

---

## 🧪 3. Testando a instalação

Após instalar, abra o terminal (Prompt de Comando no Windows ou Terminal no Mac/Linux) e digite:

```bash
node -v
```

Resultado esperado: a versão instalada do Node, ex: `v18.17.1`

```bash
npm -v
```

Resultado esperado: versão do gerenciador de pacotes npm, ex: `9.8.0`

✅ Se você recebeu os números de versão, está tudo certo!

---

## 📝 4. Criando seu primeiro script

Vamos criar um script simples que imprime uma mensagem no console.

### 📁 Etapas:

1. Crie uma pasta no seu computador:

```makefile
C:\node-aulas\dia1
```

2. Dentro dela, crie um arquivo chamado `hello.js`

3. Escreva o seguinte código no arquivo:

```js
console.log("Olá, Node.js!");
```

4. Salve o arquivo.

5. Agora volte ao terminal, navegue até a pasta onde você salvou o script:

```bash
cd C:\node-aulas\dia1
```

6. Execute o script com o Node:

```bash
node hello.js
```

Resultado esperado:

```css
Olá, Node.js!
```

---

#### 🛠️ Prática adicional

Desafio: Crie um novo script chamado `info.js` que imprima:

- Seu nome
- A data atual
- Um número aleatório entre 1 e 100

---

#### ✅ Conclusão do Dia 1

Hoje você:

- Aprendeu o que é o Node.js

- Instalou e testou o ambiente

- Criou seu primeiro script em Node.js

---

---

# 📘 Aula – Dia 2: Módulos Nativos do Node.js

> 🎯 Objetivo da Aula
>
> Aprender a utilizar os principais módulos nativos do Node.js: `fs`, `path`, `os` e `process`, entendendo suas funções e aplicabilidades em scripts de automação ou backend.

---

## 📦 1. O que são módulos nativos?

Node.js vem com uma série de módulos internos (built-in), prontos para uso, que permitem acessar funcionalidades do sistema operacional, do sistema de arquivos, entre outros, sem precisar instalar pacotes externos.

---

## 📂 2. Módulo `fs` – File System

Permite ler, escrever, alterar e excluir arquivos e pastas.

#### 📄 Exemplo: leitura de arquivo

```js
const fs = require("fs");

const conteudo = fs.readFileSync("arquivo.txt", "utf8");
console.log(conteudo);
```

#### ✍️ Exemplo: escrita em arquivo

```js
fs.writeFileSync("novo.txt", "Conteúdo novo aqui");
```

#### ➕ Exemplo: adicionar conteúdo (append)

```js
fs.appendFileSync("novo.txt", "\nNova linha adicionada!");
```

---

## 🛣️ 3. Módulo `path` – Manipulação de caminhos

Permite criar caminhos de forma segura e compatível com qualquer sistema operacional.

#### 🔍 Exemplo: uso básico

```js
const path = require("path");

const caminho = path.join(__dirname, "pasta", "arquivo.txt");
console.log(caminho);
```

- `__dirname`: retorna o diretório atual

- `path.join`: monta o caminho de forma automática e segura
- ***

## 🧠 4. Módulo `os` – Informações do sistema operacional

Permite obter informações do sistema atual.

#### 🖥️ Exemplo:

```js
const os = require("os");

console.log("Sistema operacional:", os.platform());
console.log("CPU(s):", os.cpus().length);
console.log("Memória livre:", os.freemem());
console.log("Diretório home:", os.homedir());
```

---

## ⚙️ 5. Módulo `process` – Informações sobre o processo atual

Permite acessar dados do processo Node em execução e variáveis de ambiente.

#### 💡 Exemplo:

```js
console.log("PID:", process.pid);
console.log("Diretório de execução:", process.cwd());
console.log("Variáveis de ambiente:", process.env);
```

---

### 🛠️ Prática adicional

Desafio: Criar um script que:

1. Lê um arquivo `.txt`

2. Adiciona uma nova linha com texto de sua escolha

3. Salva o conteúdo novamente no mesmo arquivo

---

### ✅ Conclusão do Dia 2

Hoje você:

- Conheceu os principais módulos nativos do Node.js

- Aprendeu a ler e escrever arquivos com `fs`

- Manipulou caminhos com `path`

- Obteve informações do sistema com `os`

- Interagiu com o processo em execução com `process`

---

---

# 📘 Aula – Dia 3: Módulos e Exportações em Node.js

> 🎯 Objetivo da Aula
>
> Aprender como criar e importar módulos em Node.js utilizando `require` e `module.exports`, entendendo o conceito de escopo e como organizar melhor o código em arquivos separados.

---

## 📦 1. O que é um módulo?

No Node.js, cada arquivo JavaScript é um módulo. Isso significa que você pode dividir seu projeto em vários arquivos reutilizáveis, que expõem (exportam) funções, objetos ou variáveis, e podem ser utilizados (importados) em outros arquivos.

---

## 🧱 2. Criando um módulo

Exemplo básico:

Arquivo: `mensagem.js`

```js
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

module.exports = saudacao;
```

> Aqui estamos exportando a função `saudacao` para que ela possa ser utilizada em outros arquivos.

---

## 📥 3. Importando um módulo com require

Arquivo: `app.js`

```js
const saudacao = require("./mensagem");

console.log(saudacao("Graciliano"));
```

> O `require('./mensagem')` importa o módulo criado anteriormente. Use `./` para indicar que está no mesmo diretório.

---

## 🔄 4. Exportando múltiplas funções/valores

Você pode exportar um objeto com várias propriedades:

Arquivo: `util.js`

```js
function soma(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

module.exports = {
  soma,
  multiplicar,
};
```

Arquivo: `main.js`

```js
const util = require("./util");

console.log(util.soma(3, 5));
console.log(util.multiplicar(4, 6));
```

---

## 🧠 5. Noções de escopo

⚠️ Tudo dentro de um módulo (arquivo) tem escopo local.

Ou seja, variáveis declaradas em um módulo não vazam para fora dele, a menos que sejam exportadas com `module.exports`.

```js
// em exemplo.js
const segredo = "isso é privado";

module.exports = {
  mensagem: "isso é público",
};
```

A variável `segredo` não está disponível fora de `exemplo.js`, mas `mensagem` está.

---

## 📂 6. Organização de código com módulos

Separar funcionalidades em módulos ajuda:

- Na manutenção e leitura do código

- No reaproveitamento de código em outros projetos

- Em testes mais fáceis

- Na colaboração entre equipes

> 🔧 Exemplo de estrutura de projeto:

```pqsql
meu-projeto/
│
├── calculadora.js
├── index.js
```

---

### 🛠️ Prática adicional

Desafio: Criar um módulo chamado `calculadora.js` com quatro funções:

- soma

- subtração

- multiplicação

- divisão

E importá-lo em um arquivo principal para utilizar essas funções.

---

### ✅ Conclusão do Dia 3

Hoje você:

- Aprendeu a criar e importar módulos

- Usou `module.exports` e `require`

- Entendeu o escopo de módulos

- Conheceu boas práticas de organização de código

---

---

# 📘 Aula – Dia 4: Event Loop e Eventos em Node.js

> 🎯 Objetivo da Aula
>
> Entender o funcionamento do Event Loop, o modelo assíncrono do Node.js, o uso de `setTimeout`, `setInterval`, `Promise`, `async/await` e a criação de eventos com o módulo nativo `events`.

---

## 🌀 1. O que é o Event Loop?

O Event Loop é o mecanismo que permite ao Node.js executar código não bloqueante, mesmo sendo single-threaded (uma única thread de execução).

Como funciona?

- O código é executado de forma síncrona até encontrar uma operação assíncrona (como um `setTimeout` ou uma requisição).

- Essas operações são delegadas e, quando finalizadas, são colocadas de volta na fila para serem processadas.

> 📌 É assim que o Node lida com múltiplas tarefas ao mesmo tempo sem travar.

---

## 🔁 2. Operações assíncronas em Node.js

> ⏱️ `setTimeout`

Executa uma função uma vez após um tempo (em milissegundos):

```js
setTimeout(() => {
  console.log("Executou após 2 segundos");
}, 2000);
```

> 🔁 `setInterval`

Executa uma função repetidamente a cada intervalo de tempo:

```js
setInterval(() => {
  console.log("Executa a cada 1 segundo");
}, 1000);
```

Use `clearInterval()` para parar.

## ⛓️ 3. Callbacks

Uma callback é uma função passada como argumento para ser executada depois que algo terminar.

```js
function saudacao(nome, callback) {
  console.log(`Olá, ${nome}`);
  callback();
}

saudacao("Graciliano", () => {
  console.log("Seja bem-vindo!");
});
```

##🔒 4. Promises

Permitem lidar com operações assíncronas de forma mais clara.

```js
const promessa = new Promise((resolve, reject) => {
  const sucesso = true;
  if (sucesso) {
    resolve("Deu certo!");
  } else {
    reject("Deu errado!");
  }
});

promessa.then((msg) => console.log(msg)).catch((err) => console.error(err));
```

---

## 🔁 5. Async/Await

Sintaxe moderna que facilita o uso de Promises.

```js
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executar() {
  console.log("Esperando...");
  await esperar(2000);
  console.log("Fim da espera!");
}

executar();
```

---

## 📣 6. Módulo `events` – Sistema de Eventos

Permite criar e escutar eventos personalizados.

Exemplo básico:

```js
const EventEmitter = require("events");
const meuEmissor = new EventEmitter();

meuEmissor.on("disparar", () => {
  console.log('O evento "disparar" foi ativado!');
});

meuEmissor.emit("disparar");
```

- `on(evento, callback)`: escuta um evento

- `emit(evento)`: dispara um evento

---

### 🛠️ Prática adicional

Desafio: Criar um sistema de alarme que dispara eventos com atraso usando `setTimeout` e o módulo `events`.

---

### ✅ Conclusão do Dia 4

Hoje você:

- Entendeu o Event Loop

- Aprendeu sobre callbacks, Promises e async/await

- Usou `setTimeout` e `setInterval`

- Criou eventos personalizados com o módulo `events`

---

---

# 📘 Aula – Dia 5: Criando um Servidor HTTP com Node.js

> 🎯 Objetivo da Aula
>
> Aprender a criar um servidor básico com o módulo `http` do Node.js, entender o fluxo de requisição/resposta (Request/Response) e implementar rotas simples como `/`, `/about` e `/contact`.

---

## 🌐 1. Introdução ao módulo `http`

O Node.js possui um módulo nativo chamado `http` que permite criar servidores web sem precisar de frameworks externos, como Express.

```js
const http = require("http");
```

---

## 🧭 2. Conceito de Requisição e Resposta

Quando um cliente (como um navegador) acessa um site, ele faz uma requisição HTTP (request). O servidor processa e envia de volta uma resposta HTTP (response).

Estrutura:

- Request: contém informações como a URL, método (`GET`, `POST` etc.), cabeçalhos, dados.

- Response: o que o servidor envia de volta: cabeçalhos + conteúdo (HTML, JSON, etc.)

---

## 🛠️ 3. Criando um servidor básico

Exemplo inicial:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Olá, mundo!");
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

> A função `createServer` recebe uma função de callback com os parâmetros `req` (requisição) e `res` (resposta).

---

## 🧭 4. Criando rotas básicas

Podemos usar o caminho da URL para definir diferentes respostas para diferentes páginas.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Página Inicial");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Sobre Nós");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contato");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Página não encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

---

## ℹ️ 5. Detalhes úteis

- `req.url`: retorna o caminho da URL acessada

- `res.writeHead(statusCode, headers)`: define o status da resposta e os cabeçalhos

- `res.end(conteúdo)`: finaliza e envia a resposta para o cliente

#### 🛠️ Prática adicional

Desafio: Criar um servidor Node.js com 3 rotas:

- `/` → Retorna uma mensagem de boas-vindas

` /about` → Retorna uma descrição do site

` /contact` → Retorna um contato ou e-mail fictício

#### ✅ Conclusão do Dia 5

Hoje você:

- Aprendeu a usar o módulo `http`

- Criou um servidor simples em Node.js

- Entendeu como funcionam as requisições e respostas

- Implementou rotas básicas com `if/else`

---

---

## 📘 Aula – Dias 6 e 7: Projeto – API de Tarefas sem Express

> 🎯 Objetivo da Aula
>
> Desenvolver uma API REST básica de tarefas usando apenas os módulos nativos do Node.js (http, fs, path), com suporte completo a operações CRUD (Create, Read, Update, Delete) e armazenamento das tarefas em um arquivo .json.

---

## 🔧 1. Tecnologias utilizadas

- `http`: para criar o servidor e tratar as rotas

- `fs`: para ler e escrever no arquivo .json

- `url`: para parsear parâmetros da requisição

- `path`: para garantir caminhos seguros de arquivos

---

## 📁 2. Estrutura do projeto

```kotlin
projeto-tarefas/
│
├── tarefas.json
├── server.js
└── utils/
    └── helpers.js (opcional para funções auxiliares)
```

---

## 🧩 3. Formato do arquivo tarefas.json

Esse arquivo armazenará as tarefas em formato de array de objetos:

```json
[
  {
    "id": 1,
    "titulo": "Estudar Node.js",
    "concluida": false
  },
  {
    "id": 2,
    "titulo": "Criar API",
    "concluida": true
  }
]
```

---

## 🧭 4. Rotas esperadas da API

| Método HTTP | Rota         | Descrição                     |
| ----------- | ------------ | ----------------------------- |
| GET         | /tarefas     | Lista todas as tarefas        |
| GET         | /tarefas/:id | Busca uma tarefa específica   |
| POST        | /tarefas     | Cria uma nova tarefa          |
| PUT         | /tarefas/:id | Atualiza uma tarefa existente |
| DELETE      | /tarefas/:id | Remove uma tarefa             |

---

## 🧠 5. Lógica principal do servidor

1. Criar o servidor com `http.createServer`

2. Verificar `req.method` e `req.url`

3. Usar `fs.readFileSync` ou `fs.promises` para carregar os dados

4. Usar `fs.writeFileSync` ou `fs.promises` para salvar alterações

5. Responder com `res.writeHead()` e `res.end()`

---

## 📝 6. Observações importantes

🔐 Requisições com corpo (POST e PUT)

Para capturar os dados enviados no corpo da requisição (geralmente JSON), você precisa escutar o evento `data` e `end`:

```js
let body = "";

req.on("data", (chunk) => {
  body += chunk.toString();
});

req.on("end", () => {
  const data = JSON.parse(body);
  // Process the data
});
```

---

## 🧠 7. Boas práticas e dicas

- Sempre valide os dados antes de salvar no arquivo `.json`.

- Utilize `path.join(__dirname, 'tarefas.json')` para evitar problemas com caminhos.

- Use funções auxiliares para ler e escrever no arquivo (ex: `lerTarefas()`, `salvarTarefas()`).

- Para gerar IDs únicos, use `Date.now()` ou um contador simples (caso não use banco de dados).

- Ao retornar JSON, defina corretamente o cabeçalho:

```js
res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify(dados));
```

---

## ✅ Conclusão dos Dias 6 e 7

Hoje você:

- Aprendeu a construir uma API REST sem frameworks

- Utilizou os módulos `http`, `fs`, `url` e `path`

- Entendeu como tratar rotas e métodos HTTP manualmente

- Persistiu dados em um arquivo `.json`

---

---

# 📘 Aula – Dia 8: Introdução ao Express.js

> 🎯 Objetivo da Aula
>
> Compreender o que é o Express.js, instalar e configurar um projeto básico, e criar rotas GET e POST para uma API simples, preparando o terreno para refatorar a API de tarefas.

---

## 🚀 1. O que é o Express.js?

Express.js é um framework minimalista e flexível para Node.js, que facilita a criação de aplicações web e APIs. Ele abstrai várias complexidades do módulo nativo `http`, permitindo:

- Criação fácil de rotas

- Gerenciamento de middlewares

- Manipulação simplificada de requisições e respostas

- Melhor organização de projetos

---

## 🧰 2. Iniciando um projeto com Express

### 📦 Etapas:

1. Criar a pasta do projeto:

```bash
mkdir projeto-express
cd projeto-express
```

2. Inicializar um novo projeto Node.js:

```bash
npm init -y
```

3. Instalar o Express:

```bash
npm install express
```

---

## 🗂️ 3. Estrutura básica do projeto

```pgsql
api-express/
│
├── node_modules/
├── package.json
└── index.js
```

---

## 🧪 4. Criando uma API simples com Express

### 📄 Arquivo `index.js

```js
const express = require("express");
const app = express();

app.use(express.json()); // Middleware para ler JSON no corpo da requisição

// Rota GET simples
app.get("/", (req, res) => {
  res.send("Bem-vindo à API com Express!");
});

// Rota POST simples
app.post("/mensagem", (req, res) => {
  const { texto } = req.body;
  res.send(`Mensagem recebida: ${texto}`);
});

// Servidor escutando na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

## 🔁 5. Testando com ferramentas

Você pode testar as rotas da API com ferramentas como:

- Postman

- Insomnia

- Ou com o terminal, usando `curl`:

```bash
curl -X GET http://localhost:3000/
```

```bash
curl -X POST http://localhost:3000/mensagem -H "Content-Type: application/json" -d '{"texto": "Olá, Express!"}'
```

---

## 🔎 6. Comparando Express com Node puro

| Recurso             | Node puro                | Express.js                        |
| ------------------- | ------------------------ | --------------------------------- |
| Criar servidor      | `http.createServer(...)` | `express()`                       |
| Rotas               | `if/else em req.url`     | `app.get()`, `app.post()`         |
| Corpo da requisição | Manual com eventos       | `express.json()` middleware       |
| Organização         | Precisa estruturar tudo  | Já tem padrões e recursos prontos |

---

## 🛠️ Prática adicional (descrita, não resolvida)

Desafio: Recriar a API de tarefas usando Express.js:

- Rotas `GET`, `POST`, `PUT`, `DELETE`

- Usar arquivo `.json` para armazenar tarefas (como feito na versão com Node puro)

---

## ✅ Conclusão do Dia 8

Hoje você:

- Conheceu o Express.js e sua proposta

- Instalou e configurou um projeto com Express

- Criou rotas básicas `GET` e `POST`

- Preparou o terreno para refatorar a API de tarefas

---

---

# 📘 Aula – Dia 9: Middlewares e JSON no Express.js

> 🎯 Objetivo da Aula
>
> Compreender como o Express processa requisições por meio de middlewares, entender o uso de `app.use()` e `app.json()`, e criar um middleware customizado para registrar informações da requisição.

---

## 🔄 1. O que são Middlewares?

Middlewares são funções intermediárias que recebem os objetos `req`, `res` e `next`, e têm acesso ao fluxo de execução da requisição.

### 📌 Eles servem para:

- Modificar a requisição (`req`) ou resposta (`res`)

- Interromper ou permitir a continuação da execução com `next()`

- Registrar logs, autenticar usuários, validar dados, etc.

---

## 🔗 2. Como o Express processa uma requisição

Quando uma requisição chega no Express:

1. Ela passa pelos middlewares na ordem em que foram definidos com `app.use()` ou diretamente nas rotas.

2. Se um middleware não chamar `next()`, a requisição para ali.

3. Caso contrário, ela segue para o próximo middleware ou rota.

---

## 🧰 3. `express.json()` – Middleware nativo

Esse middleware transforma o corpo da requisição (req.body) em um objeto JavaScript automaticamente (para requisições com Content-Type: application/json).

Exemplo de uso:

```js
const express = require("express");
const app = express();

app.use(express.json()); // necessário para usar req.body
```

Sem isso, o `req.body` será `undefined` ao tentar acessar dados de um `POST` ou `PUT`.

---

## 🧪 4. Criando um middleware customizado

Você pode criar middlewares personalizados com a seguinte estrutura:

```js
function meuMiddleware(req, res, next) {
  console.log("Middleware executado!");
  next(); // chama o próximo middleware ou rota
}
```

E aplicar assim:

```js
app.use(meuMiddleware); // aplicado a todas as rotas
```

Ou diretamente em uma rota:

```js
app.get("/rota", meuMiddleware, (req, res) => {
  res.send("Rota com middleware!");
});
```

---

## ⏰ 5. Middleware que registra hora da requisição (conceito)

Objetivo:

Criar um middleware que exiba no terminal a data/hora da requisição recebida.

Lógica:

```js
function logHora(req, res, next) {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
}
```

---

📄 Exemplo completo com middleware

```js
const express = require("express");
const app = express();

app.use(express.json()); // Middleware para ler JSON no corpo da requisição

// Middleware customizado para registrar hora da requisição
function logHora(req, res, next) {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next(); // Chama o próximo middleware ou rota
}

app.use(logHora); // Middleware para registrar hora da requisição

// Rota GET simples
app.get("/", (req, res) => {
  res.send("Bem-vindo à API com Express!");
});

// Rota POST simples
app.post("/dados", (req, res) => {
  res.json({ recebido: req.body });
});

// Servidor escutando na porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

---

## 🛠️ Prática adicional

Desafio: Criar um middleware que:

- Seja aplicado globalmente com app.use()

- Registre a hora exata da requisição

- Mostre também o método HTTP e a rota

---

## ✅ Conclusão do Dia 9

Hoje você:

- Aprendeu o conceito de middlewares no Express

- Utilizou `express.json()` para processar `req.body`

- Criou e aplicou middlewares customizados com `app.use()`

---

---

# 📘 Aula – Dia 10: CRUD Completo com Express.js

> 🎯 Objetivo da Aula
>
> Implementar uma API REST completa com as operações CRUD utilizando Express.js. Você aprenderá a criar rotas `GET`, `POST`, `PUT` e `DELETE`, lidar com identificadores únicos (UUID) e armazenar dados em um array em memória ou arquivo `.json`.

---

## 🗂️ 1. Conceito de CRUD

CRUD representa as quatro operações básicas de um sistema de dados:

| Operação | Verbo HTTP | Ação                  |
| -------- | ---------- | --------------------- |
| Create   | POST       | Criar uma nova tarefa |
| Read     | GET        | Ler/listar tarefas    |
| Update   | PUT        | Atualizar uma tarefa  |
| Delete   | DELETE     | Remover uma tarefa    |

---

## 🔧 2. Dependência opcional: `uuid`

O módulo `uuid` permite gerar identificadores únicos (ID) para cada tarefa.

Instalação:

```bash
npm install uuid
```

Importação:

```js
const { v4: uuidv4 } = require("uuid");
```

---

## 📁 3. Estrutura de uma tarefa

Uma tarefa pode seguir a seguinte estrutura:

```js
{
  id: 'c4d1b47c-5b84-4b2e-84f5-5f21faba2db3',
  titulo: 'Estudar Express',
  concluida: false
}
```

---

## 🧪 4. Criando o CRUD com armazenamento em array

```js
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

let tarefas = []; // Armazenamento em memória

// [GET] Listar todas as tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// [GET] Buscar tarefa por ID
app.get("/tarefas/:id", (req, res) => {
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  res.json(tarefa);
});

// [POST] Criar nova tarefa
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;
  const novaTarefa = { id: uuidv4(), titulo, concluida: false };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// [PUT] Atualizar uma tarefa
app.put("/tarefas/:id", (req, res) => {
  const { titulo, concluida } = req.body;
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
});

// [DELETE] Remover uma tarefa
app.delete("/tarefas/:id", (req, res) => {
  const index = tarefas.findIndex((t) => t.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  tarefas.splice(index, 1);
  res.status(204).send(); // No Content
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

---

## 📦 5. Armazenamento em arquivo .json (alternativo)

Para persistir dados entre reinicializações, use o módulo `fs` para ler/gravar tarefas em um arquivo `.json`.

Exemplo:

```js
const fs = require("fs");
const caminho = "./tarefas.json";

// Ler tarefas
function lerTarefas() {
  try {
    const dados = fs.readFileSync(caminho, "utf-8");
    return JSON.parse(dados);
  } catch (err) {
    return [];
  }
}

// Salvar tarefas
function salvarTarefas(tarefas) {
  fs.writeFileSync(caminho, JSON.stringify(tarefas, null, 2));
}
```

## 📦 6. Armazenamento em arquivo .json (alternativo)(codigo completo)

```js
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const caminho = "./tarefas.json";

const app = express();
app.use(express.json());

// Ler tarefas
function lerTarefas() {
  try {
    const dados = fs.readFileSync(caminho, "utf-8");
    return JSON.parse(dados);
  } catch (err) {
    return [];
  }
}

// Salvar tarefas
function salvarTarefas(tarefas) {
  fs.writeFileSync(caminho, JSON.stringify(tarefas, null, 2));
}

// [GET] Listar todas as tarefas
app.get("/tarefas", (req, res) => {
  const tarefas = lerTarefas();
  res.json(tarefas);
});

// [GET] Buscar tarefa por ID
app.get("/tarefas/:id", (req, res) => {
  const tarefas = lerTarefas();
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  res.json(tarefa);
});

// [POST] Criar nova tarefa
app.post("/tarefas", (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ mensagem: "Título é obrigatório" });
  }
  const tarefas = lerTarefas();
  const novaTarefa = { id: uuidv4(), titulo, concluida: false };
  tarefas.push(novaTarefa);
  salvarTarefas(tarefas);
  res.status(201).json(novaTarefa);
});

// [PUT] Atualizar uma tarefa
app.put("/tarefas/:id", (req, res) => {
  const { titulo, concluida } = req.body;
  const tarefas = lerTarefas();
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  salvarTarefas(tarefas);
  res.json(tarefa);
});

// [DELETE] Remover uma tarefa
app.delete("/tarefas/:id", (req, res) => {
  const tarefas = lerTarefas();
  const index = tarefas.findIndex((t) => t.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  tarefas.splice(index, 1);
  salvarTarefas(tarefas);
  res.status(204).send(); // No Content
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

---

## 📊 7. Testando com Postman, Insomnia ou curl

Listar tarefas:

```bash
GET http://localhost:3000/tarefas
```

Criar tarefa:

```bash
POST /tarefas
{
  "titulo": "Fazer exercícios"
}
```

Atualizar tarefa:

```bash
PUT /tarefas/:id
{
  "titulo": "Fazer exercícios",
  "concluida": true
}
```

Excluir tarefa:

```bash
DELETE /tarefas/:id
```

---

## 🛠️ Prática adicional (descrita, não resolvida)

Desafio: Finalizar o CRUD com as rotas `PUT` e `DELETE`, utilizando armazenamento em array ou arquivo `.json`.

---

## ✅ Conclusão do Dia 10

Hoje você:

- Aprendeu a criar rotas completas com métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`)

- Gerenciou tarefas com IDs únicos usando `uuid`

- Armazenou dados temporariamente em array e conheceu a alternativa com `.json`

- Criou uma API REST funcional com Express

---

---

## 📘 Aula – Dia 11: Trabalhando com Postman

> 🎯 Objetivo da Aula
>
> Aprender a utilizar o Postman para testar suas APIs Express, enviando requisições `GET`, `POST`, `PUT`, `DELETE` com corpo JSON e analisando as respostas.

---

## 🧪 1. O que é o Postman?

Postman é uma ferramenta gráfica (GUI) que permite:

- Enviar requisições HTTP para qualquer API

- Ver respostas de forma organizada

- Automatizar testes

- Simular clientes de uma API (navegador, app, frontend etc.)

> 💡 É essencial para qualquer desenvolvedor backend testar endpoints sem precisar construir interfaces visuais.

---

## 🖥️ 2. Instalação do Postman

✅ Opções:

- Site oficial: [https://www.postman.com/downloads](https://www.postman.com/downloads)

- Também disponível como extensão para navegador ou app desktop.

---

## 🔌 3. Testando a API de tarefas

Supondo que sua API Express esteja rodando em:

```bash
http://localhost:3000
```

Você pode testar as rotas da seguinte forma:

---

## 📥 4. Enviando uma requisição `GET`

### ✔️ Passos:

1. Abrir Postman

2. Criar nova aba

3. Método: `GET`

4. URL: `http://localhost:3000/tarefas`

5. Clicar em Send

🟢 A resposta deve ser um array de tarefas, caso existam.

---

## 📝 5. Enviando uma requisição `POST` com JSON

### ✔️ Passos:

1. Método: `POST`

2. URL: `http://localhost:3000/tarefas`

3. Vá na aba Body

4. Selecione a opção raw

5. Escolha JSON no menu suspenso

6. Insira o corpo da requisição, por exemplo:

```json
{
  "titulo": "Estudar Node.js"
}
```

7. Clique em Send

> 🟢 A resposta deve ser o objeto da tarefa recém-criada.

---

## ✏️ 6. Enviando uma requisição `PUT` (edição)

1. Método: `PUT`

2. URL: `http://localhost:3000/tarefas/<id-da-tarefa>`

3. Vá na aba Body → raw → JSON

Corpo de exemplo:

```json
{
  "titulo": "Estudar Express.js",
  "concluida": true
}
```

> 🟡 Substitua `<id-da-tarefa>` pelo ID real de uma tarefa existente.

## 🗑️ 7. Enviando uma requisição `DELETE`

1. Método: `DELETE`

2. URL: `http://localhost:3000/tarefas/<id-da-tarefa>`

3. Clique em Send

> 🔴 Isso removerá a tarefa especificada.

---

## 📊 8. Visualizando respostas

Na parte inferior da tela do Postman, você verá:

- ✅ Status HTTP (200, 201, 204, 404, etc.)

- ⏱️ Tempo de resposta

- 📦 Corpo da resposta (em JSON, texto ou HTML)

- 🧾 Cabeçalhos da resposta

---

## 🧠 9. Dicas extras

- Salve suas requisições como coleções para reutilizá-las depois.

- Use variáveis para configurar ambientes (por exemplo: `{{url_base}}`).

- Você pode exportar e compartilhar seus testes com colegas.

---

## ✅ Conclusão do Dia 11

Hoje você:

- Instalou e conheceu a ferramenta Postman

- Enviou requisições `GET`, `POST`, `PUT`, `DELETE`

- Enviou corpo de requisição JSON

- Visualizou e entendeu as respostas da API

---

---

# 📘 Aula – Dia 12: Trabalhando com Dados Simulados e Modularização no Express.js

> 🎯 Objetivo da Aula
>
> Aprender a organizar o projeto separando rotas e lógica em arquivos distintos, trabalhar com dados simulados em memória, e utilizar a biblioteca `uuid` para gerar IDs únicos para cada recurso (ex: tarefa).

---

## 🧰 1. O que você vai usar hoje

- `express`: framework web

- `uuid`: biblioteca para gerar IDs únicos

- `require()` e `module.exports`: para modularizar

- Organização de código por responsabilidades (rotas, lógica)

---

## 🗂️ 2. Estrutura sugerida do projeto

```plaintext
api-tarefas/
│
├── node_modules/
├── package.json
├── server.js              → Ponto de entrada
├── tarefas/
│   ├── tarefas.json       → (opcional) dados persistidos
│   ├── tarefas.routes.js  → rotas da API
│   └── tarefas.controller.js → lógica de negócio
└── utils/
    └── gerarId.js         → função auxiliar (com uuid)
```

---

## 📦 3. Instalando o uuid

No terminal, execute:

```bash
npm install uuid
```

---

## 🔌 4. Criando um gerador de ID

Arquivo: `utils/gerarId.js`

```javascript
const { v4: uuidv4 } = require("uuid");

function gerarId() {
  return uuidv4();
}

module.exports = gerarId;
```

---

## 🔧 5. Criando as rotas

Arquivo: `tarefas/tarefas.routes.js`

```javascript
const express = require("express");
const router = express.Router();
const controller = require("./tarefas.controller");

// Rotas CRUD
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.remover);

module.exports = router;
```

---

## 🧠 6. Criando o controller

Arquivo: `tarefas/tarefas.controller.js`

```javascript
const gerarId = require("../utils/gerarId");

let tarefas = []; // Simulação em memória

exports.listar = (req, res) => {
  res.json(tarefas);
};

exports.buscarPorId = (req, res) => {
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  res.json(tarefa);
};

exports.criar = (req, res) => {
  const { titulo } = req.body;
  const nova = { id: gerarId(), titulo, concluida: false };
  tarefas.push(nova);
  res.status(201).json(nova);
};

exports.atualizar = (req, res) => {
  const { titulo, concluida } = req.body;
  const tarefa = tarefas.find((t) => t.id === req.params.id);
  if (!tarefa)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
};

exports.remover = (req, res) => {
  const index = tarefas.findIndex((t) => t.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });

  tarefas.splice(index, 1);
  res.status(204).send();
};
```

---

## 🚀 7. Ponto de entrada

Arquivo: `server.js`

```javascript
const express = require("express");
const app = express();
const rotasTarefas = require("./tarefas/tarefas.routes");

app.use(express.json());

// Rota base para tarefas
app.use("/tarefas", rotasTarefas);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

---

## 📊 8. Testando com dados simulados

Como o array `tarefas` está em memória, os dados são reiniciados a cada vez que o servidor é reiniciado.

> 🔁 Ideal para testes iniciais e aprendizado.
> 💾 Para persistência, substitua o array por leitura/escrita em `.json`.

---

## ✅ Conclusão do Dia 12

Hoje você:

- Instalou e usou o `uuid` para gerar IDs únicos

- Separou as rotas e a lógica (controller) em arquivos diferentes

- Criou uma estrutura modular e escalável

- Trabalhou com dados simulados em memória

---
---
