/* 
    Snack 1
        L’utente inserisce due numeri in successione, con due prompt.
        Il software stampa il maggiore.
*/

/* Definisco le mie variabili */

//Recupero i dati di cui ho bisogno
/* const firstNumber = Number(prompt('Inserisci il primo numero:'));
const secondNumber = Number(prompt('Inserisci il secondo numero:'));
const bodyElement = document.querySelector('body');
const resultElement = document.createElement('div');
const firstNumberElement = document.createElement('div');
const secondNumberElement = document.createElement('div');


//Aggiungo gli elementi della DOM in pagina
resultElement.setAttribute('id', 'result');
bodyElement.append(resultElement);

resultElement.append(firstNumberElement);
resultElement.append(secondNumberElement);

firstNumberElement.append('Il primo numero è: ' + firstNumber);
secondNumberElement.append('Il secondo numero è: ' + secondNumber);

console.log(firstNumber, secondNumber);

//controllo e stampo il numero più grande
if (firstNumber > secondNumber) {
    console.log(firstNumber + ' è più grande!');
    resultElement.append(firstNumber + ' è più grande!');
} else if (secondNumber > firstNumber) {
    console.log(secondNumber + ' è più grande!');
    resultElement.append(secondNumber + ' è più grande!');
} else if (firstNumber === secondNumber) {
    console.log('I due numeri inseriti sono uguali!');
    resultElement.append('I due numeri inseriti sono uguali!');
} else {
    console.log('Dati inseriti non corretti!');
    resultElement.append('Dati inseriti non corretti!');
}
 */
/* 
    Da fare con WHILE tutti I prossimi snacks
    Snack 1
        L’utente inserisce due numeri in successione, con due prompt.
        Il software stampa il maggiore.
*/


let i = 0;
let max = 0;

while (i < 2) {
    console.log(i);
    const input = Number(prompt(`Inserisci il numero ${i+1}:`));
    console.log(input);

    if(!isNaN(input)) {

        console.log(i === 0 || input > max);
        if (i === 0 || input > max){
            max = input;
        }

        i++;
    } else {
        console.log('Valore non inserito correttamente');
    }
}
console.log(max + " e' il numero piu' grande inserito");

