const express = require("express");

const validarCadastro = require("./intermediarios/validarCadastro");
const validarLogin = require("./intermediarios/validarLogin");
const autenticarUsuario = require("./intermediarios/autenticarUsuario");
const validarCamposAtualizar = require("./intermediarios/validarCamposAtualizar");
const validarCamposTransacao = require("./intermediarios/validarCamposTransacao");
const validarTransacaoAtualizar = require("./intermediarios/validarTransacaoAtualizar");

const usuarioCadastrar = require("./controladores/usuario/usuarioCadastrar");
const usuarioLogin = require("./controladores/usuario/usuarioLogin");
const usuarioDetalhar = require("./controladores/usuario/usuarioDetalhar");
const usuarioAtualizar = require("./controladores/usuario/usuarioAtualizar");
const categoriaListar = require("./controladores/categoria/categoriaListar");
const todasTransacoesListar = require("./controladores/transacao/todasTransacoesListar");
const extratoObter = require("./controladores/transacao/extratoObter");
const transacaoDetalhar = require("./controladores/transacao/transacaoDetalhar");
const transacaoCadastrar = require("./controladores/transacao/transacaoCadastrar");
const transacaoAtualizar = require("./controladores/transacao/transacaoAtualizar");
const transacaoRemove = require("./controladores/transacao/transacaoRemove");

const rotas = express.Router();

rotas.post("/usuario", validarCadastro, usuarioCadastrar);
rotas.post("/login", validarLogin, usuarioLogin);

rotas.use(autenticarUsuario);

rotas.get("/usuario", usuarioDetalhar);
rotas.put("/usuario", validarCamposAtualizar, usuarioAtualizar);
rotas.get("/categoria", categoriaListar);
rotas.get("/transacao", todasTransacoesListar);
rotas.get("/transacao/extrato", extratoObter);
rotas.get("/transacao/:id", transacaoDetalhar);
rotas.post("/transacao", validarCamposTransacao, transacaoCadastrar);
rotas.put("/transacao/:id", validarTransacaoAtualizar, transacaoAtualizar);
rotas.delete("/transacao/:id", transacaoRemove);

module.exports = rotas;