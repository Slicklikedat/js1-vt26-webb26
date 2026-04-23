
const age = 18

// if (age > 18) {
//     console.log("✅ Du är myndig!")
// }

// if (age < 18) {
//     console.log("🛑 Du är inte myndig!")
// }

if (age >= 18) {
    console.log("✅ Du är myndig!")
} else {
    console.log("🛑 Du är inte myndig!")
}

const temperature = 8

if (temperature < 10) {
    console.log("🥶 Det är kallt")
} else {
    console.log("🥵 Det är varmt")
}

// && OCH || ELLER

const hasPassword = true
const isAdmin = true
const isSuperman = true

if (hasPassword && isAdmin && isSuperman && age >= 18) {
    console.log("🔓✅ Du får tillgång till systemet!")
} else {
    console.log("🔒⛔️ Du får inte tillgång till systemet!")
}

const isMember = false
const hasCoupon = true

if ((isMember || hasCoupon) && isSuperman) {
    console.log("🤑 You get the discount!")
} else {
    console.log("🛑 You don't get the discount!")
}

/*
----------------------------------------------------------------
? Falsy
----------------------------------------------------------------
Value	        Type	    Description
null	        Null	    The keyword null — the absence of any value.
undefined	    Undefined	undefined — the primitive value.
false	        Boolean	    The keyword false.
NaN	            Number	    Not a Number (represents an invalid or undefined result from a calculation.)
0	            Number	    The Number zero, also including 0.0, 0x0, etc.
-0	            Number	    The Number negative zero, also including -0.0, -0x0, etc.
0n	            BigInt	    The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
""	            String	    Empty string value, also including '' and ``.
document.all	Object	    The only falsy object in JavaScript is the built-in document.all.

----------------------------------------------------------------
? Truthy
----------------------------------------------------------------
All values are truthy except false values.
*/

//Truthy & falsy examples

/* 
Program = ett komplett system med tydlig struktur, ofta större och mer självständigt.

Script = en mindre kodfil som körs för att göra något specifikt.
*/

if (NaN) {
    console.log("✅ Villkoret är Truthy")
} else {
    console.log("🛑 Meddelandet är Falsy")
}

//* ! Logical NOT

const isSpiderman = true

if (!isSpiderman) {
    console.log("🛑 Jag är inte spindelmannen!")

} else {
    console.log("✅ Jag är spindelmannen!")

}

