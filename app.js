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

/* const str = "Frontend Simplified"

for (let i = 0; i < str.length; i++) {
    console.log(str[i])
} */

/* function Welcome (name, lastName) {
    console.log(`Welcome to Mugenri, ${name} ${lastName}`)
}
Welcome("Hazerin", "Haze")

function fn() {
    return "my return"
    console.log(`my function`)
}
console.log(fn())

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}
console.log(sumOfTwoNumbers(10, 15))

function CelsiusToFahrenheit (num) {
    return num * 1.8 + 32
}
console.log(CelsiusToFahrenheit(10))

const CelsiusToFahrenheit2 = (num) => {
    return num * 1.8 + 32
}
console.log(CelsiusToFahrenheit2(0)) */

/* let arr = [20, 30, 40, 50, 100, "hello"]

console.log(arr[0])
console.log(arr[arr.length-1])

arr.push(200)

console.log(arr) */

/* let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true
    }
})
console.log(newArr) */

/* // metodo veloce. Se l'argomento è uno solo non servono le parentesi intorno ad esso (element in questo caso) e si può evitare di scrivere l'if. 
let newArr = arr.filter(element => {
    return element < 50
})
 */

// Metodo ancora piu veloce. Se vi e solamente il return nella funzione, e sufficiente scrivere quello che si vuole ritornare dopo la freccia.
/* let newArr = arr.filter(element => element < 50) */

// Esercizo
/* const grades = ["A+", "A", "FAIL"]

let goodGrades = grades.filter(element => element !== "FAIL")
console.log(goodGrades) */

/* let goodGrades2 = []

for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== "FAIL") {
        goodGrades2.push(grades[i])
    }
}
console.log(goodGrades2) */

/* let arr = [1, 4, 9 , 16]

arr.map((elem) => {
    console.log(elem)
})

let new_arr = arr.map(() => "miao") // Se non c'è bisogno di confronto va bene la parentesi vuota
console.log(new_arr) */

// Devo convertire questi dollari in centesimi, sia col metodo corto che con quello lungo
/* let dollars = [1, 5, 10, 3]
let cents = dollars.map((element) => {
    return element * 100
})
console.log(cents)

let cents2 = dollars.map(elem => elem * 100)
console.log(cents2)

let cents3 = []
for (let i = 0; i < dollars.length; i++) {
    cents3.push(dollars[i] * 100)
}
console.log(cents3) */

// Oggetti

/* let users = [{
    username: "Hazerin",
    email: "Haze@example.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Hazered#4678",
    lessonsCompleted: [0,1],
} , {
    username: "Mitri",
    email: "Mitri@example.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0,1,2],
} , {
    username: "Zen",
    email: "Zen@example.com",
    password: "test123",
    subscriptionStatus: "Basic",
    discordId: "Zen#0001",
    lessonsCompleted: [0,1],
}]

function login(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            console.log(users[i])
            if (users[i].password === password) {
                console.log("log the user in - the details are correct")
            }
            else {
                console.log("Password is incorrect - try again")
            }
            return // evita di loopare tutti gli utenti rimanenti una volta trovato quello corretto
        }
    }
    console.log ("could not find an eamil that matches")
}

login("Haze@example.com", "test123")

console.log(users[0].username[0])
console.log(users[0].subscriptionStatus)
console.log(users[1].lessonsCompleted.map(elem => elem * 2))
console.log(users[0])

function register (user) {
    users.push(user)
}

register ({
    username: "Miao",
    email: "Miao@gmail.com",
    password: "gattomiao",
    subscriptionStatus: "VIP",
    discordId: "cat#1111",
    lessonsCompleted: [0,1,2]
})
console.log(users) */

// DOM
// Primo modo per accedere a un elemento
/* console.log(document.querySelector("#title"))
// Secondo modo per accedere un elemento
console.log(document.getElementById("title")) // Non c'è bisogno di mettere il cancelletto. Funziona solo se l'elemento è un ID.

// Cambiare HTML

document.querySelector("#title").innerHTML = "Gattomiao" // modifica l'interno di questo elemento, io vi avevo scritto Hazerin, ma cosi lo sostituisce con "Gattomiao".
document.querySelector("#title").innerHTML += " Hazerin" // Aggiunge Hazerin.

// Cambiare CSS

document.querySelector("#title").style.fontSize = "50px"

function changeTitleColor () {
    document.querySelector("#title").style.color = "green"
} */

function toggleDarkMode () {
    document.querySelector("body").classList.toggle("dark-theme")
}