const criptografarSenha = require("../../utils/criptografarSenha");
const cadastrarUsuario = require("../../repositorios/usuario/cadastrarUsuario");

const usuarioCadastrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const senhaCriptografada = await criptografarSenha(senha);
    const { rows: usuarioCadastrado } = await cadastrarUsuario(
      nome,
      email,
      senhaCriptografada
    );

    return res.status(201).json(usuarioCadastrado[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = usuarioCadastrar;