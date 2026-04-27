# 🧮 Calculadora React Native

Uma calculadora simples e funcional desenvolvida com **React Native**, capaz de realizar as quatro operações matemáticas básicas.

---

## 📱 Preview

> Interface centralizada com botões numéricos e operadores dispostos em grade.

---

## 🚀 Tecnologias

- [React Native](https://reactnative.dev/)
- [React](https://reactjs.org/) com Hooks (`useState`)

---

## ✨ Funcionalidades

- ✅ Operações de **adição**, **subtração**, **multiplicação** e **divisão**
- ✅ Exibição em tempo real da expressão digitada
- ✅ Botão `=` para calcular o resultado
- ✅ Botão `C` para limpar/resetar o display

---

## 📂 Estrutura do Projeto

```
📦 calculadora
 └── App.js   # Componente principal com toda a lógica e interface
```

---

## ⚙️ Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://expo.dev/) ou ambiente React Native configurado

---

## 🧠 Como funciona

O componente principal `App` utiliza o hook `useState` para armazenar a expressão matemática como uma string. Cada botão numérico ou operador concatena seu valor ao estado atual. Ao pressionar `=`, a função `eval()` avalia a expressão e exibe o resultado. O botão `C` reinicia o estado para uma string vazia.

---

## ⚠️ Observações

- O projeto utiliza `eval()` para calcular as expressões. Em ambientes de produção, recomenda-se substituir por uma biblioteca de parsing matemático (como [mathjs](https://mathjs.org/)) por questões de segurança.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💙 usando React Native
