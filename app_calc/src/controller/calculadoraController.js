const calculadora = require('../calculadora/calculadora');

const calcularOperacao = (req, res) => {
    const { num1, num2, operacao } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        res.redirect('/'); 
        return;
    }

    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    const resultado = calculadora.calcular(numero1, numero2, operacao);

    res.render('resultado', { resultado });
};

module.exports = {
    calcularOperacao
};
