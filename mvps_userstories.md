Project 2

Minimum Viable Product (MVPs):

1. When the page loads, the user will see an interactive gameboard, with a “Start” button above it.

2. Under the start button, there will be a field for the user to submit their name; it will be displayed as Player 1 (X). Player 2 should also have a separate field for their name.

3. When the users have entered their names, there needs to be a way for them to know whether they are X or O.

4. X can click anywhere on the board in the beginning, however, once a square has been selected by either player, they will not be able to click in that square again for the duration of the game.

5. Once clicked, X will remain visible to the user in whichever square it is in. O will also similarly remain visible to the user in the gameboard once the turn switch occurs.

6. Need to use classes to manipulate DOM elements, grab session-only data in the browser, and help determine the logic for possible wins or ties after different squares are clicked.

7. If X wins, they will need to be informed that they won.

8. If O wins, they will need to be informed that they won.  

9. If the game is a tie, both users will be told it is a tie.

10. In case of a tie, present them with a button to clear the game board and start again.

________________

User stories **

1. As a user, I want to see an empty gameboard with a “Start” button above it and a place for both players to enter in their names so that I know how to initialize the game.

2. As a user, I want to see a clearly displayed way to start the game, so that I don’t have to search for it and can start the game.

3. As a user, I want to know whether I will be X or O in the game.

4. As a user, I want to know if my opponent will be X or O in the game.

5. As a user, I want to clearly know when it is my turn, and it is the other player's turn.

6. As a user, I want to know who wins the game, or whether or not the game ends in a draw.

7. As a user, if the game ends in a draw, I want to be alerted of this and be presented with a clear way to restart the game.

_________________

Stretch Goals:

- Have an AI randomly select the position for O, in any empty tile that X has not already selected.

- Make it pretty/eye-catching

_________________

Conceptual thoughts and questions:

- Will each Div have to have a unique ID?

- Need to review using switch statements while inside a loop, will employ the use of “setTimeOut” to allow for the players to switch
