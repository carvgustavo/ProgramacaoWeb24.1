const express = require('express');
const app = express();

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;

    if (!id || !nome || !qtd) {
        return res.status(400).send('Parâmetros inválidos. Certifique-se de incluir id, nome e quantidade.');
    }

    const produtoExistente = estoque.find(produto => produto.id === parseInt(id));
    if (produtoExistente) {
        return res.status(400).send('Produto com esse ID no estoque.');
    }

    estoque.push({ id: parseInt(id), nome, quantidade: parseInt(qtd) });
    res.send('Produto adicionado ao estoque');
});

app.get('/listar', (req, res) => {
    if (estoque.length === 0) {
        return res.send('O estoque está vazio');
    }
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;

    const index = estoque.findIndex(produto => produto.id === parseInt(id));
    if (index === -1) {
        return res.status(404).send('Produto não encontrado');
    }

    estoque.splice(index, 1);
    res.send('Produto removido do estoque');
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;

    const produto = estoque.find(produto => produto.id === parseInt(id));
    if (!produto) {
        return res.status(404).send('Produto não encontrado');
    }

    produto.quantidade = parseInt(qtd);
    res.send('Quantidade do produto editada');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
