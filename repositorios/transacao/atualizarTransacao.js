const conexaoBanco = require("../../config/conexaoBanco");

const atualizarTransacao = (transacao_id, usuario_id, descricao, valor, data, categoria_id, tipo) => {
  const query = `
    UPDATE transacoes SET descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5
    WHERE id = $6 AND usuario_id = $7 RETURNING *;
  `;
  return conexaoBanco.query(query, [descricao, valor, data, categoria_id, tipo, transacao_id, usuario_id]);
};

module.exports = atualizarTransacao;