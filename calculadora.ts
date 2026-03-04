import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(): void {
  rl.question("Insira o primeiro número (ou 'sair'): ", (num1: string) => {
    if (num1.toLowerCase() === "sair") {
      console.log("Saindo...");
      rl.close();
      return;
    }

    rl.question("Insira o segundo número: ", (num2: string) => {
      rl.question("Digite a operação (+, -, *, /, %): ", (op: string) => {
        const a: number = Number(num1);
        const b: number = Number(num2);
        let result: number | null = null;

        if (op === "+") result = a + b;
        else if (op === "-") result = a - b;
        else if (op === "*") result = a * b;
        else if (op === "/") {
          if (b === 0) {
            console.log("Erro: divisão por 0.");
          } else {
            result = a / b;
          }
        } else if (op === "%") {
          if (b === 0) {
            console.log("Erro: módulo por 0.");
          } else {
            result = a % b;
          }
        } else {
          console.log("Operação inválida.");
        }

        if (result !== null) {
          console.log("Resultado:", result);
        }
        console.log("-----------------------------");

        perguntar();
      });
    });
  });
}

perguntar();