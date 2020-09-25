let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const playerButtons_div = document.getElementById("player-buttons")
const btns_div = document.querySelectorAll(".btn");
const result_p = document.querySelector("#result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//adds event listener for each button and call the function game with the respective choice as parameter
function playerSelection() {
    rock_div.addEventListener("click", function() {
        rock_div.classList.add("playing");//adds transition class to button
        game("r");
    });
    
    paper_div.addEventListener("click", function() {
        paper_div.classList.add("playing");//adds transition class to button
        game("p");
    });
    
    scissors_div.addEventListener("click", function() {
        scissors_div.classList.add("playing");//adds transition class to button
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

//remove the click event transition after the transform ends
function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skip the property name if it is not a transform
    this.classList.remove("playing");
}

//event to remove the transition
btns_div.forEach(btn => btn.addEventListener("transitionend", removeTransition));

//convert the letter to a full name for display purposes
function convertName(letter) {
    if (letter === "r") {
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//add a point to player score, alters the scoreboard and display the message based on each choice
function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = convertName(playerChoice) + " beats " + convertName(computerChoice) + ". You win!";
}

//add a point to computer score, alters the scoreboard and display the message based on each choice
function lose(playerChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertName(computerChoice) + " beats " + convertName(playerChoice) + ". You lost!";
}

function draw() {
    result_p.innerHTML = "Draw!";
}

//refresh window
function refreshGame() {
    window.location.reload();
}

//Button to reset the game refreshing the browser window
function replayButton() {
    let replayBtn = document.createElement("button");
    replayBtn.innerHTML = "Replay?"
    playerButtons_div.appendChild(replayBtn);
    replayBtn.addEventListener("click", refreshGame);
}

//removes buttons and substitutes with the replay button
function resetGame() {
    btns_div.forEach(btn => btn.remove()); //remove the buttons
    replayButton();
}

//combine both choices and call the respective function depending on combination result
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
    isGameOver(); // check before calculating the next round
}

game();

//Check if the game is over
function isGameOver() {
    if (playerScore === 5) {
        result_p.innerHTML = "Congratulations! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        result_p.innerHTML = "Sorry bud, the machine won";
        resetGame();
    }
}