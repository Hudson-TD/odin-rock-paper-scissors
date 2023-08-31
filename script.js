let computerWinCount = 0;
let playerWinCount = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const choiceArr = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * (4 - 1));

  return choiceArr[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  console.log(`Player's Choice ${playerSelection}`);
  console.log(`Computer's Choice ${computerSelection}`);

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    console.log(
      `Computer chose ${computerSelection}, ${playerSelection} WINS.`
    );
    playerWinCount += 1;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    console.log(
      `Computer chose ${computerSelection}, ${playerSelection} LOSES.`
    );
    computerWinCount += 1;
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    console.log(`Everyone chose "ROCK", this match is a tie.`);
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    console.log(
      `Computer chose ${computerSelection}, ${playerSelection} WINS.`
    );
    playerWinCount += 1;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    console.log(
      `Computer chose ${computerSelection}, ${playerSelection} LOSES.`
    );
    computerWinCount += 1;
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    console.log(`Everyone chose "PAPER", this match is a tie.`);
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    console.log(`Computer chose ${computerSelection}, ${playerSelection} WIN.`);
    playerWinCount += 1;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    console.log(
      `Computer chose ${computerSelection}, ${playerSelection} LOSES.`
    );
    computerWinCount += 1;
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    console.log(`Everyone chose "SCISSORS", this match is a tie.`);
  }
}

function resetScore() {
  computerWinCount = 0;
  playerWinCount = 0;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let choice = e.target.innerText.toUpperCase();
    resetScore();
    playRound(choice, getComputerChoice());
  });
});