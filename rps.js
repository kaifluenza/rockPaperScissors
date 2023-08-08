//examine the document object
// console.log(document.URL);
// document.title = "RPS";
// console.log(document.title);
// console.log(document.body);
//console.log(document.images);


//selectors: get element by id


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
    return "Your input is invalid. Input rock, paper, or scissors!";
   }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));



function game(){
    let playerSelection = "";
    let computerSelection="";
    let playerWinCount = 0;
    let playerLossCount = 0;
    for(let i=0; i<5; i++){ 
        //should loop until playerWinCount==5
        playerSelection = prompt("Enter your choice: rock, paper, or scirssors:");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection,computerSelection);
        if(result==="win") { 
            alert("You won!");
            playerWinCount++;
        }
        else if(result==="loss") {
            console.log("You lost!");
            playerLossCount++;
        }
        else if(result==="tie"){
            console.log("It's a tie!");
        }
    }

    return "You won " + playerWinCount + " times and lost " + playerLossCount + " times.";
}