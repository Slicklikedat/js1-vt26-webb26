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

const fruits = ["🍌 Banan", "🥝 Kiwi", "🍊 Apelsin", "🍎 Äpple", "🍎 Äpple", "🍎 Äpple"]

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
