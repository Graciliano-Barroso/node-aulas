const EventEmitter = require("events");
const meuEmissor = new EventEmitter();

meuEmissor.on("disparar", () => {
  setTimeout(() => {
    console.log("O alarme disparou após 2 segundos");
  }, 2000);
});

meuEmissor.emit("disparar");
