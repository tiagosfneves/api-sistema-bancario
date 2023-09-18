const jwt = require("jsonwebtoken");

const autenticarUsuario = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const token = authorization.split(" ")[1];
    const { id: usuario_id } = jwt.verify(token, "desafio");
    req.usuario_id = usuario_id;

    return next();
  } catch (error) {
    return res.status(401).json({
      mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado.",
    });
  }
};

module.exports = autenticarUsuario;