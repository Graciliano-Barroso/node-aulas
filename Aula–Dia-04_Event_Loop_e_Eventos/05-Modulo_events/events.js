const EventEmitter = require('events');
const meuEmissor = new EventEmitter();

meuEmissor.on('disparar', () => {
    console.log('O evento "disparar" foi ativado!');
});

meuEmissor.emit('disparar');