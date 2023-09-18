const listarTodasTransacoes = require("../../repositorios/transacao/listarTodasTransacoes");

const todasTransacoesListar = async (req, res) => {
  const usuario_id = req.usuario_id;
  const { filtro } = req.query;

  try {
    const { rows: transacoes } = await listarTodasTransacoes(usuario_id);

    if (filtro) {
      const transacaoFiltro = [];

      filtro.map((categoria) => {
        transacaoFiltro.push(...transacoes.filter((t) => 
            t.categoria_nome.toLowerCase() == categoria.toLowerCase()
        ));
      });

      return res.status(200).json(transacaoFiltro);
    }

    return res.status(200).json(transacoes);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = todasTransacoesListar;