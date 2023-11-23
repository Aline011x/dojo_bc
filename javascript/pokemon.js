var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
}

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

/* PRINT all the NAMES of the pokemons that have ID greater than 99
    Imprimir todos los NOMBRES de pokemones con ID mayor a 99
*/

/* PRINT the pokémon objects whose id is evenly divisible by 3
    Imprimir el OBJETO en el cual el id es divisible entre 3
*/

/* PRINT the pokémon objects that have more than one type
    Imprimir el OBJETO con más de un tipo
*/

/* PRINT the names of the pokémon whose only type is "poison"
    Imprimir NOMBRE de pokemon que SOLO TIENE tipo "poison"
*/
//{ "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },

const condicion1 = [];
const condicion2 = [];
const condicion3 = [];
const condicion4 = [];

for(let x=0; x< pokemon.length;x++){
    
    if (pokemon[x].id > 99){
        // console.log(pokemon[x].name)
        condicion1.push(pokemon[x].name)
    }

    if(pokemon[x].id % 3 === 0){
        // console.log(pokemon[x])
        condicion2.push(pokemon[x])
    }

    if(pokemon[x].types.length > 1 ){
        // console.log(pokemon[x])
        condicion3.push(pokemon[x])
    }

    for(let y=0; y < pokemon[x].types.length;y++){
        if(pokemon[x].types[y] === 'poison' && pokemon[x].types.length < 2  ){
            // console.log(pokemon[x])
            condicion4.push(pokemon[x])
        }
    }
}
    console.log(condicion1)
    console.log(condicion3)
    console.log(condicion3)
    console.log(condicion4)