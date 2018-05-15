//Business Logic
var diceVar = {
  playerOneResult: 0,
  playerTwoResult: 0,
  playerStatus: 1,
  currentScore: 0,
};
function randomRollNo () {
  dieRoll = Math.floor(Math.random()*6) +1;
  return dieRoll;
}
var playerRoll = function() {
  var roll = randomRollNo();
  if(roll ===1){
    diceVar.currentScore = 0;
    endTurn();
    switchPlayer();
  } else {
    diceVar.currentScore +=roll;
    if (diceVar.playerStatus === 1) {
      if (diceVar.currentScore + diceVar.playerOneResult >= 100) {
        alertWinner(1);
      }
    } else if (diceVar.currentScore + diceVar.playerTwoResult >= 100) {
      alertWinner(2);
  }
  }
  return roll;
}
function holdThePig() {
  var currentPlayer = diceVar.playerStatus;
  if (currentPlayer ===1) {
    diceVar.playerOneResult += diceVar.currentScore;
  } else {
    diceVar.playerTwoResult += diceVar.currentScore;
  }
  switchPlayer();
}


function switchPlayer () {
  if (diceVar.playerStatus === 1) {
    $("#player1Button").hide();
    $("#player2Button").show();
    diceVar.playerStatus = 2;

  } else {
    $("#player2Button").hide();
    $("#player1Button").show();
    diceVar.playerStatus = 1;

  }
}

function resetGame() {
  diceVar.playerOneResult = 0;
  diceVar.playerTwoResult = 0;
  diceVar.playerStatus = 1;
  diceVar.currentScore = 0;
}
function endTurn(){
  alert("Sorry - you rolled a 1.  Your score remains the same and your turn is over.");
  $(".playerStatus").text(diceVar.playerStatus);
}
function alertWinner(playerNumber) {
  alert("Player " + playerNumber + " is the BIG winner!!");
  resetGame();
  $(".gameOutput").text(0);
}
//USER LOGIC
$(document).ready(function() {
  $("form#pigForm").submit(function(event){
    var playerName1 = $("input#playerName1").val();
    var playerName2 = $("input#playerName2").val();
      $("span#playerName1").text(playerName1);
      $("span#playerName2").text(playerName2);
      $("#player2Button").hide();
      $("#player1Button").show();
      $(".playerStatus").text(diceVar.playerStatus);
      event.preventDefault();

    var nameHolder = new Names(playerName1, playerName2);
  })


  $(".rollGame").click(function() {
    pigResult = playerRoll();
    $("#currentScore").text(pigResult);
    $(".rollResult").text(diceVar.currentScore);

  });
  $(".rollGame2").click(function() {
    pigResult = playerRoll();
    $("#current2Score").text(pigResult);
    $(".rollResult2").text(diceVar.currentScore);
  });

  $(".holdGame").click(function(){
    holdThePig();
    $("rollResult").text("");
    $(".playerOneResult").text(diceVar.playerOneResult);
    $(".playerTwoResult").text(diceVar.playerTwoResult);
    $(".playerStatus").text(diceVar.playerStatus);
  });
});
