let score = JSON.parse(localStorage.getItem('score')) ||
 {wins:0,losses:0,ties:0} 

// to show the score initially
updateScoreElement()

let isAutoPlaying = false;
let intervalId;

function autoPlay()
{
  if (!isAutoPlaying) 
  {
    // setInterval()- returns a number and this is like an ID 
    //              - we can use it to stop the interval
    intervalId=setInterval(() => { 
    const playerMove = pickComputer();  
    playGame(playerMove);
    },3000);
    isAutoPlaying = true;
  }
  else
  {
     clearInterval(intervalId);
     isAutoPlaying=false
  }
}


document.querySelector('.js-rock-button').addEventListener('click',() => {
  playGame('Rock')
});

document.querySelector('.js-paper-button').addEventListener('click',() => {
  playGame('Paper')
});

document.querySelector('.js-scissors-button').addEventListener('click',() => {
  playGame('Scissors')
});

document.body.addEventListener('keydown',(event) => {
  if (event.key === 'r') {
    playGame('Rock');
  }
  else if (event.key === 'p') {
    playGame('Paper')
  }
  else if (event.key === 's') {
    playGame('Scissors')
  }

})

function  playGame(playerMove)
{
  const computerChoice = pickComputerChoice();

 let result='';
 
 if (playerMove === 'Rock')
 {
    if(computerChoice === 'Rock') {
      result='Tie';
    }
    else if(computerChoice === 'Paper') {
      result='You lose!!';
    }
    else if(computerChoice === 'Scissors') {
      result='You win!'
    }
 }

 if (playerMove === 'Paper')
 {
    if(computerChoice === 'Rock') {
      result='You win!';
    }
    else if(computerChoice === 'Paper') {
      result='Tie';
    }
    else if(computerChoice === 'Scissors') {
      result='You lose!!'
    }
 }

 if (playerMove === 'Scissors')
 {
    if(computerChoice === 'Rock') {
      result='You lose!!';
    }
    else if(computerChoice === 'Paper') {
      result='You win!';
    }
    else if(computerChoice === 'Scissors') {
      result='Tie'
    }
 }
  console.log(result)

  if (result === 'You win!')
  { score.wins += 1}
  else if (result === 'You lose!!')
  { score.losses += 1}
  else if (result === 'Tie')
  { score.ties += 1}


  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement()

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML= `You
  <img src="images/${playerMove}.jpeg" class="move-icon">
  <img src="images/${computerChoice}.jpeg" class="move-icon">
  Computer`;
}


function updateScoreElement()
{
  document.querySelector('.js-score')
  .innerHTML = ` Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`
}

//Use verbs before function names i.e, here 'pick'

function pickComputerChoice() 
{

  const randomNumber= Math.random();
 
  let computerChoice='';

  if(randomNumber>=0 && randomNumber<1/3) { 
    computerChoice='Rock'
  }
  else if (randomNumber>=1/3 && randomNumber<2/3) {
    computerChoice='Paper' 
  }
  else if (randomNumber>=2/3 && randomNumber<1) {
    computerChoice='Scissors'
  }
  console.log(computerChoice);
  return computerChoice;

}