const fs = require("fs");

const conteudo = fs.readFileSync("arquivo.txt", "utf8");
console.log(conteudo);
