const filmLista = ["superman", "batman", "spiderman"]

console.log(filmLista)

filmLista.push("ironman")

console.log(filmLista, filmLista.length)

const musikLista = ["imagine", "hello", "thriller", "one", "royals", "bad"]

console.log(musikLista)

musikLista.pop()

console.log(musikLista, musikLista.length)

const cafeKö = ["A", "B", "C", "D", "E", "F"]

console.log(cafeKö)

const förstaKunden = cafeKö.shift()
  
console.log(förstaKunden, "togs bort")

console.log("nya kön är:", cafeKö)

const bokhyllaBöcker = ["The Hobbit", "The Lord of the Rings", "Harry Potter", "1984"]

console.log(bokhyllaBöcker)

const utvaldaBöcker = [bokhyllaBöcker.slice(1,2), bokhyllaBöcker.slice(3,4)]

console.log(utvaldaBöcker)
/*
const elevLista = ["A", "B", "C", "D", "E", "F"]

console.log (elevLista)

if (elevLista.indexOf("C"))
  const elevIndivid = ("C")
else
  console.log("Eleven finns inte")

*/