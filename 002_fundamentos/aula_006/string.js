const escola = "Cod3r";

console.log(escola.charAt(4)); // mostra o quarto caracter
console.log(escola.charAt(5)); // não mostra nada, pois não há 5 letras
console.log(escola.charCodeAt(3)); // mostra o código do número 3
console.log(escola.indexOf("3")); // mostra se tem o caracter 3

console.log(escola.substring(1)); // mostra do indice 1 para frente
console.log(escola.substring(0, 3)); // mostra no indide 0 ao 3
console.log("Escola ".concat(escola).concat("!")); // concatena
console.log(escola.replace(3, "e")); // substituiu o 3 pelo e

console.log("Ana,Maria".split(",")); // tranforma string em arrray
