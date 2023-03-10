const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const gameBroadcaster = document.getElementById("game-broadcaster");
const choices = [rock, paper, scissors];
const scoreMessages = document.getElementsByTagName("span");

let playerScore = 0,
    aiScore = 0;

let playerChoice;
let aiChoice;

const gameLogic = () => {
    if (playerChoice === rock && aiChoice === rock) {
        alert("You tied.");
    }
    else if (playerChoice === rock && aiChoice === paper) {
        alert("You lost :(");
        aiScore++;
    }
    else if (playerChoice === rock && aiChoice === scissors) {
        alert("You won!");
        playerScore++;
    }
    else if (playerChoice === paper && aiChoice === paper) {
        alert("You tied!");
    }
    else if (playerChoice === paper && aiChoice === rock) {
        alert("You won!");
        playerScore++;
    }
    else if (playerChoice === paper && aiChoice === scissors) {
        alert("You lost :(");
        aiScore++;
    }
    else if (playerChoice === scissors && aiChoice === scissors) {
        alert("You tied.");
    }
    else if (playerChoice === scissors && aiChoice === rock) {
        alert("You lost :(");
        aiScore++;
    }
    else if (playerChoice === scissors && aiChoice === paper) {
        alert("You won!");
        playerScore++;
    }
}

const gameBroadcasterMessage = () => {
    if (aiChoice === choices[0]) {
        gameBroadcaster.innerHTML = `AI chose rock!`;
    }
    else if (aiChoice === choices[1]) {
        gameBroadcaster.innerHTML = `AI chose paper!`;
    }
    else {
        gameBroadcaster.innerHTML = `AI chose scissors!`;
    }
}

choices.forEach(option => {
    option.addEventListener("click", function () {
        aiChoice = choices[Math.floor(Math.random() * 3)];
        playerChoice = this;
        gameBroadcasterMessage();
        gameLogic();
        scoreMessages[0].innerHTML = playerScore;
        scoreMessages[1].innerHTML = aiScore;
    });
});

