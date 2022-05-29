let valor; // Não inicializada
console.log(valor);

valor = null; // Ausência de valor
console.log(valor);

// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = (3.5).toFixed(2);
console.log(produto);

produto.preco = undefined; // Evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // Sem preço
console.log(!!produto.preco);
console.log(produto);

console.log("---");

var c = 3;
var d = c;
d++;

console.log(c);
console.log(d);
