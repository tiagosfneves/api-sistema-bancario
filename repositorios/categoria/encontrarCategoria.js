const conexaoBanco = require("../../config/conexaoBanco");

const encontrarCategoria = (id) => {
  const query = "select * from categorias where id = $1";
  const transacaoCadastrada = conexaoBanco.query(query, [id]);
  return transacaoCadastrada;
};

module.exports = encontrarCategoria;