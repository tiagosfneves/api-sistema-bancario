const conexaoBanco = require("../../config/conexaoBanco");

const cadastrarUsuario = (nome, email, senhaCriptografada) => {
  const query = `
    INSERT INTO
    usuarios (nome, email, senha)
    VALUES
    ($1, $2, $3)
    RETURNING id, nome, email`;
  const usuarioCadastrado = conexaoBanco.query(query, [
    nome,
    email,
    senhaCriptografada,
  ]);
  return usuarioCadastrado;
};

module.exports = cadastrarUsuario;