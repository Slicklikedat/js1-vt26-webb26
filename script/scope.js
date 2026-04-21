// Scope handlar om var en variabel "finns" och kan användas.
// Här visar vi två vanliga typer:
// 1. global scope
// 2. block scope

console.log("=== 1. Global scope ===");

// Dessa variabler skapas utanför alla block och funktioner.
// Därför kan de användas nästan var som helst i filen.
const globalConst = "Jag är en global const";
let globalLet = "Jag är en global let";
var globalVar = "Jag är en global var";

console.log(globalConst);
console.log(globalLet);
console.log(globalVar);

// let kan ändras senare.
globalLet = "Jag har fått ett nytt värde";
console.log(globalLet);

console.log("=== 2. Block scope ===");

// Ett block skapas med { }.
// let och const stannar inne i blocket.
// var ignorerar däremot blocket och blir tillgänglig utanför.
{
    const blockConst = "Jag finns bara inne i blocket";
    let blockLet = "Jag finns också bara inne i blocket";
    var blockVar = "Jag skapades i blocket med var";

    // Inne i blocket kommer vi åt både globala och lokala variabler.
    console.log("Inne i blocket:");
    console.log(globalConst);
    console.log(blockConst);
    console.log(blockLet);
    console.log(blockVar);
}

console.log("Utanför blocket:");

// Den här fungerar eftersom var inte är block-scopad.
console.log(blockVar);

// Raderna nedan är utkommenterade med flit.
// Om vi kör dem får vi ReferenceError, eftersom variablerna
// bara finns inne i blocket där de skapades.
// console.log(blockConst);
// console.log(blockLet);

console.log("=== Sammanfattning ===");
console.log("globalConst, globalLet och globalVar kan användas i hela filen.");
console.log("blockConst och blockLet finns bara i sitt block.");
console.log("blockVar finns kvar utanför blocket eftersom den skapades med var.");
