let computerWinCount = 0;
let playerWinCount = 0;

function getComputerChoice() {
  const choiceArr = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * (4 - 1));

  return choiceArr[randomNumber];
}

function getPlayerChoice() {
  let promptField = window.prompt(`Choose your weapon:
    ROCK
    PAPER
    SCISSORS`);

  let choice = promptField.toUpperCase();
  return choice;
}

function playSingleRound(playerSelection, computerSelection) {
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

function game() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  playSingleRound(playerSelection, computerSelection);

  console.log(
    `CURRENT SCORE  Player: ${playerWinCount} | Computer: ${computerWinCount}`
  );
}

function resetScore() {
  computerWinCount = 0;
  playerWinCount = 0;
}

function bestOfFive() {
  resetScore();

  for (let i = 1; i <= 5; i++) {
    console.log();
    console.log(`%c ROUND ${i}`, "font-size: 20px; font-weight: bold");
    game();
  }

  if (playerWinCount > computerWinCount) {
    window.alert(
      `YOU WIN! Player Score: ${playerWinCount} | Computer Score: ${computerWinCount}`
    );
  } else if (computerWinCount > playerWinCount) {
    window.alert(
      `YOU LOSE! Computer Score: ${computerWinCount} | Player Score: ${playerWinCount}`
    );
  } else {
    window.alert(
      `WE HAVE A TIE... Computer Score: ${computerWinCount} | Player Score: ${playerWinCount}`
    );
  }
}

bestOfFive();
