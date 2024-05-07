/* Arrays */

let arrayVacio = []

let arrayNumeros = [0,1,2,3,4,5,6,7,8,9]

let arrayNumerosPares = [0,2,4,6,8]

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

/* Funciones */

function suma (a , b) {
    return a + b
}

function potenciacion (a , b) {
    return (a**b)
}

function separarPalabras (frase) {
    let palabrasArray = frase.split (' ')
    return palabrasArray
}

/* function separarPalabras(string) {
    return string.split(' ');
} */

function repetirString (string , a) {
    let stringRepeticion = ''
    
    for ( let i = 0 ; i < a ; i++ ) {
        stringRepeticion += string
    }

    return stringRepeticion
}
/* function repetirString(string, veces) {
    return string.repeat(veces);
}
 */


// -----------------------------------------------------------

/* function esPrimo (num) {
    if ( num % num+1 == 0 ) {
        return false
    } else { 
        if (num % num == 0 && num % 1 == 0) {
            return true
        } else {
            return false
        }

    } 
    
} */
/* 
function esPrimo (num) {
    if (num % num == 0 || num % 1 == 0) {
        return true
    } else {
        return false
    }
    
} */

function esPrimo (num) {
    for (let i=2 ; i<num ; i++){
        if ( num % i == 0 ) {
            return false
        }
    }
        if (num % num == 0 && num % 1 == 0) {
        return true
    } else {
        return false
    }
} 

/* es lo mismo?
 */
/* function esPrimo (num) {
    for (let i=2 ; i<num ; i++){
        if ( num % i == 0 ) {
            return false
        }
    }
    return true
} 

 */

// -----------------------------------------------------------


/* Mezclando arrays y funciones */

function ordenarArray (number) {
    /* return Array.from(String(number)).reverse();
 */
    let reverseNumber = number.reverse();
    return reverseNumber
}


function obtenerPares (numerosPares) {
    return numerosPares.filter(i => i % 2 === 0);
    const arrayEx = [ 56, 28 , 14 , 2];
    const pares = obtenerPares (arrayEx) ;
}


/* ---- */
function pintarArray(array) {
    return `([${array.join(',')}])`;
}
const arrayEntrada = [0,1,2];
console.log(pintarArray(arrayEntrada));



function arrayMapi (arr,fun) {
    return arr.map(fun)
}

function eliminarDuplicados (arr) {
    return [...new Set(arr)]
}


/* PROYECTO */

/* Arrays */


let arrayNumerosNeg = [0, -1 , -2, -3, -4, -5, -6, -7, -8, -9]

let holaMundo = ['Hola' , 'Mundo']

let loGuardoTodo = ['hola' , 'que' , 23 , 42.33 , 'tal']

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]


/* Funciones */

function multiplicacion (a , b) {
    return a*b
}


function division (a , b) {
    return a/b
}
/* function division(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
} */



/* function esPar (a) {
    let sumaPares = 0

    for (let i=0 ; i<10 ; i++) {
        if (i % 2 === 0 ) 
        sumaPares = sumaPares + i
    return true
    } else {
        return false
    }
}
 */
function esPar(numero) {
    return numero % 2 === 0;
}

/* --- */ /* Revisar */
/* const arrayFunciones = [suma, resta, multiplicacion];

// Definición de funciones necesarias para el ejercicio 22
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}


function multiplicacion(a, b) {
    return a * b;
}


function division(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}


function esPar(numero) {
    return numero % 2 === 0;
}


// Definición de funciones necesarias
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
} */

// Creación del array con las funciones
const arrayFuncs = [suma, resta, multiplicacion];
// Ejemplo de uso
const resultadoSuma = arrayFuncs[0](4, 2); // Llama a la función suma: 4 + 2
const resultadoResta = arrayFuncs[1](4, 2); // Llama a la función resta: 4 - 2
const resultadoMultiplicacion = arrayFuncs[2](4, 2); // Llama a la función multiplicación: 4 * 2
console.log(resultadoSuma); // Output: 6
console.log(resultadoResta); // Output: 2
console.log(resultadoMultiplicacion); // Output: 8



function ordenarArray2(array) {
    return array.slice().sort((a, b) => b - a);
}


function obtenerImpares(array) {
    return array.filter(num => num % 2 !== 0);
}


function sumarArray(array) {
    return array.reduce((total, num) => total + num, 0);
}


function multiplicarArray(array) {
    return array.reduce((total, num) => total * num, 1);
}