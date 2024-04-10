const express = require('express');
const calculadora = require('./util/calculadora');
const app = express();
const port = 8080;

app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send('Resultado: ' + calculadora.somar(a, b));
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send('Resultado: ' + calculadora.subtrair(a, b));
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send('Resultado: ' + calculadora.multiplicar(a, b));
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    res.send('Resultado: ' + calculadora.dividir(a, b));
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});
