const valores = [7.0, 8.0, 6.0, 9.0];
console.log(valores[0], valores[3]); // incide 0 == 1, 1 == 2...
console.log(valores[4]);

valores[4] = 10.0;
console.log(valores);
console.log(valores.length); // indica o tamanho do array

valores.push({ id: 3 }, false, null, "teste"); // adiciona elementos no array

console.log(valores);

console.log(valores.pop()); // remove o ultimo elemento do array

delete valores[5]; // remove elementos do array
console.log(valores);

console.log(typeof valores);
