const detalharTransacao = require("../../repositorios/transacao/detalharTransacao");

const transacaoDetalhar = async (req, res) => {
  const usuario_id = req.usuario_id;
  const transacao_id = req.params.id;

  try {
    const { rows: detalheTransacao, rowCount } = await detalharTransacao(
      transacao_id,
      usuario_id
    );

    if (rowCount === 0) return res.status(404).json({ mensagem: "Transação não encontrada." });
    return res.status(200).json(detalheTransacao);

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = transacaoDetalhar;