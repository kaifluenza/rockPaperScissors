function getComputerChoice() {
    let ranNum = Math.floor(Math.random()*3); //expected:0,1,or 2
    if (ranNum===0) return "rock";
    else if (ranNum===1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection){
   if(playerSelection.toLowerCase()==="rock"){
    return computerSelection==="rock"? "tie": 
           computerSelection==="paper"? "loss":
           "win";    
   }
   else if(playerSelection.toLowerCase()==="paper"){
    return computerSelection==="rock"? "win": 
           computerSelection==="paper"? "tie":
           "loss"; 
   }
   else if(playerSelection.toLowerCase()==="scissors"){
    return computerSelection==="rock"? "loss":
           computerSelection==="paper"? "win":
           "tie";
   }
   else{
    return "Invalid!";
   }
}

function clickHandler(choice){
    //on click, play a round with player chosen r/p/s
    currentResult=playRound(choice,getComputerChoice());
    //update score based on result 
    if(currentResult==="win"){
        playerWinCount++;
    }
    else if(currentResult==="loss"){
        computerWinCount++;
    }

    if(playerWinCount==5){
        alert("You won!");
        resetGame();
    }else if(computerWinCount==5){
        alert("You lost!");
        resetGame();
    }
    //display score after each round to the div score
    playerScore.textContent = playerWinCount;
    computerScore.textContent = computerWinCount;


}

function resetGame(){
    playerWinCount=0;
    computerWinCount=0;
    playerScore.textContent = playerWinCount;
    computerScore.textContent = computerWinCount;
}

let playerWinCount = 0;
let computerWinCount = 0;

//buttons
let btnR = document.querySelector('#r');
let btnP = document.querySelector('#p');
let btnS = document.querySelector('#s');
//divs
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
//event handlers
btnR.addEventListener('click',()=>{clickHandler("rock")});
btnP.addEventListener('click',()=>{clickHandler("paper")});
btnS.addEventListener('click', ()=>{clickHandler("scissors")});

