const conexaoBanco = require("../../config/conexaoBanco");

const detalharTransacao = (transacao_id, usuario_id) => {
  const query = `
    SELECT t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id,  t.categoria_id, c.descricao AS categoria_nome
    FROM transacoes t JOIN categorias c ON t.categoria_id = c.id WHERE t.id = $1 AND t.usuario_id = $2;
  `;
  const transacaoEncontrada = conexaoBanco.query(query, [
    transacao_id,
    usuario_id,
  ]);

  return transacaoEncontrada;
};

module.exports = detalharTransacao;