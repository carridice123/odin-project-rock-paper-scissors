let playerScore = 0;
let compScore = 0;


const rockBtn = document.querySelector("#btn-1");
const paperBtn = document.querySelector("#btn-2");
const scissorsBtn = document.querySelector("#btn-3");
const resultes = document.querySelector("#results");

const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
   const compChoice = choice[Math.floor(Math.random() * choice.length)];
   console.log(compChoice);
   return compChoice;

}

function checkWinner(playerSelection, compSelection) {
    if(playerSelection == compSelection) {
        return "Tie";

    }
    else if(
        (playerSelection == "rock" && compSelection == "scissors") || 
        (playerSelection == "scissors" && compSelection == "paper") ||
        (playerSelection == "paper" && compSelection == "rock")
        
        ) { 
            return "Player!";
        } // still the else if statement its just has alot of conditions thats all
        else {
            return "Computer";
        }
        
    


}

function playRound(playerSelection, compSelection) {
    const result = checkWinner(playerSelection, compSelection);
    if(result == "Tie") {
        const paragh1 = document.createElement("p");
        paragh1.innerText = `It's a tie`;
       resultes.appendChild(paragh1);
    }
    else if(result == "Player!") {
     
        const paragh2 = document.createElement("p");; // the back tick allows variables in them
        paragh2.innerText = `You Win! ${playerSelection} Destroys ${compSelection}`
        resultes.appendChild(paragh2);
        playerScore += 1;
       
    }  else if (result == "Computer"){
       
        const paragh3 = document.createElement("p");
        paragh3.innerText = `you Lose! ${compSelection} Destroys ${playerSelection}`;
        resultes.appendChild(paragh3);
        compScore += 1;
       
    }                             
        
    }
    const  checkForWinner = (playerScore, compScore) => {
        if(playerScore === 5) {
            const heade2 = document.createElement("h2");
            heade2.innerText = "you win";
            resultes.appendChild(heade2);
            return playerScore;
        }
        if (compScore === 5) {
            const heade3 = document.createElement("h2");
            heade3.innerText = "you lose";
            resultes.appendChild(heade3);
            return compScore;
        }
    }
   
    

rockBtn.addEventListener("click", () => {
    const compSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, compSelection);
    checkForWinner(playerScore, compScore)
});

paperBtn.addEventListener("click", () => {
    const compSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, compSelection);
    checkForWinner(playerScore, compScore)
});

scissorsBtn.addEventListener("click", () => {
    const compSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, compSelection);
    checkForWinner(playerScore, compScore)
});








/* 


function getPlayerChoice() {
    let userChoice = false;
    while (userChoice == false) {
        const userInput = prompt("Rock Paper Scissors"); // this ask or prompt the player for an input.
        if(userInput == null) {
            continue;
        }
        const choiceInLower = userInput.toLowerCase();
        if(choice.includes(choiceInLower)) { // this line here i need to look OVER THIS.
            userChoice = true;
            return choiceInLower;
        }
    }



}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const compSelection = getComputerChoice();
    console.log(playRound(playerSelection, compSelection));
    console.log("----------------------"); // this is to create space.

    if (checkWinner(playerSelection, compSelection) == "Player!") {
        playerScore++;
        
    }
    else if (checkWinner(playerSelection, compSelection) == "Computer") {
        compScore++;
    }


    }
    console.log("Game Over")
    if (playerScore > compScore) {
        console.log("You win!");
    }
    else if (playerScore < compScore) {
        console.log("You Lose");
    }
    else
    function game() {
        let playerScore = 0;
        let compScore = 0;
        for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const compSelection = getComputerChoice();
        console.log(playRound(playerSelection, compSelection));
        console.log("----------------------"); // this is to create space.
    
        if (checkWinner(playerSelection, compSelection) == "Player!") {
            playerScore++;
            
        }
        else {
        console.log("its a tie");
    }
   
    
}


game();

 */