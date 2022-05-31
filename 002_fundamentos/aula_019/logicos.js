/*
    - v e v = verdadeiro
    - v e f = falso
    - v e ? = falso

    - v ou ? = verdadeiro
    - f ou v = verdadeiro
    - f ou f = falso
    - f ou ? = ?

    - v xor v = falso
    - v xor f = verdadeiro
    - f xor v = verdadeiro
    - f xor f = falso

    - !v = falso
    - !f = verdadeiro
*/

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
