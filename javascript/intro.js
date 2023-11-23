var uno = "este es un valor random";
console.log(uno);

var otro_nombre = "Juana de Arcos";
var edad = 18;
var otro_mensaje = `Mi nombre es: ${otro_nombre}, tengo ${edad} años ¿Cómo estás?, `; // Interpolacion poner otra variable dentro de una variable OJO, comillas al revez ``
var tercer_mensaje = "mi nombre es : "+otro_nombre+" ¿cómo estás?"; // asi seria concatenado
console.log(otro_mensaje);

var num1 =5;
var num2 =7;

var combinamosTexto = "ABC";
console.log(combinamosTexto + num1);
console.log(combinamosTexto+num1+num2);
console.log(num1+num2+combinamosTexto); // teniendo un texto al incio los numeros despues seran concatenados, si son numeros se sumaran primero y despues el texto

var orden = 10+20/6;
console.log(orden);
orden = (10+20)/6; // 1.- () 2.- /*% 3.- +-
console.log(orden);

var n = 14;
n += 5; // n = n+5 = 14+5 = 19

var nombre_completo = "Pedro";
nombre_completo += " Perez";  
console.log(nombre_completo);  // Pedro Perez

var variable1 = 1;
var variable2 = "1";
if(variable1 == variable2) {
    console.log("Son iguales");
}

if(variable1 === variable2) {
    console.log("Son iguales y con el mismo tipo");
}