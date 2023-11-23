let positivos = 0; 
let negativosarr = []
hola = [1,-1, 2, -2, 3, -5]


function flecha(){
    for (let i = 0; i < hola.length; i++) {
        if (hola[i]<0) {
            negativosarr=+ hola[i];
            console.log(negativosarr[i.length-1]);
        }
        else if (hola[i] > 0) {
            positivos +=hola[i];
}
}

console.log(positivos + "positivos"); 
console.log(negativosarr + "negativos");
}

flecha()

var sumaPositivos = arr => {
    var positivos = 0;
    var negativos = 0; 
    for( let i; i.length; i++){
        positivos +=arr[i] > 0 ? arr[i] :
        negativos +=arr[i] < 0 ? arr[i] :
console. log ( negativos) 
return positivos;
}}

pos = sumaPositivos( [1,-1, 2, -2, 3, -5] );

sumaPositivos()
