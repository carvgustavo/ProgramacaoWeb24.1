const calcular = (num1, num2, operacao) => {
    let resultado;
    switch (operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            resultado = NaN; // Caso a operação não seja válida
    }
    return resultado;
};

module.exports = {
    calcular
};
