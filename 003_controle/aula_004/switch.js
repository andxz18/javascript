const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Muito bom, você foi aprovado!!");
      break;
    case 8:
    case 7:
      console.log("Parabéns, você foi aprovado!!");
      break;
    case 6:
      console.log("Você está de recuperação!!");
      break;
    case 5:
      console.log("Você está de recuperação!!");
      break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Reprovado!!");
      break;
    default:
      console.log("Nota inválida!!");
  }
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
