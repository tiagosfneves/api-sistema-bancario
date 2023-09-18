const detalharTransacao = require("../repositorios/transacao/detalharTransacao");
const encontrarCategoria = require("../repositorios/categoria/encontrarCategoria");

const validarTransacaoAtualizar = async (req, res, next) => {
  const usuario_id = req.usuario_id;
  const transacao_id = req.params.id;
  const { descricao, valor, data, categoria_id, tipo } = req.body;
  const { rowCount } = await detalharTransacao(transacao_id, usuario_id);
 
  if (rowCount === 0)
    return res.status(404).json({ mensagem: "Transação não encontrada ou não pertence ao usuário." });
  
  if (!descricao || !valor || !data || !categoria_id || !tipo)
    return res.status(400).json({ mensagem: "Todos os campos obrigatórios devem ser informados." });
  
  const { rowCount: validarIdCategoria } = await encontrarCategoria(categoria_id);

  if (validarIdCategoria === 0)
    return res.status(400).json({ mensagem: "Categoria não encontrada." });

  if (!["entrada", "saida"].includes(tipo))
    return res.status(400).json({ mensagem: "O tipo precisa ser entrada ou saida!" });

  return next();
};

module.exports = validarTransacaoAtualizar;