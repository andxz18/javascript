const prod1 = {}; // Cria um objeto vazio
prod1.nome = "Celular Ultra Mega";
prod1.preco = (4500).toFixed(2) + " Reais";
prod1["Desconto Legal"] = (0.4).toFixed(2); // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: "Camisa Polo",
  preco: (79.9).toFixed(2) + " Reais",
};

console.log(prod2);
