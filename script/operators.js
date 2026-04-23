/* OPERATORER */

// Några vanliga operatorer i JavaScript:
// == === < > <= >= + - * / ! || && ?:

// JÄMFÖRELSEOPERATORER

// == jämför bara värdet.
// JavaScript försöker då ibland konvertera typer automatiskt.
console.log("1 == '1':", 1 == "1")

// === jämför både värde och datatyp.
// Därför är den oftast säkrare att använda.
console.log("1 === '1':", 1 === "1")

console.log("true == 1:", true == 1)
console.log("false === 0:", false === 0)

console.log("'string' == 'string':", "string" == "string")
console.log("'string' === 'string':", "string" === "string")

// STÖRRE ÄN / MINDRE ÄN
console.log("1 < 2:", 1 < 2)
console.log("1 > 2:", 1 > 2)

console.log("3 < 3:", 3 < 3)
console.log("3 <= 3:", 3 <= 3)

// Strängar kan också jämföras alfabetiskt.
console.log("'apple' < 'banana':", "apple" < "banana")
console.log("'apple' <= 'apple':", "apple" <= "apple")

// RÄKNEOPERATORER

// + används både för addition och för att sätta ihop strängar.
console.log("1 + 1 =", 1 + 1) // addition
console.log("'1' + 1 =", "1" + 1) // blir strängen "11"
console.log("'johan ' + 'kremer' =", "johan " + "kremer")
console.log("'stina' + '1' =", "stina" + "1")

// - försöker göra matematisk subtraktion.
console.log("2 - 1 =", 2 - 1)
console.log("'2' - 1 =", "2" - 1) // strängen "2" omvandlas till talet 2

// Om JavaScript inte kan tolka värdet som ett tal blir resultatet NaN.
// NaN betyder "Not a Number".
console.log("'stina' - '1' =", "stina" - "1")
