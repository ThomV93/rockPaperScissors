let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("#scoreboard");
const result_p = document.querySelector("#result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//add event listener for each button and call the function game with the respective choice
function playerSelection() {
    rock_div.addEventListener("click", function() {
        game("r");
    });
    
    paper_div.addEventListener("click", function() {
        game("p");
    });
    
    scissors_div.addEventListener("click", function() {
        game("s");
    });
};

playerSelection();

//generate random choice for computer
function computerPlay() {
    const objects = ["r", "p", "s"];
    let randomObject = objects[Math.floor(Math.random()*objects.length)]
    return randomObject;
}

//add a point to player score, alters the scoreboard and display the message based on each choice
function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = playerChoice + " beats " + computerChoice + ". You win!"
}

//add a point to computer score, alters the scoreboard and display the message based on each choice
function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

function draw() {
    console.log("Draw!")
}

//combine both choices and call the respective function
function game(playerChoice) {
    const computerChoice = computerPlay();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;
    }
}

game();