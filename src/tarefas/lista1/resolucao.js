import Pilha from "../../Pilha.js";

// Mapa de precedência dos operadores
const operadores = new Map([
  ["+", 1],
  ["-", 1],
  ["*", 2],
  ["/", 2],
]);

const infixaParaPosfixa = (expressao) => {
  const pilha = new Pilha(20);
  let saida = "";

  for (const token of expressao) {
    //ignorar espaços
    if (token === " ") continue;

    // Operando (letra ou número) vai direto para a saída.
    if (/[a-zA-Z0-9]/.test(token)) {
      saida += token;
    } else if (token === "(") {
      //empilha
      pilha.push(token);
    } else if (token === ")") {
      //desempilha e envia para saída até encontrar um (.
      while (!pilha.isEmpty() && pilha.top() !== "(") {
        saida += pilha.top();
        pilha.pop();
      }
      pilha.pop(); // remove o '('
    } else if (operadores.has(token)) {
      //Operador: empilha, mas desempilha operadores com maior ou igual precedência da pilha para a saída antes.
      while (
        !pilha.isEmpty() &&
        pilha.top() !== "(" &&
        operadores.has(pilha.top()) &&
        operadores.get(token) <= operadores.get(pilha.top())
      ) {
        saida += pilha.top();
        pilha.pop();
      }
      pilha.push(token);
    }
  }

  // Desempilha o restante dos operadores
  while (!pilha.isEmpty()) {
    saida += pilha.top();
    pilha.pop();
  }

  return saida;
};

const expressao = "a + b * c";
console.log("Expressão pós-fixa:", infixaParaPosfixa(expressao));
const expressao2 = "(a + t) * ((b + (a + c)) ^ (c + d))";
console.log("Expressão pós-fixa:", infixaParaPosfixa(expressao2)); ///at+bac++cd+^*
