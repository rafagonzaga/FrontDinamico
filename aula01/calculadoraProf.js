function calculadora(var1, var2, operacao) {
    let resultado;
    switch (operacao) {
        case "+":
            resultado = var1 + var2;
            break;
        case "-":
            resultado = var1 - var2;
            break;
        case "*":
            resultado = var1 * var2;
            break;
        case "/":
            if (var2 === 0) {
                console.log("Não é possível dividir por 0!");
                break;
            }
            resultado = var1 / var2;
            break;
        default:
            console.log("operação inválida");
            break;
    }
    return resultado;
}

let aux = calculadora(10, 10, "+");
let aux1 = calculadora(10, 10, "-");
let aux2 = calculadora(10, 10, "*");
let aux3 = calculadora(10, 10, "/");
let aux4 = calculadora(10, 10, "k");
console.log(aux);
// console.log(aux1);
// console.log(aux2);
// console.log(aux3);
// console.log(aux4);