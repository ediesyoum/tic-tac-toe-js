window.onload = function () {
  function whosTurn (turnMsg) { // idea for the message that will tell the user whos turn it is
    document.getElementById("messageArea").innerHTML = turnMsg;
  }

  function startGame() {
      for (var i=0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function() {
        playGame(this);
        //this.removeEventListener('click', function(){});
        whosTurn(p1Name + " has taken their turn." + p2Name + " should now take their turn." ); // this message is changing with the user WEE
      })
    }
  }

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

 var winningCombos = [
    [b1, b2, b3] , [b4, b5, b6] , [b7, b8, b9], //horizontal rows
    [b1, b4, b7] , [b2, b5, b8] , [b3, b6, b9], //vertical columns
    [b1, b5, b9] , [b3, b5, b7] // diagonals
 ];

 // console.log(boxes); it sees the div boxes wee


 var currentPlayer = 1;

 var playGame = function(box){
   // console.log(box);
     if (!box.innerHTML) { // help from Reed Daniel & Derek
       if (currentPlayer === 0) {
         box.innerHTML = 'O';
         playerO.push(box.id); // pushes the ID of the box selected in to the playerO array
           // console.log(playerO);
         currentPlayer = 1;
       } else {
         box.innerHTML = 'X';
         playerX.push(box.id); // pushes the ID of the box selected in to the playerX array
         // console.log(playerX);
         currentPlayer = 0;
       }
    whosTheWinner(); // scoping issue
 //   } else {
 //
 }






// need to create "playGame" function here
  // var playGame = function () {
  //   console.log('s')
  //   whosTurn(currentPlayer + " should begin the game.");
  // }

  function whosTheWinner (box) { // cited from Thom's solution

     // var boxes = document.getElementsByClassName('boxes');
     console.log(box)

     if (checkPositions(playerX === 'X')) {
       for (var i=0; i < playerX.length; i++) {
         messageArea.innerHTML= "X is the winner";
       }
     } else {
       if (checkPositions(playerO === 'O')) {
         for (var j=0; j < playerO.length; j++) {
           messageArea.innerHTML="O is the winner";
     }
   }
 }





function checkPositions (playerPositions) { // this entire area is from one of Thom's TTT solutions,
      console.log(playerPositions)

for (var i=0; i < winningCombos.length; i++) {
  var hits = 0;
  for (var j=0; j < winningCombos[i].length; j++) {
    for (var k=0; k < playerPositions.length; k++) {

      if (winningCombos[i][j] == playerPositions[k]) {
        hits++;
      }
    }
  }
  if (hits == 3) {
    return true;
  }
  return false;
}

console.log(box)
console.log(this.playerX)
  // if (box.id.
  console.log(this.row1)
    // for var
  // whosTheWinner();
}

// combinations by ID - shortest way to write this possible


// console.log(playerO)
// console.log(playerX)


  }
  }
};
