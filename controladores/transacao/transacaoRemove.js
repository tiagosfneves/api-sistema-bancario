const removeTransacao = require("../../repositorios/transacao/removerTransacao");

const transacaoRemove = async (req, res) => {
  const { id: transacao_id } = req.params;
  const usuario_id = req.usuario_id;

  try {
    const { rowCount } = await removeTransacao(usuario_id, transacao_id);

    if (rowCount === 0) return res.status(404).json({ mensagem: "Transação não encontrada." });
    return res.status(204).json();

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = transacaoRemove;