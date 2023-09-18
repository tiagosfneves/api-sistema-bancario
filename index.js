
const express = require("express");
const rotas = require("./rotas");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(rotas);

app.listen(port, () => {
  console.log(`Servidor inciado na porta ${port}`);
});
