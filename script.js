// Score Count
const humanScore = 0;
const computerScore = 0;


function getComputerChoice() {
    const minCeiled = Math.ceil(0); // 0 inclusive
    const maxFLoored = Math.floor(2); // 2 inclusive 
    let computerChoice = Math.floor(Math.random() * (maxFLoored - minCeiled + 1) + minCeiled);

    if (computerChoice == 0){
        return "Rock"
    } else if (computerChoice == 1) {
        return "Paper"
    } else if (computerChoice == 2){
        return "Scissors"
    }
}

