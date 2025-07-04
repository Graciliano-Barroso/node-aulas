function saudacao(nome, callback) {
  console.log(`Olá, ${nome}`);
  callback();
}

saudacao("Graciliano", () => {
  console.log("Seja bem-vindo!");
});
