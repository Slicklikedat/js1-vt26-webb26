//Scope
//Block-scope

/* 
var = INTE block-scope

const, let = block-scope
*/

const scope = "Hej, jag är en global variabel!"

let scopeGlobalLet = "Hej, jag är en global let-variabel"

var varScope = "Hej, jag är en global var-variabel 👋"

{
    console.log(scope)

    console.log(varScope)

    const blockScope = "Hej, jag är block-scopad!"
    console.log(blockScope)

    var varBlockScope = "🔥 Hej, jag är en block-scopad var-variabel 👋"
}

{
    const blockScope = "Hej, jag är block-scopad!"
    console.log(blockScope)
}

varBlockScope = null

console.log(varBlockScope)

console.log(scopeGlobalLet)

scopeGlobalLet = "🔥🌊 Hej, jag är en global let-variabel"

console.log(scopeGlobalLet)



