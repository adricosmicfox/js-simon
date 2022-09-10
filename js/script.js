
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



let randomNumbers = [];

for (let i = 0; i <= 4; i++) {
    randomNumbers[i] = Math.floor(Math.random() * 50);
}
document.getElementById("boxNumbers").innerHTML = randomNumbers;

console.log(randomNumbers);

setTimeout(hideNumbers, 3000);

function hideNumbers() {

    document.getElementById("boxNumbers").innerHTML = " ";
}

setTimeout(chiediNumeri, 3500);

function chiediNumeri() {
    let arrayUtente = [];
    for (let i = 0; i <= 4; i++) {
        let numeriUtente = parseInt(prompt('Inserisci i numeri che ricordi'));
        console.log(numeriUtente);
        arrayUtente[i] = (numeriUtente);
    }
    console.log(arrayUtente);

    let stato = true;

    for (let i = 0; i <= 4 && stato == true; i++) {

        if (randomNumbers[i] === arrayUtente[i]) {
            stato = true;
        }
        else {
            stato = false;
        }
    }
    if (stato == true) {
        alert("Hai vinto");
    }

    else {
        alert("hai perso");
    }
}