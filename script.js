// Score Count
let humanScore = 0;
let computerScore = 0;
let draws = 0;


function getComputerChoice() {
    const minCeiled = Math.ceil(0); // 0 inclusive
    const maxFLoored = Math.floor(2); // 2 inclusive 
    let computerChoice = Math.floor(Math.random() * (maxFLoored - minCeiled + 1) + minCeiled);

    if (computerChoice === 0){
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else if (computerChoice === 2){
        return "scissors"
    }
}
let humanChoice = "";

function getHumanChoice() {
    // let humanChoice = prompt("Rock, Paper, Scissors!");

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
    if (
        (humanChoice === 0 && computerChoice === "rock") ||
        (humanChoice === 1 && computerChoice === "paper") ||
        (humanChoice === 2 && computerChoice === "scissors") 
    )
    {
        console.log("It's a draw!")
        draws++
    }
    else if (
        (humanChoice === 0 && computerChoice === "scissors") || // Rock beats Scissors
        (humanChoice === 1 && computerChoice === "rock") || // Paper beats Rock
        (humanChoice === 2 && computerChoice === "paper")    // Scissors beats Paper
    ){
        humanScore++;
        console.log("You win!");
    } else {
        computerScore++
        console.log("You lose!")
    }
}



// rounds = 0;
// while (rounds != 5){
//     const computerSelection = getComputerChoice();
//     const humanSelection = getHumanChoice();
//     playRound(computerSelection, humanSelection);
//     rounds++
// }
const body = document.querySelector("body");

const scoreDiv = document.createElement("div");

const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");

buttonRock.addEventListener("click", () =>{
    humanChoice = "Rock";
    const getHumanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, getHumanSelection);
    scoreDisplay.textContent = `Final Score: Player: ${humanScore} vs Computer: ${computerScore} | Draws: ${draws}`
    displayGameWinner();
});

buttonPaper.addEventListener("click", () =>{
    humanChoice = "Paper";
    const getHumanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, getHumanSelection);
    scoreDisplay.textContent = `Final Score: Player: ${humanScore} vs Computer: ${computerScore} | Draws: ${draws}`
    displayGameWinner();
});

buttonScissors.addEventListener("click", () =>{
    humanChoice = "Scissors";
    const getHumanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, getHumanSelection);
    scoreDisplay.textContent = `Final Score: Player: ${humanScore} vs Computer: ${computerScore} | Draws: ${draws}`
    displayGameWinner();
});

body.appendChild(buttonRock);
buttonRock.textContent= "Rock";
body.appendChild(buttonPaper);
buttonPaper.textContent = "Paper";
body.appendChild(buttonScissors);
buttonScissors.textContent = "Scissors";

// SCORE UI
const scoreDisplay = document.createElement("p");

// Initial Display of Score
scoreDisplay.textContent = `Final Score: Player: ${humanScore} vs Computer: ${computerScore} | Draws: ${draws}`

body.append(scoreDiv); // appending the div to the body
scoreDiv.appendChild(scoreDisplay); // appending the score p element to the new div

// Display set winner
const gameWinner = document.createElement("p");
function displayGameWinner() {
    if (humanScore === 5){
        // "The player wins the set!"
        gameWinner.textContent = "The player wins the set!"
    } else if (computerScore === 5){
        // "The computer wins the set!"
        gameWinner.textContent = "The computer wins the set!"
    };

};
body.appendChild(gameWinner)
