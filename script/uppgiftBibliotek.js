const books = [
    { title: "Dune", author: "Frank Herbert", available: true, genre: "Sci-Fi" },
    { title: "The Hobbit 2", author: "J.R.R. Tolkien", available: false, genre: "Fantasy" },
    { title: "1984", author: "George Orwell", available: false, genre: "Dystopi" },
    { title: "Foundation", author: "Isaac Asimov", available: true, genre: "Sci-Fi" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", available: true, genre: "Fantasy" },
    { title: "Brave New World", author: "Aldous Huxley", available: false, genre: "Dystopi" },
    { title: "Neuromancer", author: "William Gibson", available: true, genre: "Sci-Fi" }
]

for (let i = 0; i < books.length; i++) {
    let book = books[i]

    if (!book.available) {
        continue;
    }

    if (book.genre === "Fantasy") {
        console.log("📕 Fantasybok hittad: " + book.title)

        console.log("-- Alla egenskaper --")
        for (let key in book) {

            console.log(key + ": " + book[key])
        }
        console.log("-- Slut på egenskaper --")

        break
    } else {
        console.log("Tillgänglig bok: ", book.title)
    }

}