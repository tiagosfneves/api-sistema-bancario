const detalharUsuario = require("../../repositorios/usuario/detalharUsuario");

const usuarioDetalhar = async (req, res) => {
  const usuario_id = req.usuario_id;

  try {
    const { rows: detalhesUsuario } = await detalharUsuario(usuario_id);

    return res.status(200).json(detalhesUsuario[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = usuarioDetalhar;
