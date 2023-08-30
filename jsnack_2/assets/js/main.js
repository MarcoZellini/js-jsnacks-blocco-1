/* 
    Snack 2:
        L’utente inserisce due parole in successione, con due prompt.
        Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/* Definisco le mie variabili */
/* 
//Recupero i dati di cui ho bisogno
const firstString = prompt('Inserisci la prima parola:');
const secondString = prompt('Inserisci la seconda parola:');
const bodyElement = document.querySelector('body');
const resultElement = document.createElement('div');
const firstStringElement = document.createElement('div');
const secondStringElement = document.createElement('div');
//Inserisco gli elementi nella DOM
bodyElement.append(resultElement);
resultElement.setAttribute('id', 'result');

resultElement.append(firstStringElement);
resultElement.append(secondStringElement);

firstStringElement.append('Stringa n.1: ' + firstString);
secondStringElement.append('Stringa n.2: ' + secondString);

//Controllo se le stringhe sono state inserite correttamente
if (firstString != "" && secondString != "") {
    //Controllo le stringhe e le stampo dalla più corta alla più lunga 
    if (firstString.length <= secondString.length) {
        console.log(firstString, secondString);
        resultElement.append(`Risultato: ${firstString} ${secondString}`);
    } else if (secondString.length < firstString.length) {
        console.log(secondString, firstString);
        resultElement.append(`Risultato: ${secondString} ${firstString}`);
    }

} else {
    resultElement.append(`Dati non inseriti correttamente!`);
} */


/* 
    (con while) 
    Snack 2:
        L’utente inserisce due parole in successione, con due prompt.
        Il software stampa prima la parola più corta, poi la parola più lunga.
*/


let i = 0;
const stringList = [];

while (i < 2) {
    const input = prompt(`Inserisci la parola ${i + 1}`);
    console.log(`Stringa ${i + 1}: ${input}`);

    if (input !== '') {
        stringList.push(input);
        i++;
    } else {
        console.log('Valore non inserito correttamente!');
    }
}

if (stringList[0].length <= stringList[1].length) {
    console.log(`${stringList[0]} - ${stringList[1]}`);
} else {
    console.log(`${stringList[1]} - ${stringList[0]}`);
}