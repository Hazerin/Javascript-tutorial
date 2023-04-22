// Data una valutazione, mostra un asterisco per ogni voto completo e un punto per ogni mezzo voto.

console.log("Data una valutazione, mostra un asterisco per ogni voto completo e un punto per ogni mezzo voto.")
function showRating(val) {
    let rating = "";
    let star = Math.floor(val / 1);
    for (let i = 1; i <= star; i++) {
        if (i === star) {
            rating += "*"
        }
        else {
            rating += "* ";
        }
    }
    if (val % 1 !== 0) { /* Alternativa: !Number.isInteger(val) */
        rating += " .";
    }
    return rating;
}
console.log(showRating(2.5));

// Dato un array di numeri, riordinali dal più basso al più alto

console.log("Dato un array di numeri, riordinali dal più basso al più alto");
function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b);
    // il metodo sort ordina alfabeticamente.
    // lo stesso metodo con la funzione di callback definita in tale modo ordina numericamente. facendo b - a
    // invece ordina al contrario (a, b) => b - a;
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

// Dato un array di oggetti in input, riordina i preddi dal più alto al più basso.

console.log("Dato un array di oggetti in input, riordina i preddi dal più alto al più basso.")
function sortHighToLow(obj) {
    return obj.sort((a, b) => a.price - b.price);
}

items = [
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
];

console.log(sortHighToLow(items));

/* 
Guarda su YT:

"The Async Await Episode I Promised"
- Fireship

"Async Await JavaScript ES7"
- Techsith 

"Async Crash Course - Callbacks, promises, Async Await"
- Traversy Media
*/

// Trova tutti i post di un singolo utente (per ID) richiamando questa API: https://jsonplaceholder.typicode.com/posts

// Una funzione di tipo async permette di usare la parola chiave "await" che permette di aspettare
// che sia completata tutta la "promessa" prima di proseguire.

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts"); // recupera l'API e aspetta il suo completamento
    const result = await promise.json();                                       // converte in JSON in modo che JS possa leggere. Anche qui vi è da aspettare il completamento.
    const posts = result.filter(element => element.userId === userId);

    console.log(posts);
}
postsByUser(4);

// Trova i primi 6 TODO incompleti dalla seguente API: https://jsonplaceholder.typicode.com/todos

async function firstSixIncomplete() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();
    let counter = 0;
    const SixTODOS =  result.filter(element => !element.completed).slice(0, 6);
    console.log(SixTODOS);
}
firstSixIncomplete();