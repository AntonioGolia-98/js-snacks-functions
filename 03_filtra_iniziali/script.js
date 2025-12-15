/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let letteraInserita = prompt("inserire una lettera");
let maiuscola = letteraInserita.toUpperCase();
console.log(`hai inserito ${maiuscola}`);

// Dichiara la funzione qui.

function getLettera (names){
    let nomiRichiesti = [];
    for(let i = 0; i < names.length; i++){
        let nomeCorrente = names[i];
        if (nomeCorrente[0] === maiuscola){
           nomiRichiesti.push(nomeCorrente);
        }else {
            console.log("no");   
        }
    } 
    return nomiRichiesti;
}



// Invoca la funzione qui e stampa il risultato in console

console.log(getLettera(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]