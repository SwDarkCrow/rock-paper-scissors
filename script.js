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

function roundWinner(event){
  let choices = ['rock', 'paper', 'scissors'];
  let playerChoice = event.target.id;
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice){
    console.log('Tie!');
  }

  for (let i = 0; i <= 3; i++) {
    if (playerChoice === choices[i - 1]){
      if (computerChoice === choices[choices.length + i - 3]){
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
        break;
      }
      console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
      break;
    }
  }
}

let buttons = document.querySelectorAll("button");
for(const button of buttons){
  button.addEventListener("click", roundWinner)
}

function game(event){
  let playerChoice = event.id;
  let computerChoice;
  let score = [0, 0];
  //for (let i = 0; i <= 4;) 
  //while(true)
  //{
    playerChoice = prompt('Rock, paper, or scissors?').toLowerCase();
    computerChoice = getComputerChoice();
    console.log(roundWinner(playerChoice, computerChoice));
    if (roundWinner(playerChoice, computerChoice) > `You Lose! ${computerChoice} beats ${playerChoice}`){
      score[0] += 1;
      //i++;
    } else if (roundWinner(playerChoice, computerChoice) === 'Tie!'){
      //pass
    } else {
      score[1] += 1;
      //i++;
    }
    //if (score[0] === 3){
      //console.log('You are undefeatable!');
      //break;
    //} else if (score[1] === 3){
      //console.log('You were defeated')
      //break;
    //}
  //}
}

//game();
