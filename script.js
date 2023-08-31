const buttons = document.querySelectorAll("button");

let resultsDiv = document.querySelector("#round-winner-element");
let playerScore = document.querySelector("#player-score-value");
let computerScore = document.querySelector("#computer-score-value");
let computerChoiceText = document.getElementById("computer-choice");
let playerChoiceText = document.getElementById("player-choice");

let computerWinCount = 0;
let playerWinCount = 0;

function getComputerChoice() {
  const choiceArr = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * (4 - 1));

  return choiceArr[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  computerChoiceText.innerText = `${computerSelection}`;
  playerChoiceText.innerText = `${playerSelection}`;

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    resultsDiv.innerText = `Computer chose ${computerSelection}, ${playerSelection} WINS.`;
    playerWinCount += 1;
    playerScore.innerText = `${playerWinCount}`;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    resultsDiv.innerText = `Computer chose ${computerSelection}, ${playerSelection} LOSES.`;
    computerWinCount += 1;
    computerScore.innerText = `${computerWinCount}`;
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    resultsDiv.innerText = `Everyone chose ROCK, this match is a tie.`;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    resultsDiv.innerText = `Computer chose ${computerSelection}, ${playerSelection} WINS.`;
    playerWinCount += 1;
    playerScore.innerText = `${playerWinCount}`;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    resultsDiv.innerText = `Computer chose ${computerSelection}, ${playerSelection} LOSES.`;
    computerWinCount += 1;
    computerScore.innerText = `${computerWinCount}`;
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    resultsDiv.innerText = `Everyone chose PAPER, this match is a tie.`;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    resultsDiv.innerText = `Computer chose ${computerSelection}, ${playerSelection} WIN.`;
    playerWinCount += 1;
    playerScore.innerText = `${playerWinCount}`;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    resultsDiv.innerText = `Computer chose ${computerSelection}, ${playerSelection} LOSES.`;
    computerWinCount += 1;
    computerScore.innerText = `${computerWinCount}`;
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    resultsDiv.innerText = `Everyone chose SCISSORS, this match is a tie.`;
  }
}

function resetScore() {
  computerWinCount = 0;
  playerWinCount = 0;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let choice = e.target.innerText.toUpperCase();
    playRound(choice, getComputerChoice());
  });
});