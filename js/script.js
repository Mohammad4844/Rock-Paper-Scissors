let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

let rockSelector = document.querySelector(".rock");
let paperSelector = document.querySelector(".paper");
let scissorsSelector = document.querySelector(".scissors");

rockSelector.addEventListener("click", () => whenOptionSelected("Rock"));
paperSelector.addEventListener("click", () => whenOptionSelected("Paper"));
scissorsSelector.addEventListener("click", () => whenOptionSelected("Scissors"));

let startGame = document.querySelector(".startGame");
startGame.addEventListener("click", resetScores);

const bod = document.querySelector("body");
const scoreBoardTitle = document.createElement("div");
const scoreBoard = document.createElement("div");
scoreBoardTitle.classList.add("scoreBoardTitle", "scoreBoard");
scoreBoard.classList.add("scoreBoard");

function computerPlay() {
   switch (getRandomInt()) {
      case 0:
         return "Rock";
      case 1:
         return "Paper";
      case 2:
         return "Scissors";
   }
}

function getRandomInt() {
   return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
   var win;
   //makes the user input Proper Case
   playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1, playerSelection.length).toLowerCase();
   //case for when both choose the same thing
   console.log(playerSelection);
   if (playerSelection === computerSelection)
      return "It's a Tie! You both chose " + computerSelection;

   switch (playerSelection) {
      case "Rock":
         win = (computerSelection === "Scissors") ? true : false;
         break;
      case "Paper":
         win = (computerSelection === "Rock") ? true : false;
         break;
      case "Scissors":
         win = (computerSelection === "Paper") ? true : false;
         break;
      default:
         return "You entered an incorrect selection!"; //for when user inputs something else
   }
   if (win)
      return "You Won! " + playerSelection + " beats " + computerSelection;
   else
      return "You Lost! " + computerSelection + " beats " + playerSelection;
}

function whenOptionSelected(selection) {
   result = playRound(selection, computerPlay());
   if (result.charAt(4) === 'W') //this IF adds scores to the respective winners
      playerScore++;
   else if (result.charAt(4) === 'L')
      computerScore++;
   roundsPlayed++;
   updateAndShowScores(result);
   if (roundsPlayed === 5)
      endGame();
}

function updateAndShowScores(result) {
   scoreBoardTitle.textContent = result;
   scoreBoard.textContent = "Your Score: " + playerScore + "\nComputer Score: " + computerScore;
   bod.appendChild(scoreBoardTitle);
   bod.appendChild(scoreBoard);
}

function endGame() {
   bod.removeChild(bod.lastChild);
   bod.removeChild(bod.lastChild);
   outputFinalResult();
   resetScores();
}

function outputFinalResult() {
   var outputScores = "\nYour Score: " + playerScore +
      "\nComputer Score: " + computerScore + "\nClick OK to play again!";
   if (playerScore > computerScore)
      alert("You won the Game!" + outputScores);
   else if (playerScore < computerScore)
      alert("You lost the Game!" + outputScores);
   else
      alert("You tied! " + outputScores);
}

function resetScores() {
   roundsPlayed = 0;
   playerScore = 0;
   computerScore = 0;
   updateAndShowScores("Let's Play!");
}