const criptograrSenha = require("../../utils/criptografarSenha");
const atualizarUsuario = require("../../repositorios/usuario/atualizarUsuario");

const usuarioAtualizar = async (req, res) => {
  const { nome, email, senha } = req.body;
  usuario_id = req.usuario_id;

  try {
    const senhaCriptografada = await criptograrSenha(senha);
    await atualizarUsuario(nome, email, senhaCriptografada, usuario_id);
    return res.status(204).json();
  } catch (error) {
    if (error.constraint === "usuarios_email_key") return res.status(400).json({ mensagem: "O e-mail informado já está sendo utilizado por outro usuário." });

    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = usuarioAtualizar;