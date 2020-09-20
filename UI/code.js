const objects = ["rock", "paper", "scissors"];
const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#scoreboard");
const result_div = document.querySelector("#result");
const rock_div = document.getElementById("#rock");
const paper_div = document.getElementById("#paper");
const scissors_div = document.getElementById("#scissors");


//store the ID of the button picked as player selection
let playerSelection = document.querySelectorAll(".btn");
playerSelection.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        playerSelection = this.id;
        playerSelection = playerSelection.toString();
    });
});

//display selection on screen
//computer selects play
function computerPlay() {
    let randomObject = objects[Math.floor(Math.random()*objects.length)]
    return randomObject;
}

computerPlay();

let computerSelection = computerPlay();
//display selection on screen
//calculate which player won the round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
    } else if (playerSelection === computerSelection){
        return "Draw! Please try again";
    } else {
        return "Please enter a valid object";
    }
}
//display winner of the round on screen
//add a point to the respective score
//display points on scoreboard
//repeat process untill one player wins 3 rounds
//display winner of the game on screen


/*function game() {
    for (i = 0; i < 5; i++) {

        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        if (playerScore >= 3) {
            return "You won the game";
        } else if (computerScore >= 3) {
            return "You lost the game";
        }
    }
}

game();

console.log(game())*/