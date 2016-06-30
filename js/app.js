window.onload = function () {

  var startButton = document.getElementById('start');
  startButton.onclick = function() {
    var p1Name = document.getElementById('p1namefield').value;
    var p2Name = document.getElementById('p2namefield').value;
    document.getElementById('gameboard').style.display = ''; // help from Derek to get the tiles to show only after names are entered
    document.getElementById('name-entry').style.display = 'none';
    document.getElementById("messageArea").innerHTML = "Player X will be " + p1Name + " , Player O will be " + p2Name;
    startGame();
  }


//on page load, gameboard should be display none, when start button is clicked
//gameboard should be display= '' and section with will be display none

// attempting to make the variables below global
var playerX = []; // must tell all clicks from this player to go into this array
var playerO = [];
 var boxes = document.getElementsByClassName('box');
 var p1Name = document.getElementById('p1namefield').value; // grabbing what is in the input field
 var p2Name = document.getElementById('p2namefield').value;

 // console.log(boxes); it sees the div boxes wee

var startGame = function () {
    for (var i=0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', function() {
      playGame(this);
      //this.removeEventListener('click', function(){});
      whosTurn(p1Name + " has taken their turn." + p2Name + " should now take their turn." ); // this message is changing with the user WEE
    })
  }
}

var whosTurn = function (turnMsg) { // idea for the message that will tell the user whos turn it is
  document.getElementById("messageArea").innerHTML = turnMsg;
}

// need to create "playGame" function here
  // var playGame = function () {
  //   console.log('s')
  //   whosTurn(currentPlayer + " should begin the game.");
  // }

var currentPlayer = 1;

  var playGame = function(box){
    console.log(box);
      if (!box.innerHTML) { // help from Reed Daniel & Derek
        if (currentPlayer === 0) {
          box.innerHTML = 'O';
          playerO.push(box.id); // pushes the ID of the box selected in to the playerO array
            console.log(playerO);
          currentPlayer = 1;
        } else {
          box.innerHTML = 'X';
          playerX.push(box.id); // pushes the ID of the box selected in to the playerX array
          console.log(playerX);
          currentPlayer = 0;
        }
    } else {
     checkForWins();
  }

// not sure how to make this work only after the first player has had 3 turns
var checkForWins = function (box) {
  whosTheWinner();
}

// combinations by ID - shortest way to write this possible
var winningCombos = [
   [1, 2, 3] , [4, 5, 6] , [7, 8, 9], //horizontal rows
   [1, 4, 7], [2, 5, 8], [3, 6, 9], //vertical columns
   [1, 5, 9], [3, 5, 7] //diagonals
];

  var whosTheWinner = function () {
    if (winningCombos(playerX === 'X')) {
      for (var i=0; i < playerX.length; i++) {
        messageArea.innerHTML="X is the winner";
      }
    } else {
      if (winningCombos(playerO === 'O')) {
        for (var j=0; j < playerO.length; j++) {
          messageArea.innerHTML="O is the winner";
      }
    }
  }
  }
  }
};
