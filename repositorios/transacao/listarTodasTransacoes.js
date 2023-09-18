const conexaoBanco = require("../../config/conexaoBanco");

const listarTodasTransacao = (usuario_id) => {
  const query = `
    SELECT t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id,  t.categoria_id, c.descricao AS categoria_nome
    FROM transacoes t JOIN categorias c ON t.categoria_id = c.id WHERE t.usuario_id = $1;
  `;
  const transacoes = conexaoBanco.query(query, [usuario_id]);
  return transacoes;
};

module.exports = listarTodasTransacao;