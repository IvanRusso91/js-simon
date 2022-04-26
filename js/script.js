/*
**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/*
1. genera 5 numeri casuali
2. creare un timer di max 5sec.
3. utente inserisce uno alla volta i numeri visti.
4. confronta la risposta con i numeri generati
5. decretare il punteggio.
*/

//-----------------------------------------------------------
const main = document.querySelector('main');
const FIVE_NUMBER= 5;
const boxNumber = 100;
 
let counter = 5;

document.getElementById('play').addEventListener('click', play);


function play(){
  reset();
  generatePlay();
  timer(counter);

}


function generatePlay(){
  const extracted = fiveNumber()
  const field = document.createElement('div');
  field.className = 'field';

  for (let i = 1; i <= 5; i++){
    
    const cell = document.createElement('div');
    cell.className='cell sq'+i;
    cell.innerHTML=`<span>${extracted[i]}</span>`;

    field.append(cell);
  }
 
  main.append(field);
}

function timer(counter){
  
  const display = document.createElement('div');
  display.className = 'display';
  main.append(display);

  const timer = setInterval(() => { 
    display.innerHTML= counter;
    counter--;  
    if(counter < 0){
      clearInterval(timer)
    }
  },1000)
}

function fiveNumber(){
  const estratto= [];
  
  while(estratto.length <= FIVE_NUMBER){
    const number = getRandomNumber(1, boxNumber);
    if(!estratto.includes(number)){
      estratto.push(number);
    }
  }
  return estratto;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reset(){
  main.innerHTML='';
}