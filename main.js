console.log('ciao');


// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// dichiaro var

var num, trovato;

// funzione num random

function numrandom(min,max){
  var risultato = Math.floor(Math.random()* (max - min) + min);
  return risultato;
}
// creo un array con 16 num random da 1 100
var estratti = [];
var random = numrandom(1,100);
estratti.push(random);

for (var i = 1; i < 16; i++) {


  var estratto = numrandom(1,100);
  if(!estratti.includes(estratto)){
    estratti.push(estratto);
    console.log('estratto è' + estratto);
  }
  else {
    i--;
  }
  

}
console.log(estratti);
trovato = false;
var k = 0;
while (trovato == false){
// prompt finchè num corrisponde array

  num = parseInt(prompt('inserisci un numero da 1 a 100'));


  for (var j = 0; j < 84; j++) {

    if (estratti[j] == num){
      trovato = true;
      alert('beccato!');
      alert('hai totalizzato punti ' + k);
      alert('ricarica la pagina per ricominciare');
      break;
      console.log(j);
     }

    else{
      trovato = false;



    }

  }
k++;
}
