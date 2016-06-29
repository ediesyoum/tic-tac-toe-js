window.onload = function () {

  var startButton = document.getElementById('start');
  startButton.onclick = function() {
    startGame();
  }

  // this allows for the submit button to grab the data in the field and have it show in the message area
  var p1Button = document.getElementById('p1submit');
  p1Button.addEventListener('click', function() {
      document.getElementById("messageArea").innerHTML = "Player X will be " + p1Name + ". Click START to begin.";
  })

  // can i put these both on one line!? haha
  var p2Button = document.getElementById('p2submit').addEventListener('click', function() {
    document.getElementById("messageArea").innerHTML = "Player O will be " + p2Name + ".";
  })


// attempting to make the variables below global

 var boxes = document.getElementsByClassName('box');
 var p1Name = document.getElementById('p1namefield').value; // grabbing what is in the input field

 var p2Name = document.getElementById('p2namefield').value;

 // console.log(boxes); // it sees the div boxes wee

var startGame = function () {
    for (var i=0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
      playerTurn(this)
      whosTurn(p1Name + " has taken their turn." + p2Name + " should now take their turn." ); // this message is changing with the user WEE
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
      if (!box.innerHTML) { // help from Reed Daniel & Derek
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
