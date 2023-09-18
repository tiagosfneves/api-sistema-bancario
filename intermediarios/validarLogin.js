const validarLogin = (req, res, next) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      mensagem: "Todos os campos obrigatórios.",
    });
  }

  return next();
};

module.exports = validarLogin;
