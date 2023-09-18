const conexaoBanco = require("../../config/conexaoBanco");

const removerTransacao = (usuario_id, transacao_id) => {
  const query = `
    delete from transacoes where usuario_id = $1 and id = $2 returning *;
  `;
  const transacao = conexaoBanco.query(query, [usuario_id, transacao_id]);

  return transacao;
};

module.exports = removerTransacao;