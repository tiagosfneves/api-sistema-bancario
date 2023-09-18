const conexaoBanco = require("../../config/conexaoBanco");

const encontrarUsuarioPorEmail = (email) => {
  const usuarioEncontrado = conexaoBanco.query(
    "select * from usuarios where email = $1;",
    [email]
  );
  return usuarioEncontrado;
};

module.exports = encontrarUsuarioPorEmail;