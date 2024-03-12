// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const sceltaUtente = prompt("Inserisci 1 per pari o 2 per dispari")
const sceltaUtenteNumero = parseInt(prompt("inserisci un numero da 1 a 5"))


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandomPc() {

   return Math.floor(Math.random() * 5 + 1)
}

// Sommiamo i due numeri
const sceltaPC = numeroRandomPc()

const somma = sceltaUtenteNumero + sceltaPC

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function eSommaUguale() {
    if (somma % 2 === 0) {
        return true
    } else {
        return false
    }

}
console.log("hai scelto " + sceltaUtenteNumero)
console.log("il pc ha scelto " + sceltaPC)
console.log("la somma è " + somma)

// Dichiariamo chi ha vinto.
if (sceltaUtente == "1" && somma % 2 === 0 || sceltaUtente == "2" && somma % 2 === 1 ) {
    console.log("quindi hai vinto")
} else {
    console.log("quindi hai perso")
}
