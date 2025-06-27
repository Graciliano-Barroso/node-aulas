const fs = require("fs");

const conteudo = fs.writeFileSync("novo.txt", "conteudo novo aqui");
console.log(conteudo);
