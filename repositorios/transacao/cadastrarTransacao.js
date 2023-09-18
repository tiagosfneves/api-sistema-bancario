const conexaoBanco = require("../../config/conexaoBanco");

const cadastrarTransacao = (transacao) => {
  const { descricao, valor, data, categoria_id, usuario_id, tipo } = transacao;
  const query = `
    INSERT into transacoes (descricao, valor, data, categoria_id, usuario_id, tipo)
    SELECT $1, $2, $3, $4, $5, $6 RETURNING *;
  `;
  const transacaoCadastrada = conexaoBanco.query(query, [descricao, valor, data, categoria_id, usuario_id, tipo]);
  return transacaoCadastrada;
};

module.exports = cadastrarTransacao;