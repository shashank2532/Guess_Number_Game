let randomNumber = parseInt(100*Math.random()+1);
const submit=document.querySelector("#subt");
const userInput=document.querySelector("#guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHigh=document.querySelector(".lowOrHigh");
const startOver=document.querySelector(".resultParas");
const p = document.createElement("p");


let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener("click",(e)=>{

        e.preventDefault();
       const guess= parseInt(userInput.value);
       validateGuess(guess);
    });
};

validateGuess=(guess)=>{

    if(isNaN(guess)){
        alert("please enter a valid number");
    }
    else if(guess<1){
        alert("please enter a valid number");
    }
    else if(guess>100){
        alert("please enter a valid number less than 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess>10){
            displayGuess(guess);
            displayMesssage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
     
};

checkGuess=(guess)=>{

    if(guess===randomNumber){
        displayMesssage(`Congrat's You Win`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMesssage(`Number is tooo low`);
    }
    else if(guess>randomNumber){
        displayMesssage(`Number is tooo high`);
    }
};

displayMesssage=(message)=>{

    lowOrHigh.innerHTML=`<h2>${message}</h2>`;
};

displayGuess=(guess)=>{

    userInput.value='';
    guessSlot.innerHTML+=`${guess} , `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
};

newGame=()=>{

   const newGameButton= document.querySelector("#newGame");

   newGameButton.addEventListener("click",(e)=>{


    randomNumber=parseInt(100*Math.random()+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame=true;
   })
};

endGame=()=>{

    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
};