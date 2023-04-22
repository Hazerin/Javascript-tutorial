// Tra due valori, ritorna il primo se questo è falsy, altrimenti ritorna il secondo. Trattare il caso in cui l'input sia un array da 2.

console.log("Tra due valori, ritorna il primo se questo è falsy, altrimenti ritorna il secondo.");
function filterOutFalsy(val1, val2) {
    if (val2 !== undefined) {
        return val1 ? val2 : val1;
    }
    else {
        return val1[0] ? val1[1] : val1[0];
    }
}
console.log(filterOutFalsy([true, "cat"]));

// Dato un array, ne ritorno la lunghezza

console.log("Dato un array, ne ritorno la lunghezza");
function arrLenght(array) {
    return array.length;
    // non esce automaticamente il suggerimento per il metodo length in quanto non è detto che sia un array il dato in ingresso, visto che JS non controlla i tipi in ingresso di una funzione!
}
console.log(arrLenght([1, 2, 4]));

// Ritorna l'ultimo elemento in un array
console.log("Ritorna l'ultimo elemento in un array");
function lastElem(arr) {
    return arr[arr.length -1];
}
console.log(lastElem([null, 5, false, "miao"]));

// Calcola la somma di un array
console.log("Calcola la somma di un array");
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(arrSum([10, 20, 5, 8]));

// Somma tutti i numeri naturali da 1 fino a quello fornito in input.

console.log("Somma tutti i numeri naturali da 1 fino a quello fornito in input.");
function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(progressiveSum(4));

// Dato un tempo in secondi, convertirlo in minuti e secondi.

console.log("Dato un tempo in secondi, convertirlo in minuti e secondi.");
function calcTime(sec) {
    let arr = [0, 0]; // potevo usare anche delle normali variabili invece di un array
    arr[0] = Math.floor(sec / 60);
    arr[1] = sec % 60;
    return arr[0].toString() + ":" + arr[1];
    // metodo che converte altri tipi di dati in stringhe
}
console.log(calcTime(350));

// Trova il numero più grande di un array in input

console.log("Trova il numero più grande di un array in input")
function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getMax([12, 10, -20, 51, 23]));

// Inverti la stringa in input

console.log("Inverti la stringa in input");
function reverseString(str) {
    let revstr = "";
    for (let i = 0; i < str.length; i++) {
        revstr = str[i] + revstr;
    }
    // return revstr;
    return str.split("").reverse().join("");
    // modo alternativo per fare tutto senza il ciclo for. Converte la stringa in un array, poi usa il
    // metodo reverse per invertire l'array, poi il metodo join per ritrasformare l'array in una stringa.
}
console.log(reverseString("Hazerin è un programmatore"));

// Dato un array, ritorna lo stesso array riempito di zeri

console.log("Dato un array, ritorna lo stesso array riempito di zeri");
function convertToZeros(arr){
    /* for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0;
    }
    return arr; */ // Metodo 1
    
    /* return new Array(arr.length).fill(0); */ // Metodo 2

    /* return arr.map(elem => elem = 0); */ // Metodo 3

    return arr.map(() => {
        return 0;
    })      
    // Variante del metodo 3. il return se si aprono le graffe dev' essere esplicito. Visto che non sto facendo
    // riferimento all'elemento, posso semplicemente identificarlo con delle parentesi vuote.

}
console.log(convertToZeros([1, 2, 3, 4, 5, 6, 7]));

// Dato un array di frutti, rimuovi le mele.

console.log("Dato un array di frutti, rimuovi le mele.");
function removeApples(arr) {
    return arr.filter(elem => elem !== "Apple");
}
console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));

// Dato un array, ritorna solo i valori truthy.

console.log("Dato un array, ritorna solo i valori truthy.")
function filterOutFalsyArr(arr) {
    // return arr.filter(elem => elem);
    return arr.filter(elem => !!elem === true)
    // alternativa che casta l'elemento in un booleano.
}
console.log(filterOutFalsyArr(["", [], 0, null, undefined, "0"]));

// Dato un array di truty e falsy, convertili nei rispettivi booleani.

console.log("Dato un array di truty e falsy, convertili nei rispettivi booleani.")
function convertToBoolean(arr) {
    return arr.map(elem => !!elem ? elem = true : elem = false);
}
console.log(convertToBoolean([500, 0, "Haze", "", []]));