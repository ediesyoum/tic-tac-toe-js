window.onload = function () {
  console.log("I've been linked!");


 var boxes = document.getElementsByClassName('box');
 console.log(boxes); // it sees the div boxes
    for (var i=0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', playGame);
}

// defining variables

var playerX = 'X';
var playerO = 'O';
var turn = 0; // to switch turns between X and O

// need to create "playGame" function here

  var playGame = function () {
    var turn = "X";
    whosTurn(this.turn + "should begin the game.");


  }

  function whosTurn(turnMsg) { // idea for the message that will
    document.getElementById("messageArea").innerHTML = turnMsg;
  }
};
