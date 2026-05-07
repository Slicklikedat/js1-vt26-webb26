// Funktioner

//Varför ska vi använda funktioner?

console.log("Jag heter: " + "Johan")
console.log("Jag heter: " + "Elin")
console.log("Jag heter: " + "Ali")
console.log("Jag heter: " + "Lisa")

// DRY: Don´t repeat yourself

//Parametrar = ()

function hello(name, age) {
  console.log("🔥 funktion 🔥")
  console.log("Jag heter:", name, "och jag är:", age, "år gammal")
}

//Argument = (name)
hello("Johan", 45)
hello("Elin", 63)
hello("Ali", 25)
hello("Lisa", 32)

//Arrow function
const arrowFunction = (name, age) => {
  console.log("🏹 Arrow function 🏹")
  console.log("Jag heter:", name, "och jag är:", age, "år gammal")
}

arrowFunction("Gustav", 71)

const arrowFunctionShort = name => console.log("Jag heter:", name)

console.log("Arrow short 🏹")
arrowFunctionShort("Sabina")




function testFunction(parameter) {
  if (!parameter) {

  } else {

  }
}

testFunction(parameter)
testFunction(parameter)
testFunction(parameter)