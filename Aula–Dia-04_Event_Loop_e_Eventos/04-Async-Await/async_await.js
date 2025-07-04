function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar() {
    console.log("Esperando...");
    await esperar(2000);
    console.log("Fim da espera!");
}

executar();
