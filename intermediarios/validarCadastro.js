const encontrarUsuarioPorEmail = require("../repositorios/usuario/encontrarUsuarioPorEmail");

const validarCadastro = async (req, res, next) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos são obrigatórios." });
  }

  const { rowCount } = await encontrarUsuarioPorEmail(email);

  if (rowCount > 0) {
    return res.status(400).json({
      mensagem: "Já existe usuário cadastrado com o e-mail informado.",
    });
  }

  return next();
};

module.exports = validarCadastro;