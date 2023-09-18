const atualizarTransacao = require("../../repositorios/transacao/atualizarTransacao");

const transacaoAtualizar = async (req, res) => {
  const usuario_id = req.usuario_id;
  const transacao_id = req.params.id;
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  try {
    await atualizarTransacao(transacao_id, usuario_id, descricao, valor, data, categoria_id, tipo);
    return res.status(204).send();
    
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = transacaoAtualizar;
