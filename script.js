let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

scoreButton();

/*
This shortcut for blow code.

if(!score){
score = {
wins: 0,
losses: 0,
ties: 0}
}
*/


function playerComputer(move){
const computerMove = playerMove();

let result = '';

if(move === 'rock'){
  if(computerMove === 'rock'){
    result = 'Tie.'
  } else if(computerMove === 'paper'){
    result = 'You lose.'
  } else if(computerMove === 'scissors'){
    result = 'You win.'
  }
} else if(move === 'paper'){
  if(computerMove === 'rock'){
    result = 'You win.'
  } else if(computerMove === 'paper'){
    result = 'Tie.'
  } else if(computerMove === 'scissors'){
    result = 'You lose.'
  }
} else if(move === 'scissors'){
  if(computerMove === 'rock'){
    result = 'You lose.'
  } else if(computerMove === 'paper'){
    result = 'You win.'
  } else if(computerMove === 'scissors'){
    result = 'Tie.'
  }
}

if(result === 'You win.'){
  score.wins+=1;
} else if(result === 'You lose.'){
  score.losses+=1;
}  else if(result === 'Tie.'){
  score.ties+=1;
}

localStorage.setItem('score', JSON.stringify(score));

scoreButton();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-computer-move')
  .innerHTML = `You
    <img src="images/${move}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
  
}

function scoreButton(){
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function playerMove(){
const computerRandom = Math.random();
let computerMove = '';

if(computerRandom >= 0 && computerRandom < 1/3 ){
computerMove = 'rock'
} else if(computerRandom >= 1/3 && computerRandom < 2/3){
computerMove = 'paper'
} else if(computerRandom >= 2/3 && computerRandom < 1){
computerMove = 'scissors'
}

return computerMove;
}