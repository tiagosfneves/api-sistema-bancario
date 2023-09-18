const encontrarUsuarioPorEmail = require("../../repositorios/usuario/encontrarUsuarioPorEmail");
const compararSenhas = require("../../utils/compararSenhas");
const jwt = require("jsonwebtoken");

const usuarioLogin = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const { rows: usuariosEncontrados, rowCount } =
      await encontrarUsuarioPorEmail(email);
    const usuario = usuariosEncontrados[0];

    if (rowCount === 0)
      return res.status(404).json({ mensagem: "E-mail ou senha inválidos" });

    const senhaComparar = await compararSenhas(senha, usuario.senha);
    if (!senhaComparar)
      return res.status(401).json({ mensagem: "E-mail ou senha inválidos" });

    const token = jwt.sign({ id: usuario.id }, "desafio", { expiresIn: "30m" });

    delete usuario.senha;

    return res.status(200).json({ usuario, token });
  } catch (error) {
    console.log(error);
    res.status(500).json("Erro interno no servidor.");
  }
};

module.exports = usuarioLogin;