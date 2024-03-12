//  chiedere all'utente una parola
// const parolaUtente = "ciao"
const parolaUtente = isPalindrome(prompt("inserisci una parola"))
console.log(parolaUtente)


//  creare una funzione per capire se la parola è palindroma
function isPalindrome(parolaUtente) {
    //  dividere la parola in lettere 
    const carattereSingolo = parolaUtente.split('')
    //  array vuoto per memorizzare le lettere
    const parolaUtenteContrario = []
    // ciclo per mettere ogni lettera nell'array 
    for (let i = carattereSingolo.length - 1; i >= 0; i--) {
        parolaUtenteContrario.push(carattereSingolo[i])
    }

    return parolaUtente === parolaUtenteContrario.join('')

}






