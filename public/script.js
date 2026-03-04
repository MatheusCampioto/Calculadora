function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacao = document.getElementById("operacao").value;
  let resultado;

  switch (operacao) {
    case "+": resultado = num1 + num2; break;
    case "-": resultado = num1 - num2; break;
    case "*": resultado = num1 * num2; break;
    case "/": resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero"; break;
    case "%": resultado = num2 !== 0 ? num1 % num2 : "Erro: divisão por zero"; break;
    default: resultado = "Operação inválida";
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}