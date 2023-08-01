function getComputerChoice(){
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice){
    case 1:
      choice = 'rock';
      break;
    case 2:
      choice = 'paper';
      break;
    case 3:
      choice = 'scissors';
      break;
  }
  return choice;
}

function roundWinner(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  let choices = ['rock', 'paper', 'scissors'];
  if (playerSelection === computerSelection){
    return 'Tie!'
  }

  for (let i = 0; i <= 3; i++) {
    if (playerSelection === choices[i-1]){
      if (computerSelection === choices[i-3]){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
      }
      return `You Win! ${playerSelection} beats ${computerSelection}`
    }
  }

  if (playerSelection === 'rock'){
    if computerSelection
  }
}
