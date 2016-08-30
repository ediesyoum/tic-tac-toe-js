window.onload = function () {
  function whosTurn (turnMsg) { // is
    document.getElementById("messageArea").innerHTML = turnMsg;
  }



  function startGame() {
    var p1Name = document.getElementById('p1namefield').value;
    var p2Name = document.getElementById('p2namefield').value;
      for (var i=0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function() {
        playGame(this);
        //this.removeEventListener('click', function(){}); // attempted to use this but yes this is quite difficult to actually use
        whosTurn(p1Name + " = X <br/>" + p2Name + " = O" ); // this message is changing with the user WEE
      })

    }
  }

  var startButton = document.getElementById('start');

  startButton.onclick = function() {
    var p1Name = document.getElementById('p1namefield').value;
    var p2Name = document.getElementById('p2namefield').value;
    document.getElementById('gameboard').style.display = '';
    document.getElementById('name-entry').style.display = 'none';
    document.getElementById("messageArea").innerHTML = "X = " + p1Name +" & O = " + p2Name + ".<br/> X goes first - Click a tile to begin!"; // whoa line breaks work love this
    startGame();
  }
  // attempting to make the variables below global

  var boxes = document.getElementsByClassName('box');
  var p1Name = document.getElementById('p1namefield').value; // grabbing what is in the input field
  var p2Name = document.getElementById('p2namefield').value;

}


var playerX = []; // must tell all clicks from this player to go into this array
var playerO = [];


 var currentPlayer = 1;

 var playGame = function(box){
   // console.log(box);
     if (!box.innerHTML) { // help from Reed Daniel & Derek
       if (currentPlayer === 0) {
         box.innerHTML = '<img src="img/O.png">';
         playerO.push(box.id); // pushes the ID of the box selected in to the
          checkForWins(playerO);

         currentPlayer = 1;
       } else {
         box.innerHTML = '<img src="img/X.png">';
         playerX.push(box.id); // pushes the ID of the box selected in to the playerX array
          checkForWins(playerX);
         currentPlayer = 0;
       }
    }
}

function checkForWins (boxes) { // passing through boxes as a param
    // console.log(boxes);
       var winningCombos = [
          ['1', '2', '3'] , ['4', '5', '6'] , ['7', '8', '9'], //horizontal rows
          ['1', '4', '7'] , ['2', '5', '8'] , ['3', '6', '9'], //vertical columns
          ['1', '5', '9'] , ['3', '5', '7'] // diagonals
       ];

   for (var i=0; i < winningCombos.length; i++) { //  -1 refers to a box that has not yet been selected by the user
     var currentWin = winningCombos[i];
       if (playerX.indexOf(currentWin[0]) != -1 &&
       playerX.indexOf(currentWin[1]) != -1 &&
       playerX.indexOf(currentWin[2]) != -1){
           winner = true;
            alert("X is the Winner!");
      } else if ( playerO.indexOf(currentWin[0]) != -1 &&
          playerO.indexOf(currentWin[1]) != -1 &&
          playerO.indexOf(currentWin[2]) != -1){
            winner = true;
            alert('The Winner is O!');
      } else if (playerX.length + playerO.length == 9) {
            winner = true;
            alert("It's a tie - no one wins.");
            }
      };
};
