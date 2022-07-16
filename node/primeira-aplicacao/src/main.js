const express = require('express');
const app = express();

app.use(express.json());

const produtos = [];

app.post('/produtos', (req, res) => {
    const {nome, marca, tipo, preço, id} = req.body;

    produtos.push({
        nome: nome,
        marca: marca,
        tipo: tipo,
        preço: preço,
        id: id
    })

    return res.send('Produto cadastrado')
})

app.get("/listarProdutos", (req, res) => {
    return res.send(produtos)
})

app.get('/listarProdutos/:id', (req, res) => {
    const {id} = req.params;
    const idProduto = [];
    
    produtos.forEach(produto => {
        if (produto.id == id) {
            idProduto.push(produto)
        } else {
            console.log('Id inválido.')
        }
    })
    return res.send(idProduto);
})

app.listen(3333, () => {console.log('O servidor está rodando na porta 3333')})