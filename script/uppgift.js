console.log("-- Första loppen ---")
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("-- Andra loppen ---")
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

console.log("-- Tredje loppen ---")
for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

console.log("-- Fyra olika * loopar ---")

let stars = ""

for (let i = 1; i <= 5; i++) {
    stars += "*"
    console.log(stars)
}

console.log("-- Med repeat --")
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

console.log("-- Med dubbelloop --")
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

console.log("-- Ytterligare dubbelloop --")
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}