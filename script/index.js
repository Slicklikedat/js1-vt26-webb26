/* Vad är datatyper och variabler? */

//? Datatyper
// string - text
// number - 123
// boolean - true/false
// undefined - inget värde
// null - inget värde
// object - {key: value, key: value}
//----------------------------------
// bigint - Väldigt stora nummer
// symbol - Ingnorera just nu
//----------------------------------

// array - [1, 2, 3, 4, 5] = object
// functions

console.log("-- Datatyper --")
console.log("✅ johan =", typeof 'johan')
console.log("✅", 123, "=", typeof 123)
console.log("✅", true, "=", typeof true)
console.log("✅", undefined, "=", typeof undefined)
console.log("✅", null, "=", typeof null)
console.log("✅", [], "array", "=", typeof [])
console.log("✅", {}, "=", typeof {})

//? Varibler
// var (gammal,  används inte idag)
// ----- Moderna varibler -----
// let
// const

//varibel let = får skriva över data
let name = "🔥 Johan"
console.log("-- Variabel let --")
console.log(name)

name = "🌊 Stina"

console.log(name)

//varibel const = får INTE skriva över data

const stad = "🌆 Malmö"
console.log("-- Variabel const --")
console.log(stad)

// stad = "🌃 Göteborg"

// console.log(stad)

//! Uncaught TypeError: Assignment to constant variable.

//? Array
const fruits = [
    "🍍 ananas",
    "🍊 aplesin",
    "🍎 äpple",
    "🥝 kiwi"
]

const numbersArray = [1, 2, 3, 4, 5]

const mixedArray = ["string", true, 1, null]

console.log("-- Array --")
console.log(fruits)
console.log("Antal frukter = ", fruits.length)

//? Object
// Obejects har nyckel/värdepar
const teacher = {
    user: "johan",
    age: 44,
    course: "Javascript 1",
    couserActive: true
}

console.log("-- Object --")
console.log(teacher)

const teachers = [
    {
        user: "johan",
        age: 44,
        course: "Javascript 1",
        couserActive: true
    },
    {
        user: "stina",
        age: 33,
        course: "html/css",
        couserActive: false
    }
]

console.log("-- Objects in Array --")
console.log(teachers)