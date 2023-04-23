// Recupera i dati dall'API

const emailRef = document.querySelector(".email");
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");

/* 
fetch("https://jsonplaceholder.typicode.com/users/1");
 */

// Si può accedere a questi dati tramite due metodi: Then oppure Async / Await.
// Metodo 1: Then

/* 
fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => { 
        // Scrivo nell'HTML interno del campo che ho contrassegnato come email, l'email recuperata dall'API
        emailRef.innerHTML = data.email;
    })
});
 */

// Metodo alternativo, ma preferibile
// La variabile l'ho inserita di mio pugno, in quanto cosi non vi è bisogno di rifare tutta
// la chiamata per aggiungere altre informazioni dalla stessa API.

/* 
const info = fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    return response.json();
});
info.then(data => {
    console.log(data);
    emailRef.innerHTML = data.email;
});
 */

// Metodo 2 Async/Await

/* 
async function main() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
}
main();
*/
/* 
function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        // Delay di 2000 ms --> 2 s
        setTimeout(() => {
            resolve("VIP");
            reject("Basic");
        }, 2000);
    });
}
*/

// Versione then, non serve il JSON visto che sta avvenendo tutto su questo file JavaScript senza backend / API in mezzo
// getSubscriptionStatus().then(response => console.log(response));

// Versione Async / Await
/* 
async function main() {
    console.log(await getSubscriptionStatus());
}

main();
*/

// Per qualche motivo sembra che non posso ritornare dati. Quindi devo fare l'assegnamento all'interno della funzione async stessa.
/*
async function main() {
    statusRef.innerHTML = await getSubscriptionStatus();
}

main();
*/

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP" || subscriptionStatus === "FREE") {
            subscriptionStatus === "VIP" ? resolve("Show video") : resolve("Show trailer");
        }
        else {
            reject("No video");
        }
    })
}

async function main(subscription) {
    try {
    console.log(await getVideo(subscription));
    videoRef.innerHTML = await getVideo(subscription);
    }
    catch (e) {
        console.log(e);
        videoRef.innerHTML = e;
    }
}

main("VIP");