const promessa = new Promise((resolve, reject) => {
  const sucesso = false;
  if (sucesso) {
    resolve("Deu certo!");
  } else {
    reject("Deu errado!");
  }
});

promessa
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));
