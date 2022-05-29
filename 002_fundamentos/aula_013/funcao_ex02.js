// Armazenando uma faunção em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando função arrow em uma variável
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

console.log("---");

const parImp = function (num) {
  if (num % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
};

const res = parImp(3);
console.log(res);
