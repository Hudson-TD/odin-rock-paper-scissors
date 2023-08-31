let computerWinCount = 0;
let playerWinCount = 0;

let playerScore = document.getElementById("player-score-value");
let computerScore = document.getElementById("computer-score-value");

const buttons = document.querySelectorAll("button");

let resultsDiv = document.getElementById("round-winner-element");

function getComputerChoice() {
  const choiceArr = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * (4 - 1));

  return choiceArr[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  document.getElementById("computer-choice").innerText = `${computerSelection}`;
  document.getElementById("player-choice").innerText = `${playerSelection}`;

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    resultsDiv.innerText = `Match Winner: Player`;
    playerWinCount++;
    playerScore.innerText = playerWinCount;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    resultsDiv.innerText = `Match Winner: Computer`;
    computerWinCount++;
    computerScore.innerText = computerWinCount;
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    resultsDiv.innerText = `This match is a tie.`;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    resultsDiv.innerText = `Match Winner: Player`;
    playerWinCount++;
    playerScore.innerText = playerWinCount;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    resultsDiv.innerText = `Match Winner: Computer`;
    computerWinCount++;
    computerScore.innerText = computerWinCount;
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    resultsDiv.innerText = `This match is a tie.`;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    resultsDiv.innerText = `Match Winner: Player`;
    playerWinCount++;
    playerScore.innerText = playerWinCount;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    resultsDiv.innerText = `Match Winner: Computer`;
    computerWinCount++;
    computerScore.innerText = computerWinCount;
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    resultsDiv.innerText = `This match is a tie.`;
  }

  if (playerWinCount === 5) {
    confirm("Champion: Player").then(window.location.reload());
  } else if (computerWinCount === 5) {
    confirm("Champion: Computer").then(window.location.reload());
  }
}

function resetScore() {
  computerWinCount = 0;
  playerWinCount = 0;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let choice = e.target.value;
    console.log(choice);
    console.log(typeof choice);
    playRound(choice, getComputerChoice());
  });
});
