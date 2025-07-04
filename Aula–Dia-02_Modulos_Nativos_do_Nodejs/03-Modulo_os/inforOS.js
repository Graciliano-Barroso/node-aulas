const os = require("os");

console.log("Sistema operacioanl:", os.platform());
console.log("CPU(s):", os.cpus().length);
console.log("Memória livre:", os.freemem());
console.log("Diretório home:", os.homedir());
