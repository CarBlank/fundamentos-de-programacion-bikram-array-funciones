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

function repetirString (string , a) {
    let stringRepeticion = ''
    
    for ( let i = 0 ; i < a ; i++ ) {
        stringRepeticion += string
    }

    return stringRepeticion
}


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

function pintarArray () {

}


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

function esPar (a) {
    let sumaPares = 0

    for (let i=0 ; i<10 ; i++) {
        if (i % 2 === 0 ) 
        sumaPares = sumaPares + i
    return true
    } else {
        return false
    }

    
}


