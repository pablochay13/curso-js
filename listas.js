// listas o array 

const lista = [1, "hola", true, undefined, null]; 
const lista2 = new Array (2, "hola", true, undefined, null);

console.log(lista);
console.log(lista2);


// objetos 

const movil = {
    altura : 10, 
    anchura : 5, 
    marca : "xiaomi", 
    isWhite : false, 
    contacto : ["gorka, martin, raul"],
    tarjeta : {
        marca : "kingstib", 
        almacenamiento : 32
    }
}

movil.marca = "samsung";

console.log(movil.marca);

//fechas

const ahora = new Date();
console.log(ahora);

const fechaMilis = new Date(10);
console.log(fechaMilis);

const fechaValores = new Date(2022, 4, 2);
console.log(fechaValores);

const dia = ahora.getDay();
console.log(dia);

