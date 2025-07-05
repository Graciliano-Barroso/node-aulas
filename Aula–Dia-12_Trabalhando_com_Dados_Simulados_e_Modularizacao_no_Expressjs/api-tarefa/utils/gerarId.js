const { v4: uuidv4 } = require("uuid");

function gerarId() {
  return uuidv4();
}

module.exports = gerarId;
