//bifurcaciones if / else 

if (true) {
    console.log("verdadero");
}

if (false) {
    console.log("es verdadero");
} else {
    console.log("es falso")
}

let saldo = 50;
let efectivo = 200;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero");
} else {
    console.log("Saldo insuficiente");
}





// if else + if else

let nota = 3;

if (nota === 5) {
    console.log("5");
} else if (nota === 4) {
    console.log("4")
}
else if (nota === 3) {
    console.log("3")
}
else if (nota === 2) {
    console.log("2")
}
else if (nota === 1) {
    console.log("1")
}





// switch

let notaSw = 2;

switch (notaSw) {
    case 5:
        console.log("5");
        break;
    case 4:
        console.log("4");
        break;
    case 3:
        console.log("3");
        break;
    case 2:
        console.log("2");
        break;
    case 1:
        console.log("1");
        break;
    default:
        break;
}

