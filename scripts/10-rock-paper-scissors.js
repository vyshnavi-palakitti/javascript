let score = JSON.parse(localStorage.getItem('score')) ||
 {wins:0,losses:0,ties:0} 

// to show the score initially
updateScoreElement()
let computerChoice='';
function  playGame(playerMove) 
{
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