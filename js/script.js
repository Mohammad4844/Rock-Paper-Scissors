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

function game() {
   var playerScore = 0;
   var computerScore = 0;

   for (var i = 0; i < 5; i++) {
      var playerSelection = prompt("Choose either: Rock, Paper or Scissors");
      result = playRound(playerSelection, computerPlay());
      console.log(result);
      if (result.charAt(4) === 'W') //this IF adds scores to the respective winners
         playerScore++;
      else if (result.charAt(4) === 'L')
         computerScore++;
   }

   outputResult(playerScore, computerScore);
}

function outputResult(playerScore, computerScore) {
   var outputScores = "\nYour Score: " + playerScore +
      "\nComputer Score: " + computerScore; //helper string to output scores for both easily

   if (playerScore > computerScore)
      alert("You won the Game!" + outputScores);
   else if (playerScore < computerScore)
      alert("You lost the Game!" + outputScores);
   else
      alert("You tied! " + outputScores);
}