var suma_pares = 0;
var suma_impares = 0;

for (var i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    suma_pares += i;
  } else {
    suma_impares += i;
  }
}
