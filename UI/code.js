const objects = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomObject = objects[Math.floor(Math.random()*objects.length)]
    return randomObject;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You Loose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You Loose! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You Loose! Scissors beats paper";
    } else if (playerSelection === computerSelection){
        return "Draw! Please try again";
    } else {
        return "Please enter a valid object";
    }
}

function game() {
    for (i = 0; i < 5; i++) {

        //let input = prompt("Choose an object: rock, paper or scissors");
        let playerSelection = input.toLowerCase();
        let computerSelection = computerPlay();

        computerPlay();

        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        if (playerScore >= 3) {
            return "You won the game";
        } else if (computerScore >= 3) {
            return "You lost the game";
        }
    }
}

game()

console.log(game())