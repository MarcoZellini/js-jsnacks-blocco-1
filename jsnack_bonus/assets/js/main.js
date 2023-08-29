/* 
    Snack Bonus:
        Crea un array vuoto.
        Chiedi per 6 volte all’utente di inserire un numero,
        se è dispari inseriscilo nell’array.
*/

/* Definisco le mie variabili */

//Recupero i dati di cui ho bisogno
const numbers = [];
const oddNumbers = [];
const bodyElement = document.querySelector('body');
const resultElement = document.createElement('div');
const numbersElement = document.createElement('div');
const oddNumbersElement = document.createElement('div');
const numberUlElement = document.createElement('ul');
const oddNumberUlElement = document.createElement('ul');

for (let i = 0; i < 6; i++) {
    const input = Number(prompt(`Inserisci il numero ${i + 1}:`));
    
    if (!isNaN(input)) {
        numbers.push(input);

        if (input % 2 === 1) {
            oddNumbers.push(input);
        }
    }
}

console.log(numbers, oddNumbers);


//Inserisco gli elementi nella DOM
bodyElement.append(resultElement);

resultElement.append("I numeri inseriti sono: ");
resultElement.append(numbersElement);

resultElement.append("I numeri dispari inseriti sono: ");
resultElement.append(oddNumbersElement);

numbersElement.append(numberUlElement);
oddNumbersElement.append(oddNumberUlElement);

//Stampo in pagina tutti i numeri inseriti
for (let i = 0; i < numbers.length; i++) {
    const liElement = document.createElement('li');
    numberUlElement.append(liElement);
    liElement.append(numbers[i]);
}

if (oddNumbers.length > 0) {

    //Stampo in pagina tutti i numeri dispari inseriti
    for (let i = 0; i < oddNumbers.length; i++) {

        const liElement = document.createElement('li');
        oddNumberUlElement.append(liElement);
        liElement.append(oddNumbers[i]);

    }

} else {
    const liElement = document.createElement('li');
    oddNumberUlElement.append(liElement);
    liElement.append('Non sono stati inseriti numeri dispari!');
}