// metodos con cadenas de caracteres 
// obtener longitud de string 

let str = "hola soy un string"; 
console.log(str.length);


//obtener partes de una cadena 
//slices substring substr 

let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(4, 10); 
console.log(substr_str);


//reemplazar contenido de cadena 

let cadena = "hola mi nombre es pablo"; 
console.log(cadena);

console.log(cadena.replace('pablo', 'Chay0s'));

let texto_largo = "soy un programador, pero no un programador full stack";
console.log(texto_largo.replaceAll('programador', 'streamer'));
console.log(texto_largo.replace(/ogramador/g, 'streamer'));
