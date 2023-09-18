const cadastrarTransacao = require("../../repositorios/transacao/cadastrarTransacao");
const encontrarCategoria = require("../../repositorios/categoria/encontrarCategoria");

const transacaoCadastrar = async (req, res) => {
  const { tipo, descricao, valor, data, categoria_id } = req.body;
  const id = req.usuario_id;

  try {
    const { rows: categorias, rowCount } = await encontrarCategoria(categoria_id);

    if (rowCount === 0) return res.status(404).json({ mensagem: "Categoria não existe" });

    const usuarioTransacao = await cadastrarTransacao({descricao, valor, data, categoria_id, usuario_id: id,  tipo,});
    const { rows: transacaoes } = usuarioTransacao;
    const transacao = transacaoes[0];

    transacao.categoria_nome = categorias[0].descricao;
    return res.status(201).json(transacao);

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = transacaoCadastrar;