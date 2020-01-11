//console.log('Script imported');

const player = document.getElementById('player');
const comps = document.getElementById('comps');
const txt = document.getElementById('text');
const playerpix = document.getElementById('playerpic');
const comppic = document.getElementById('comppic');
const rockpic = '<img src = "rock.jpg" width= "350" height= "300">'
const scissorpic = '<img src = "scissors.jpg" width= "350" height= "300">'
const paperpic ='<img src = "paper.jpg" width= "350" height= "300">'

var moves = prompt("Type in rock, paper, or scissors");
console.log(moves);
if (moves.toLowerCase() == 'rock'){
  player.innerHTML = 'You chose rock!';
  playerpic.innerHTML = rockpic;
}
else if (moves.toLowerCase() == 'paper'){
  player.innerHTML = 'You chose paper!';
  playerpic.innerHTML = paperpic;
}
else if (moves.toLowerCase() == 'scissors'){
  player.innerHTML = 'You chose scissors!';
  playerpic.innerHTML = scissorpic;
}
else {
  player.innerHTML = 'I don\'t know what this is ....';
}


var comp = Math.floor(Math.random() * 3);
var compchoice;
console.log(comp);
if(comp == 0){
  compchoice = 'rock';
  comps.innerHTML = 'The computer chose rock!';
  comppic.innerHTML = rockpic;
}
else if (comp ==1){
  compchoice = 'paper';
  comps.innerHTML = 'The computer chose paper!';
  comppic.innerHTML = paperpic;
}
else{
  compchoice = 'scissors';
  comps.innerHTML = 'The computer chose scissors!';
  comppic.innerHTML = scissorpic;
}

if (compchoice == 'rock'){
  if (moves.toLowerCase() == 'scissors'){
    txt.innerHTML = 'You lost :(  ,press the button below to play again';
  }
  else if (moves.toLowerCase() == 'rock'){
    txt.innerHTML = 'You tied, press the button below to play again!';
  }
  else {
    txt.innerHTML = 'You won! Press the button below to play again';
  }
}
else if (compchoice == 'scissors'){
  if (moves.toLowerCase() == 'paper'){
    txt.innerHTML = 'You lost :(  ,press the button below to play again';
  }
  else if (moves.toLowerCase() == 'scissors'){
    txt.innerHTML = 'You tied, press the button below to play again!';
  }
  else {
    txt.innerHTML = 'You won! Press the button below to play again';
  }
}
else {
  if (moves.toLowerCase() == 'rock'){
    txt.innerHTML = 'You lost :(  ,press the button below to play again';
  }
  else if (moves.toLowerCase() == 'paper'){
    txt.innerHTML = 'You tied, press the button below to play again!';
  }
  else {
    txt.innerHTML = 'You won! Press the button below to play again';
  }
}

function goBack(){
  location.reload();
}
