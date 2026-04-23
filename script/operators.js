/* Logiska operatorer */

// == === < > <= >= + - / * ! || && ?:

let number = 1

//Jämför bara värdet
console.log("1 == '1': ", 1 == "1")
//Jämför värdet OCH typen
console.log("1 === '1':", 1 === "1")

console.log("true == 1:", true == 1)
console.log("false === 0", false === 0)

console.log("string == string", "string" == "string")
console.log("string === string", "string" === "string")

// < > >= <=
console.log("1 < 2:", 1 < 2)
console.log("1 > 2:", 1 > 2)

console.log("3 < 3:", 3 < 3)
console.log("3 <= 3:", 3 <= 3)

console.log("string < string", "string" < "string")
console.log("string <= string", "string" <= "string")

// + - * /

// + addera concatenation
console.log("1 + 1 = ", 1 + 1) //Addera
console.log("'1' + 1 = ", "1" + 1) //Concatenation "11"
console.log("'johan' + 'kremer' = ", "johan " + "kremer") //"johan kremer"
console.log("'stina'+'1' = ", "stina" + "1")

// -
console.log("2 - 1 = ", 2 - 1)
console.log("'2' - 1 = ", "2" - 1)
console.log("'stina'-'1' = ", "stina" - "1") //NaN