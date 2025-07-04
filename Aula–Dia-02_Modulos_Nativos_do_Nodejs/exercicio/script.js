const fs = require("fs");

const lerArquivo = fs.readFileSync("exercicio.txt", "utf8");
fs.appendFileSync(
  "exercicio.txt",
  "\nAdiciona uma nova linha com texto de sua escolha"
);

const linhaAdicionada = fs.readFileSync("exercicio.txt", "utf8");

console.log("Antes",lerArquivo);
console.log("Depois",linhaAdicionada);
