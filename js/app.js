window.onload = function () {
  console.log("I've been linked!");

  var startButton = document.getElementById('start');
  startButton.onclick = function() {
    startGame();
  }



 var boxes = document.getElementsByClassName('box');
 console.log(boxes); // it sees the div boxes wee

var startGame = function () {
    for (var i=0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
      playerTurn(this)
    })
  }
}

// need to create "playGame" function here

  // var playGame = function () {
  //   console.log('s')
  //
  //   whosTurn(currentPlayer + " should begin the game.");
  // }

var currentPlayer = 1;

  var playerTurn = function(box){
    console.log(box);
      if (!box.innerHTML) { // help from Reed Daniel
        if (currentPlayer === 0) {
          box.innerHTML = 'O';
          currentPlayer = 1;
        } else {
          box.innerHTML = 'X';
          currentPlayer = 0;
        }
      } else {
      alert("You've been clicked!");
    }
  }

  function whosTurn(turnMsg) { // idea for the message that will tell the user whos turn it is
    document.getElementById("messageArea").innerHTML = turnMsg;
  }
};
