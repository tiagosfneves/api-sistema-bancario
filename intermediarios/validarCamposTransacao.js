const validarCamposTransacao = (req, res, next)=>{
    const {tipo, descricao, valor, data, categoria_id} = req.body;
    if(!tipo || !descricao || !valor || !data || !categoria_id)
        return res.status(400).json({ mensagem: "Todos os campos obrigatórios." });

    if(!['entrada', 'saida'].includes(tipo))
        return res.status(400).json({ mensagem: "O tipo precisa ser entrada ou saida!" });

    return next();
}

module.exports = validarCamposTransacao;