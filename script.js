function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function getComputerChoice(){
  let imageDiv = document.querySelector(".computer .image img");
  imageDiv.setAttribute('src', "");
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
  sleep(100);
  imageDiv.setAttribute('src', `./icons/${choice}.png`);
  sleep(200);
  return choice;
}

let score = [0, 0];

function roundWinner(event){
  let scoreDiv = document.querySelector("#score");
  let winnerDiv = document.querySelector("#winner");
  winnerDiv.textContent = '';
  let choices = ['rock', 'paper', 'scissors'];
  let playerChoice = event.target.getAttribute('data-value');
  let computerChoice = getComputerChoice();
  if (playerChoice === computerChoice){
    winnerDiv.textContent = 'Tie!';
    event.stopPropagation();
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (playerChoice === choices[i]){
      if (computerChoice === choices.slice(i - 2)[0]){
        winnerDiv.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        score[1] += 1;
        break;
      }
      winnerDiv.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
      score[0] += 1;
      break;
    }
  }
  if (score[0] === 5){
    winnerDiv.textContent = "You are godly! You won 5 rounds!";
    score = [0, 0];
  } else if (score[1] === 5){
    winnerDiv.textContent = "What a shame. You lost 5 times.";
    score = [0, 0];
  }
  scoreDiv.textContent = `${score[0]} | ${score[1]}`
  event.stopPropagation();
}

let images = document.querySelectorAll(".image");
let buttons = document.querySelectorAll("img");
for(const button of buttons){
  button.addEventListener("click", roundWinner)
}
for(const image of images){
  image.addEventListener("click", roundWinner)
}
