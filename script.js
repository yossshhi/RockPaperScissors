// Score Count
let humanScore = 0;
let computerScore = 0;
let draws = 0;


function getComputerChoice() {
    const minCeiled = Math.ceil(0); // 0 inclusive
    const maxFLoored = Math.floor(2); // 2 inclusive 
    let computerChoice = Math.floor(Math.random() * (maxFLoored - minCeiled + 1) + minCeiled);

    if (computerChoice === 0){
        return 0 
    } else if (computerChoice === 1) {
        return 1
    } else if (computerChoice === 2){
        return 2
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors!");

    if (humanChoice.toLowerCase() === "rock"){
        return 0
    } else if (humanChoice.toLowerCase() === "paper") {
        return 1
    } else if (humanChoice.toLowerCase() === "scissors"){
        return 2
    }
}


function playRound(computerChoice, humanChoice){
    // 0 - Rock < 1 - Paper < 2 - Scissors
    if (humanChoice === computerChoice){
        console.log("It's a draw!")
        draws++
    }
    else if (
        (humanChoice === 0 && computerChoice === 2) || // Rock beats Scissors
        (humanChoice === 1 && computerChoice === 0) || // Paper beats Rock
        (humanChoice === 2 && computerChoice === 1)    // Scissors beats Paper
    ){
        humanScore++;
        console.log("You win!");
    } else {
        computerScore++
        console.log("You lose!")
    }
}



rounds = 0;
while (rounds != 5){
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
    rounds++
}


console.log(`Final Score: Player: ${humanScore} vs Computer: ${computerScore} | Draws: ${draws}`)

