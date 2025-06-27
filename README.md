#🗂️ Plano de Estudo de Node.js (2 semanas)
🎯 Objetivo: Entender como o Node.js funciona, aprender a construir APIs e preparar o terreno para o Nest.js.

##📘 Aula – Dia 1: Introdução ao Node.js e Configuração do Ambiente
🎯 Objetivo da Aula
Compreender o que é o Node.js, para que ele serve, como instalá-lo e como criar seus primeiros scripts em JavaScript rodando no terminal.

###🧠 1. O que é o Node.js?
Node.js é um ambiente de execução JavaScript do lado do servidor, construído sobre o motor V8 do Google Chrome. Ele permite que você execute código JavaScript fora do navegador, geralmente para construir servidores, APIs, automações e ferramentas de linha de comando.

####🔧 Características principais:
Baseado em eventos (event-driven)

Assíncrono e não bloqueante

Excelente para I/O intensivo (APIs, leitura de arquivos, redes)

Usa o npm (Node Package Manager), o maior repositório de pacotes do mundo

###🖥️ 2. Instalando o Node.js
####✅ Passo a passo para instalar:
Acesse: https://nodejs.org

Baixe a versão LTS (Long Term Support) para maior estabilidade.

Siga o instalador padrão para o seu sistema operacional.

🧪 3. Testando a instalação
Após instalar, abra o terminal (Prompt de Comando no Windows ou Terminal no Mac/Linux) e digite:

´´´bash
node -v
´´´
Resultado esperado: a versão instalada do Node, ex: v18.17.1

´´´bash
npm -v
´´´
Resultado esperado: versão do gerenciador de pacotes npm, ex: 9.8.0
✅ Se você recebeu os números de versão, está tudo certo!

###📝 4. Criando seu primeiro script
Vamos criar um script simples que imprime uma mensagem no console.

📁 Etapas:
Crie uma pasta no seu computador: