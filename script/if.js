// IF-SATSER
// En if-sats låter oss köra olika kod beroende på om ett villkor är sant eller falskt.

const age = 18

// Här kontrollerar vi om personen är 18 år eller äldre.
// Om villkoret blir true körs koden i if-blocket.
// Annars körs koden i else-blocket.
if (age >= 18) {
    console.log("✅ Du är myndig!")
} else {
    console.log("🛑 Du är inte myndig!")
}

const temperature = 8

// Ett enkelt exempel med jämförelse.
// Är temperaturen mindre än 10?
if (temperature < 10) {
    console.log("🥶 Det är kallt")
} else {
    console.log("🥵 Det är varmt")
}

// LOGISKA OPERATORER
// && betyder OCH: alla villkor måste vara true.
// || betyder ELLER: det räcker att ett villkor är true.

const hasPassword = true
const isAdmin = true
const isSuperman = true

// För att få tillgång måste ALLT här vara sant.
if (hasPassword && isAdmin && isSuperman && age >= 18) {
    console.log("🔓✅ Du får tillgång till systemet!")
} else {
    console.log("🔒⛔️ Du får inte tillgång till systemet!")
}

const isMember = false
const hasCoupon = true

// Här räcker det att man antingen är medlem ELLER har kupong.
// Men dessutom måste man vara Superman.
if ((isMember || hasCoupon) && isSuperman) {
    console.log("🤑 Du får rabatten!")
} else {
    console.log("🛑 Du får inte rabatten!")
}

/*
Falsy-värden
-------------
Vissa värden räknas som false i villkor, trots att de inte bokstavligen är skrivna som false.

Exempel på falsy:
- false
- 0
- ""
- null
- undefined
- NaN

Nästan allt annat är truthy.
*/

// NaN är ett falsy-värde.
// Därför kommer else-blocket att köras här.
if (NaN) {
    console.log("✅ Villkoret är truthy")
} else {
    console.log("🛑 Villkoret är falsy")
}

// LOGISKT INTE
// ! vänder på ett boolean-värde:
// true blir false
// false blir true

const isSpiderman = true

// isSpiderman är true.
// !isSpiderman blir därför false.
if (!isSpiderman) {
    console.log("🛑 Jag är inte Spindelmannen!")
} else {
    console.log("✅ Jag är Spindelmannen!")
}
