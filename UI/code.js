const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#scoreboard");
const result_div = document.querySelector("#result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function playerSelection() {
    rock_div.addEventListener("click", function() {
        game("rock");
    });
    
    paper_div.addEventListener("click", function() {
        game("paper");
    });
    
    scissors_div.addEventListener("click", function() {
        game("scissors");
    });
};

playerSelection();


function computerPlay() {
    const objects = ["rock", "paper", "scissors"];
    let randomObject = objects[Math.floor(Math.random()*objects.length)]
    return randomObject;
}


function game(playerChoice) {
    const computerChoice = computerPlay();
    console.log(playerChoice);
    console.log(computerChoice);
}

game();