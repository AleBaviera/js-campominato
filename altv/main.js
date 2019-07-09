console.log('ciao');


// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// dichiaro var


// BONUS (*se e solo se avete concluso il caso base*):
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50
//

var num, trovato, livello;
alert('imposta il livello di difficoltà: 0, 1 o 2?');
livello = parseInt(prompt('inserisci il livello'));
// funzione num random

function numrandom(min,max){
  var risultato = Math.floor(Math.random()* (max - min) + min);
  return risultato;
}
// creo un array con 16 num random da 1 100
var estratti = [];

switch (livello) {
  case 0:
  estratti.push(numrandom(1,100));
  for (var i = 1; i < 16; i++) {

    if(estratti.indexOf() >= 0){
      i = i - 1;
    }
    else{
      estratti.push(numrandom(1,100));
    }
  }
  alert('inserisci un numero da 1 a 100');

    break;
    case 1:
    estratti.push(numrandom(1,80));
    for (var i = 1; i < 16; i++) {

      if(estratti.indexOf() >= 0){
        i = i - 1;
      }
      else{
        estratti.push(numrandom(1,80));
      }
    }
    alert('inserisci un numero da 1 a 80');

      break;
      case 2:
      estratti.push(numrandom(1,50));
      for (var i = 1; i < 16; i++) {

        if(estratti.indexOf() >= 0){
          i = i - 1;
        }
        else{
          estratti.push(numrandom(1,50));
        }
      }
      alert('inserisci un numero da 1 a 50');

        break;
  default:
  estratti.push(numrandom(1,100));
  for (var i = 1; i < 16; i++) {

    if(estratti.indexOf() >= 0){
      i = i - 1;
    }
    else{
      estratti.push(numrandom(1,100));
    }
  }
}


console.log(estratti);
trovato = false;
var k = 0;
while (trovato == false){
// prompt finchè num corrisponde array

num = parseInt(prompt('inserisci numero' ));


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
