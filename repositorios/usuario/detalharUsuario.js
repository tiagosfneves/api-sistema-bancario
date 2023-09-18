const conexaoBanco = require("../../config/conexaoBanco");

const detalharUsuario = (usuario_id) => {
  const query = "select id, nome, email as email from usuarios where id = $1;";

  const perfilUsuario = conexaoBanco.query(query, [usuario_id]);
  return perfilUsuario;
};

module.exports = detalharUsuario;
