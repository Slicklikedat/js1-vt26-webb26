// LOOPAR
// En loop används när vi vill upprepa kod flera gånger.

// FOR-LOOPENS TRE DELAR:
// 1. let i = 0      -> startvärde
// 2. i < 4          -> villkor: loopen kör så länge detta är true
// 3. i++            -> öka i med 1 efter varje varv
for (let i = 0; i < 4; i++) {
    console.log(i)
}

// Om villkoret aldrig blir false kan man få en oändlig loop.
// Därför är det viktigt att loopen närmar sig sitt stoppvillkor.

const fruits = ["🍌 Banan", "🥝 Kiwi", "🍊 Apelsin", "🍎 Äpple"]

// Arrayer använder index, och index börjar på 0.
console.log(fruits[0])

// length visar hur många värden som finns i arrayen.
console.log(fruits.length)

console.log("-- Fruktsallad --")

// Här går vi igenom hela arrayen, från första till sista elementet.
// i börjar på 0 och fortsätter så länge i är mindre än arrayens längd.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])

    // Sista elementet finns på position length - 1,
    // eftersom index börjar på 0.
    if (i === fruits.length - 1) {
        console.log("-- Slut på listan! --")
    }
}

const students = [
    { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" },
    { id: 2, name: "Bob", age: 25, active: false, course: "HTML/CSS" },
    { id: 3, name: "Charlie", age: 22, active: true, course: "JavaScript" },
    { id: 4, name: "Diana", age: 24, active: false, course: "React" },
    { id: 5, name: "Elias", age: 26, active: false, course: "HTML/CSS" },
    { id: 6, name: "Fatima", age: 21, active: true, course: "JavaScript" },
    { id: 7, name: "Gabriel", age: 23, active: true, course: "React" },
    { id: 8, name: "Hanna", age: 22, active: false, course: "HTML/CSS" },
    { id: 9, name: "Isak", age: 27, active: true, course: "JavaScript" },
    { id: 10, name: "Julia", age: 24, active: true, course: "React" },
    { id: 11, name: "Kevin", age: 23, active: false, course: "HTML/CSS" },
    { id: 12, name: "Lina", age: 21, active: true, course: "JavaScript" },
    { id: 13, name: "Marcus", age: 25, active: true, course: "React" },
    { id: 14, name: "Nora", age: 22, active: true, course: "JavaScript" },
    { id: 15, name: "Oskar", age: 26, active: false, course: "HTML/CSS" },
    { id: 16, name: "Petra", age: 24, active: true, course: "React" },
    { id: 17, name: "Quentin", age: 23, active: true, course: "JavaScript" },
    { id: 18, name: "Rashid", age: 27, active: false, course: "HTML/CSS" },
    { id: 19, name: "Sara", age: 22, active: true, course: "React" },
    { id: 20, name: "Tom", age: 25, active: true, course: "JavaScript" },
]

console.log("Antal studenter:", students.length)
console.log("Första studenten:", students[19])

console.log("-- Studenter som studerar React --")
for (let i = 0; i < students.length; i++) {
    if (students[i].course === "React") {
        console.log(students[i].name, "Studerar React! ⚛")
    }
}

console.log("-- Studenter aktiva --")
for (let i = 0; i < students.length; i++) {
    if (!students[i].active) {
        console.log("Hoppa över studenten", students[i].name, "eftersom studenten inte är aktiv")
        continue
    }

    if (students[i].course === "React") {
        console.log("Hittade första aktiva studenten som studerar React:", students[i].name)
        break
    }
}


