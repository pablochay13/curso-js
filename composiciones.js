// comparaciones 

//igualdad 
// == solo compara el valor
// === copara el valor y el tipo

if (5 == 5){
    console.log("es igual");
}

let a = 5;
let b = "5"; 

if (a == b){
    console.log("a es igual a b - debil");
}

if (a === b){
    console.log("a es igual a b - fuerte");
}


//desigualdad 

let c = 4; 
let d = 4;

if (c != d){
    console.log("c es diferente a d- debil")
}

if (c !== d){
    console.log("c es diferente a d - fuerte")
}


// comparaciones mayor que menor que

let max = 10; 
let min = 5;

if (max > min){
    console.log("max es mayor que 5")
}

if (max >= min){
    console.log("max es mayor que min")
}

if (max < min){
    console.log("max es mayor que 5")
}

if (max <= min){
    console.log("max es mayor que min")
}