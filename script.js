function getComputerChoice() {
  const choiceArr = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * (4 - 1));

  return choiceArr[randomNumber];
};
