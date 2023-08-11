function getComputerChoice(){
  let imageDiv = document.querySelector(".computer .image img");
  imageDiv.style.display = "none";
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
  imageDiv.setAttribute('src', `./icons/${choice}.png`);
  setTimeout(() => imageDiv.style.display = "block", 200);
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
    setTimeout(() => winnerDiv.textContent = 'Tie!', 400);
    event.stopPropagation();
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (playerChoice === choices[i]){
      if (computerChoice === choices.slice(i - 2)[0]){
        setTimeout(() => winnerDiv.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`, 400);
        score[1] += 1;
        break;
      }
      setTimeout(() => winnerDiv.textContent = `You Win! ${playerChoice} beats ${computerChoice}`, 400);
      score[0] += 1;
      break;
    }
  }
  if (score[0] === 5){
    setTimeout(() => winnerDiv.textContent = "You are godly! You won 5 rounds!", 400);
    score = [0, 0];
  } else if (score[1] === 5){
    setTimeout(() => winnerDiv.textContent = "What a shame. You lost 5 times.", 400);
    score = [0, 0];
  }
  setTimeout(() => scoreDiv.textContent = `${score[0]} | ${score[1]}`, 400);
  event.stopPropagation();
}

let images = document.querySelectorAll(".image");
images = Array.from(images);
images.pop();
let buttons = document.querySelectorAll("img");
buttons = Array.from(buttons);
buttons.pop();
for(const button of buttons){
  button.addEventListener("click", roundWinner)
}
for(const image of images){
  image.addEventListener("click", roundWinner)
}
