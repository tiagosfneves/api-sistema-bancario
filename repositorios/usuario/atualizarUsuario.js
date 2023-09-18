const conexaoBanco = require("../../config/conexaoBanco");

const atualizarUsuario = (nome, email, senha, id) => {
  const query = "update usuarios set nome = $1, email = $2, senha = $3 where id = $4";
  const usuarioAtualizado = conexaoBanco.query(query, [nome, email, senha, id]);
  return usuarioAtualizado;
};

module.exports = atualizarUsuario;