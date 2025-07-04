const fs = require("fs");

const conteudo = fs.appendFileSync("adicionar.txt", "\nNova linha Adicionada!");
console.log(conteudo);