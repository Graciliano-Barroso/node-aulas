# 🗂️ **Plano de Estudo de Node.js** (2 semanas)

> 🎯 Objetivo: Entender como o Node.js funciona, aprender a construir APIs e preparar o terreno para o Nest.js.
---

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

#### 🛠️ Prática adicional (sem solução nesta aula)

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
const fs = require('fs');

const conteudo = fs.readFileSync('arquivo.txt', 'utf8');
console.log(conteudo);
```

#### ✍️ Exemplo: escrita em arquivo

```js
fs.writeFileSync('novo.txt', 'Conteúdo novo aqui');
```

#### ➕ Exemplo: adicionar conteúdo (append)

```js
fs.appendFileSync('novo.txt', '\nNova linha adicionada!');
```

---

## 🛣️ 3. Módulo `path` – Manipulação de caminhos

Permite criar caminhos de forma segura e compatível com qualquer sistema operacional.

#### 🔍 Exemplo: uso básico

```js
const path = require('path');

const caminho = path.join(__dirname, 'pasta', 'arquivo.txt');
console.log(caminho);
```

- `__dirname`: retorna o diretório atual

- `path.join`: monta o caminho de forma automática e segura
- 
---

## 🧠 4. Módulo `os` – Informações do sistema operacional

Permite obter informações do sistema atual.

#### 🖥️ Exemplo:

```js
const os = require('os');

console.log('Sistema operacional:', os.platform());
console.log('CPU(s):', os.cpus().length);
console.log('Memória livre:', os.freemem());
console.log('Diretório home:', os.homedir());
```

---

## ⚙️ 5. Módulo `process` – Informações sobre o processo atual

Permite acessar dados do processo Node em execução e variáveis de ambiente.

#### 💡 Exemplo:

```js
console.log('PID:', process.pid);
console.log('Diretório de execução:', process.cwd());
console.log('Variáveis de ambiente:', process.env);
```

---

### 🛠️ Prática adicional (sem solução nesta aula)

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
const saudacao = require('./mensagem');

console.log(saudacao('Graciliano'));
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
    multiplicar
};
```

Arquivo: `main.js`

```js
const util = require('./util');

console.log(util.soma(3, 5));
console.log(util.multiplicar(4, 6));
```

---

## 🧠 5. Noções de escopo

⚠️ Tudo dentro de um módulo (arquivo) tem escopo local.

Ou seja, variáveis declaradas em um módulo não vazam para fora dele, a menos que sejam exportadas com `module.exports`.

```js
// em exemplo.js
const segredo = 'isso é privado';

module.exports = {
    mensagem: 'isso é público'
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

### 🛠️ Prática adicional (sem solução nesta aula)

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


