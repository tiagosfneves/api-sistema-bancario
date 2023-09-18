const listarTodasTransacoes = require("../../repositorios/transacao/listarTodasTransacoes");

const extratoObter = async (req, res) => {
  const usuario_id = req.usuario_id;

  try {
    const { rows: transacoes } = await listarTodasTransacoes(usuario_id);

    let entrada = 0;
    let saida = 0;

    for (const transacao of transacoes) {
      if (transacao.tipo === "entrada") entrada += transacao.valor;
       else if (transacao.tipo === "saida") saida += transacao.valor;
    }
    return res.status(200).json({ entrada, saida });

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = extratoObter;