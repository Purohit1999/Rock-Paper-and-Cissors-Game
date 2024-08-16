const buttons = document.querySelectorAll(".choice-buttons button");
const resultDisplay = document.getElementById("game-result");
const playerScoreDisplay = document.getElementById("player-score");
const aiScoreDisplay = document.getElementById("ai-score");
const resetButton = document.getElementById("reset-game");

let playerScore = 0;
let aiScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const result = playRound(button.id.replace("choice-", ""), aiPlay());
    resultDisplay.textContent = result;
 });
});

resetButton.addEventListener("click", resetGame);


function aiPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, aiSelection) {
    if (playerSelection === aiSelection) {
        
        return `It's a tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && aiSelection === "scissors") ||
        (playerSelection === "paper" && aiSelection === "rock") ||
        (playerSelection === "scissors" && aiSelection === "paper")
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        return `You win! ${playerSelection} beats ${aiSelection}.`;
    } else {
        aiScore++;
        aiScoreDisplay.textContent = aiScore;
        return `You lose! ${aiSelection} beats ${playerSelection}.`;
    }
}

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    playerScoreDisplay.textContent = playerScore;
    aiScoreDisplay.textContent = aiScore;
    resultDisplay.textContent = "Game reset! Make your move.";
}