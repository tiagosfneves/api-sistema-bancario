const listarCategoria = require("../../repositorios/categoria/listarCategoria");

const categoriaListar = async (req, res) => {
  try {
    const { rows: categorias } = await listarCategoria();
    return res.status(200).json(categorias);

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

module.exports = categoriaListar;