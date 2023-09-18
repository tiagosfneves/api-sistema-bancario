const conexaoBanco = require("../../config/conexaoBanco");

const listarCategoria = () => {
  const listaEncontrada = conexaoBanco.query("select * from categorias;");

  return listaEncontrada;
};

module.exports = listarCategoria;