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
        return "It's a tie";
    }
    else if(result == "Player!") {
        return `You Win! ${playerSelection} Destroys ${compSelection}` // the back tick allows variables in them
    }                                // so those are more like parameters. and the argument value fills in them.
    else {
        return `you Lose! ${compSelection} Destroys ${playerSelection}`
    }

    
    
}

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
    else {
        console.log("its a tie");
    }
   
    
}


game();

