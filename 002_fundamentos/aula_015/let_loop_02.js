let funcs = [];

for (let i = 0; i < 11; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]();
funcs[4]();
funcs[6]();
funcs[8]();
