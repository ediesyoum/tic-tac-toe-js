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
    document.getElementById('gameboard').style.display = ''; // help from Derek to get the tiles to show only after names are entered
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
// var box1 = document.getElementById('box1');
// var box2 = document.getElementById('box2');
// var box3 = document.getElementById('box3');
// var box4 = document.getElementById('box4');
// var box5 = document.getElementById('box5');
// var box6 = document.getElementById('box6');
// var box7 = document.getElementById('box7');
// var box8 = document.getElementById('box8');
// var box9 = document.getElementById('box9');



 // console.log(boxes); it sees the div boxes wee


 var currentPlayer = 1;

 var playGame = function(box){
   // console.log(box);
     if (!box.innerHTML) { // help from Reed Daniel & Derek
       if (currentPlayer === 0) {
         box.innerHTML = '<img src="img/o.png">';
         playerO.push(box.id); // pushes the ID of the box selected in to the
          checkForWins(playerO);

         currentPlayer = 1;
       } else {
         box.innerHTML = '<img src="img/x.png">';
         playerX.push(box.id); // pushes the ID of the box selected in to the playerX array
          checkForWins(playerX);
         currentPlayer = 0;
       }
  //  whosTheWinner();
 //   } else {
 //
 }
}

function checkForWins (boxes) { // passing through boxes as a param
    // console.log(boxes);
       var winningCombos = [
          ['1', '2', '3'] , ['4', '5', '6'] , ['7', '8', '9'], //horizontal rows
          ['1', '4', '7'] , ['2', '5', '8'] , ['3', '6', '9'], //vertical columns
          ['1', '5', '9'] , ['3', '5', '7'] // diagonals
       ];

     for (var i=0; i < winningCombos.length; i++) { // assistance from Derek to get this working. -1 refers to a box that has not yet been selected by the user.
       var currentWin = winningCombos[i];
       if (boxes.indexOf(currentWin[0]) != -1 && boxes.indexOf(currentWin[1]) != -1 && boxes.indexOf(currentWin[2]) != -1){
            alert("You win!")

    }
  }
};

// function whosTheWinner (box) { // cited from Thom's solution
//
//      // var boxes = document.getElementsByClassName('boxes');
//      console.log(box1)
//
//      if (checkPositions(playerX === 'X')) {
//        for (var i=0; i < playerX.length; i++) {
//          messageArea.innerHTML= "X is the winner";
//        }
//      } else {
//        if (checkPositions(playerO === 'O')) {
//          for (var j=0; j < playerO.length; j++) {
//            messageArea.innerHTML="O is the winner";
//      }
//    }
//  }

// function checkPositions (playerPositions) { // also from one of Thom's TTT solutions
// for (var i=0; i < winningCombos.length; i++) {
//   var hits = 0;
//   for (var j=0; j < winningCombos[i].length; j++) {
//     for (var k=0; k < playerPositions.length; k++) {
//
//       if (winningCombos[i][j] == playerPositions[k]) {
//         hits++;
//   }
//     }
//       }
//         if (hits == 3) {
//           return true;
//         }
//           return false;
//         }
//       }
//     }
//   }
// };



// CODE GRAVEYARD


 // var box1 = document.getElementById('box1');
 // console.log(box1)
 // var box2 = document.getElementById('box2');
 // var box3 = document.getElementById('box3');
 // var box4 = document.getElementById('box4');
 // var box5 = document.getElementById('box5');
 // var box6 = document.getElementById('box6');
 // var box7 = document.getElementById('box7');
 // var box8 = document.getElementById('box8');
 // var box9 = document.getElementById('box9');
//

//     //
        //  whosTheWinner();
//     //    } else {
//          (box1 == box2 && box1 == box3 && (box1 == "O"))
//          (box4 == box5 && box4 == box6 && (box4 == "O")) ||
//          (box7 == box8 && box7 == box9 && (box7 == "O")) ||
//          (box1 == box4 && box1 == box7 && (box1 == "O")) ||
//          (box2 == box5 && box2 == box8 && (box2 == "O")) ||
//          (box3 == box6 && box3 == box9 && (box3 == "O")) ||
//          (box1 == box5 && box1 == box9 && (box1 == "O")) ||
//          (box3 == box5 && box3 == box7 && (box3 == "O")) ||
//          {
//              whosTheWinner();
//       }
//
// }



// need to create "playGame" function here
  // var playGame = function () {
  //   console.log('s')
  //   whosTurn(currentPlayer + " should begin the game.");
  // }




// console.log(box)
// console.log(this.playerX)
//   // if (box.id.
//   console.log(this.row1)
//     // for var
//   // whosTheWinner();
// }

// combinations by ID - shortest way to write this possible


// console.log(playerO)
// console.log(playerX)
