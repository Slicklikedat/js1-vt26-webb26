for (let i = 0; i < 4; i++) {
    console.log(i)
}

// Infinite loop 🔁 🛑

const fruits = ["🍌 banan", "🥝 Kiwi", "🍊 Apelsin", "🍎 Äpple", "🍎 Äpple", "🍎 Äpple"]

console.log(fruits[0])
console.log(fruits.length)

console.log("-- Fruktsallad --")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])

    if (i === fruits.length - 1) {
        console.log("-- Slut på listan! --")
    }
}