//arreglos de elementos
var hobbies=['tocar la guitarra', 'leer', 'estar en youtube', 
'hacer jardineria', 'cantar', 'jugar videojuegos', 'investigar']

console.log(hobbies[0])
hobbies[1]='trotar'
console.log(hobbies)
console.log(hobbies.length)

for (let z=0; z<hobbies.length; z++){
    console.log(hobbies[z])
}
//arreglos con datos combinados, solo una propiedad de js
var combinado =  [1.11, "Texto de arreglo", true, 30, ["esta", "es", "otra", "lista"] ]

for (let i=0; i<combinado.length; i++){
    console.log(`Posicion: ${i} de mi arreglo es: ${combinado[i]}`)
}
// let se usa mas a nivel profesional, var ya no tanto
// const es una variable que no se puede modificar

combinado.push("elemento") //agrega elementos a una lista
console.log(combinado)

combinado.pop() //elimina el ultimo elemento de una lista
console.log("______")
console.log(combinado)

const nombres = ['Juana', 'Elena', 'Paco', 'Pedro']
nombres.pop()
console.log(nombres)
nombres[1]='Rosa'
console.log(nombres)
//la variable completa no se puede eliminar, pero no asi uno de sus elementos

const noeliminar = 'hola'

if (noeliminar )
noeliminar.replace('yapa')

//arreglos bidirectionados
var matriz = [['1','2','3','4', '5','6', '7']]
//insertar datos en un arreglo que contiene otro arreglo
matriz[0].push(8) 
console.log(matriz) //arreglo

// OBJETOS

var estudiante= {
        
    "id": 12345,
    "nombre": "Elena" ,
    "apellido": "De Troya",
    "edad": 25,
    "hobbies1":[ "Leer" ,"ver series", "bailar"],
    "direcciones":[
        { //formato json
            "calle": "Primera Avenida" ,
            "num": 345,
            "ciudad": "Guadalajara" ,
            "pais": "México"
        }, 
        {
            "calle": "Av. Sol",
            "num": 123,
            "ciudad": "Montrrrey" ,
            "pais": "México"
        },
        {
            "calle": "Av. Guitierres",
            "num": 456,
            "ciudad": "Ciudad de Mexico",
            "pais": "México"
        }
    ]
}
console.log(estudiante["nombre"])
console.log(estudiante.apellido)
estudiante.apellido = "De Arco"
console.log(estudiante)
estudiante["curso"] = "Front-End"    //agregamos propiedad kay
console.log(estudiante)
delete estudiante.direcciones //elimina propiedad key
console.log(estudiante)