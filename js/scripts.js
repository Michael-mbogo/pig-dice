var player 1=("");
var player 2=("");

function player = (roll) {
  this.roll=0;
  this.score=0;
  this.totalscore=0;
  this.turn;

}
var rolldice = function() {
  return Math.floor(Math.random()*6+1);
}

//roll 1
player.prorotype.rollone = function() {
  if(this.roll===1)
  this.score=0;
  alert(Turn is over.)
}else {
  this.score += this.roll;n
}

//hold fn
player.prorotype.hold = function() {
  this.totalscore += this.score;
  this.score=0;
}

//change Turn
player.prorotype.changeturn = function() {
if (this.roll===1) {
  this.turn=false;
}
}else {
  this.turn=true;
}

//check for winner
player.prototype.winner = function () {
  if (this.totalscore >=100) {
    alert(plaer one is the winner.)
  }
}

//user interface//
$(document).ready(function() {
  $
})
