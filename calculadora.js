"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function perguntar() {
    rl.question("Insira o primeiro número (ou 'sair'): ", function (num1) {
        if (num1.toLowerCase() === "sair") {
            console.log("Saindo...");
            rl.close();
            return;
        }
        rl.question("Insira o segundo número: ", function (num2) {
            rl.question("Digite a operação (+, -, *, /, %): ", function (op) {
                var a = Number(num1);
                var b = Number(num2);
                var result;
                if (op === "+")
                    result = a + b;
                else if (op === "-")
                    result = a - b;
                else if (op === "*")
                    result = a * b;
                else if (op === "/") {
                    if (b === 0) {
                        console.log("Erro: divisão por 0.");
                        return perguntar();
                    }
                    result = a / b;
                }
                else if (op === "%") {
                    if (b === 0) {
                        console.log("Erro: módulo por 0.");
                        return perguntar();
                    }
                    result = a % b;
                }
                else {
                    console.log("Operação inválida.");
                    return perguntar();
                }
                console.log("Resultado:", result);
                console.log("-----------------------------");
                perguntar();
            });
        });
    });
}
perguntar();
