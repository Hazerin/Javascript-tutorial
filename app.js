/* let isRaining = true
let temperature = 20
let planet = "Earth"

temperature += 2

console.log(temperature) */

/* let subscrived = false
let loggedIn = true

if (subscrived === true) {
    console.log("show the video")
}
else if (loggedIn === true) {
    console.log("Tell the user to upgrade their subscription")
}
else {
    (console.log("tell user to log into account"))
} */

/*

let cash = 60
let price = 40

// Notare l'uso della backslash per non far chiudere la stringa, ma si può evitare con le doppie virgolette di dover usare questa tecnica

if (cash > price ) {
    console.log(`you paid extra - here\'s your change: ${cash - price} dollars`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}
else {
    console.log("not enough money - you still owe ${price - cash} dollars")
} */

/* let cash = 50
let price = 40
let isStoreOpen = true */

// Non è necessario fare isStoreOpen === true, visto che isStoreOpen di per sè ritorna true. Per il false si può usare !isStoreOpen

/* if (cash >= price && isStoreOpen) {
    console.log("print the receipt")
} */

/* let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold outside') */

/* let cash = 100
let price = 50
let isStoreOpen = false

console.log(isStoreOpen && price <= cash ? "give receipt" : "do not give receipt") */

/* let count = 1

while (count <= 10) {
    console.log(count)
    count = count + 1
}

for (let i = 0; i <= 3; i++) {
    console.log(i)
} */

/* for (let i = 1; i <= 20; i++) {
    
    if (!(i % 3) && !(i % 5)) {
    console.log("Frontend Simplified")
    }
    else if (!(i % 3)) {
        console.log("Frontend")
    }
    else if (!(i % 5)) {
        console.log("Simplified")
    }
    else {
        console.log(i)
    }
}

// Soluzione alternativa

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
} */