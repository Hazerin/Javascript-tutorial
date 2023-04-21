// Somma due numeri

console.log("Somma due numeri");
function sum (num1, num2) {
    return num1 + num2;
}
console.log(sum(-3, -5));

// Converti ore in secondi

console.log("Converti ore in secondi");
function hoursToSeconds(hours) {
    return hours * 3600;
}
console.log(hoursToSeconds(24));

// Calcola il perimetro di un rettangolo

console.log("Calcola il perimetro di un rettangolo");
function rectanglePerimeter(lenght, width) {
    return 2 * (lenght + width);
}
console.log(rectanglePerimeter(5, 8));

// Calcola l'area di un triangolo

console.log("Calcola l'area di un triangolo");
function triangleArea (base, height) {
    return (base * height) / 2;
}
console.log(triangleArea(5, 4));

// Estendi una stringa aggiungendo "Frontend" al termine di essa

console.log("Estendi una stringa aggiungendo al termine di essa")
function stringExtender(string) {
    return string + "Frontend";
}
console.log(stringExtender("Banana"));

// Somma una stringa e un numero e ritorna un risultato che è la somma numerica dei due

console.log("Converti una stringa numerica e sommala a un numero evitando quindi la concatenazione di stringhe in output")
function stringSum(string) {
    return 4 + (+string); // l'operatore unario + converte una stringa in un numero, evitando cosi la concatenazione di stringhe che avviene anche quando uno solo dei parametri è una stringa.
}
console.log(stringSum("4"));

// La somma dei due numeri è più grande di 100?

console.log("La somma dei due numeri è più grande di 100?")
function greaterThan100(num1, num2) {
    return num1 + num2 > 100;
}
console.log(greaterThan100(50, 49));

// Minore od uguale a zero?

console.log("Minore od uguale a zero?");
function lessEqualToZero(num) {
    return num <= 0;
}
console.log(lessEqualToZero(0));

// Qual'è il booleano opposto?

console.log("Qual'è il booleano opposto?");
function oppositeBoolean(bool) {
    return !bool;
}
console.log(oppositeBoolean(false));

// Dato un qualsiasi input, ritorna vero se è diverso dal NUMERO 0 (il triplo uguale è fondamentale qui)

console.log("Dato un qualsiasi input, ritorna vero se è diverso dal NUMERO 0");
function isNot0(elem) {
    return elem !== 0;
}
console.log(isNot0("0"))

// Calcolare il resto di una divisione tra due numeri

console.log("Calcolare il resto di una divisione tra due numeri.")
function calcRemainder(num1, num2) {
    return num1 % num2;
}
console.log(calcRemainder(5, 4));

// Il numero è dispari?

console.log("Il numero è dispari?")
function isOdd(num) {
    return num % 2 === 1;
}
console.log(isOdd(11));

// Ritorna 1 se un numero è pari, altrimenti ritorna -1

console.log("Ritorna 1 se un numero è pari, altrimenti ritorna -1")
function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1;
}
console.log(booleanInteger(345));

// Controlla se l'utente è sia loggato e abbonato

console.log("Controlla se l'utente è sia loggato e abbonato")
function isLoggedAndSubscrived(logged, subscrived) {
    return logged === "LOGGED_IN" && subscrived === "SUBSCRIVED";
}
console.log(isLoggedAndSubscrived("LOGGED_IN", "SUBSCRIVED"));

// Controlla se l'utente è loggato o abbonato

console.log("Controlla se l'utente è loggato o abbonato")
function isLoggedOrSubscrived(logged, subscrived) {
    return logged === "LOGGED_IN" || subscrived === "SUBSCRIVED";
}
console.log(isLoggedOrSubscrived("LOGGED_OUT", "SUBSCRIVED"));