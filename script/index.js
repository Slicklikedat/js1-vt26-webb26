/* Grundexempel: datatyper, variabler, arrayer och objekt */

// =========================
// 1. Datatyper
// =========================
// En datatyp beskriver vilken sorts värde vi jobbar med.
// Några vanliga datatyper i JavaScript:
// string    = text
// number    = tal
// boolean   = true eller false
// undefined = ett värde som inte har fått något innehåll än
// null      = ett medvetet "tomt" värde
// object    = samling av data, till exempel objekt och arrayer

console.log("-- Datatyper --")

// typeof används för att kontrollera vilken datatyp ett värde har.
console.log("'johan' =", typeof "johan")
console.log("123 =", typeof 123)
console.log("true =", typeof true)
console.log("undefined =", typeof undefined)

// null är ett specialfall i JavaScript.
// typeof null returnerar "object", även om null inte är ett vanligt objekt.
console.log("null =", typeof null)

// En array är tekniskt sett också en typ av object i JavaScript.
console.log("[] =", typeof [])
console.log("{} =", typeof {})

// =========================
// 2. Variabler
// =========================
// Variabler används för att spara data så att vi kan återanvända den senare.
// Moderna sätt att skapa variabler:
// let   = värdet får ändras senare
// const = värdet ska inte kunna ersättas med något annat

console.log("-- Variabler --")

// let passar när vi vet att värdet kan ändras.
let studentName = "Johan"
console.log("Startvärde i studentName:", studentName)

studentName = "Stina"
console.log("Nytt värde i studentName:", studentName)

// const passar när vi vill låsa själva variabeln till ett värde.
const city = "Malmö"
console.log("Värdet i city:", city)

// Om vi försöker skriva över en const får vi ett fel.
// Testa gärna att avkommentera raden nedan för att se felet i konsolen.
// city = "Göteborg"

// =========================
// 3. Arrayer
// =========================
// En array används när vi vill spara flera värden i en lista.

const fruits = ["ananas", "apelsin", "äpple", "kiwi"]
const numbers = [1, 2, 3, 4, 5]
const mixedValues = ["text", true, 1, null]

console.log("-- Arrayer --")
console.log("Frukter:", fruits)
console.log("Antal frukter:", fruits.length)
console.log("Första frukten:", fruits[0])
console.log("Sista talet:", numbers[numbers.length - 1])
console.log("Blandad array:", mixedValues)

// =========================
// 4. Objekt
// =========================
// Ett objekt använder nyckel/värde-par för att beskriva något mer tydligt.

const teacher = {
  user: "Johan",
  age: 44,
  course: "JavaScript 1",
  courseActive: true
}

console.log("-- Objekt --")
console.log("Hela objektet:", teacher)
console.log("Lärarens namn:", teacher.user)
console.log("Aktiv kurs:", teacher.course)

// Vi kan också lägga flera objekt i en array.
// Det är vanligt när vi vill spara flera personer, produkter eller poster.
const teachers = [
  {
    user: "Johan",
    age: 44,
    course: "JavaScript 1",
    courseActive: true
  },
  {
    user: "Stina",
    age: 33,
    course: "HTML/CSS",
    courseActive: false
  }
]

console.log("-- Objekt i en array --")
console.log("Alla lärare:", teachers)
console.log("Första läraren:", teachers[0].user)
console.log("Andra lärarens kurs:", teachers[1].course)


const students = [
  {
    user: "Johan",
    age: 44,
    courses: [
      "javascript 1",
      "html&css"
    ],
    courseActive: true
  },
  {
    user: "Stina",
    age: 33,
    courses: [
      "git",
      "javascipt 3"
    ],
    courseActive: false
  }
]

for (let i = 0; i < students.length; i++) {
  console.log(students[i].age)
}