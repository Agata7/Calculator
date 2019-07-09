
const screen = document.querySelector('.screen');
const numbers = [...document.querySelectorAll('.numbers')];
const reset = document.querySelector('.reset');
const counts = [...document.querySelectorAll('.count')];

const result = document.querySelector('.count1');

  
 let newNumber = "";
 let oldNumber = "";
 let count = "";
 let resultNumber = "";
   




// --------- Kliknięcie i pokazanie się pierwszej liczby ----------//
function apperOnScreen(){ 
  if(resultNumber){
    newNumber = parseInt(this.dataset.option);
    resultNumber = "";
  }else {
    newNumber = parseInt(this.dataset.option);
  }
  screen.innerText = newNumber; 
}
numbers.forEach(number => number.addEventListener('click', apperOnScreen));

// ---------Kliknięcie w counters ------------------//

function countNumber(){
  oldNumber = parseInt(newNumber);
  newNumber = "";
  count = this.dataset.summry;
  resultNumber = "";
}
counts.forEach(count1 => count1.addEventListener('click', countNumber));

//---------Kliknięcie w result ----------//


function newResult(){

  switch (count) {
    case "addition":
     resultNumber = oldNumber + newNumber;
    break;

    case "subtraction":
    resultNumber = oldNumber - newNumber;
    break;

    case "multiplication":
    resultNumber = oldNumber * newNumber;
    break;

    case "division":
    resultNumber = oldNumber / newNumber;
    break;

    default:
    resultNumber = newNumber;
  }

screen.textContent = resultNumber;
oldNumber = 0;
newNumber = resultNumber;
};

result.addEventListener('click', newResult);

function clear(){
  oldNumber = "";
  newNumber = "";
  screen.textContent = "0";
}
reset.addEventListener("click", clear);



