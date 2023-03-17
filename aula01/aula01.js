function calcular(num1, num2, operacao) {
    switch (operacao) {
        case "adicao":
            return num1 + num2;
        case "subtracao":
            return num1 - num2;
        case "multiplicacao":
            return num1 * num2;
        case "divisao":
            if (num2 == 0)
                return "Impossível dividir por zero";
            return num1 / num2;
        default:
            return "Operação não permitida";
    }
}

console.log(calcular(15, 5, "adicao"))
console.log(calcular(15, 5, "subtracao"))
console.log(calcular(15, 5, "multiplicacao"))
console.log(calcular(15, 0, "divisao"))