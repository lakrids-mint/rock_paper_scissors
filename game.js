// Random pick for computer friend
function computerPlay (){
  let choices =["rock", "paper", "scissors"];
  let computer_move = choices[Math.floor(Math.random() * choices.length)];
  return computer_move;
}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

let currentRound = 1;



//the game
function playGame(playerSelection){
  if (computerScore <5 && humanScore<5){
    let computerSelection = computerPlay();

    let winnerOfRound = playRound(playerSelection, computerSelection);
    currentRound++;

    updateDisplay(winnerOfRound);

    if (computerScore == 5){
      announceWinner("Evil computer");
    }else if(humanScore == 5){
      announceWinner("Very evil human");
    }
  }
}

function announceWinner(winner){
  let container = document.querySelector('#container');
  let gameOver = document.createElement("p");
  gameOver.textContent = "Game over!! "+ winner + " wins this game. Boom!";
  container.appendChild(gameOver);

}
// Single round logic
function playRound(playerSelection, computerSelection) {
  var winner = "";

  if(playerSelection === computerSelection){
    // adds to counter
    tieScore++;
    return "It's a tie! You both lose!!!!! You both chose: " + computerSelection;


  }else if (

    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper" ) {
    // assign human as winner
    winner = "Human wins this round! "+ playerSelection + " beats " + computerSelection;

    humanScore++;

    //adds win to counter
    return winner;

  }else{
    //assigns computer as winner
    winner = "Friendly (?) computer wins this round! " + computerSelection + " beats "+playerSelection;
    computerScore++;
    // adds to counter
    return winner;

  }

}






//
//updates UI
function updateDisplay(winnerOfRound){
  // Display winner of current round
  let container = document.getElementById("container").innerHTML = "Winner of round: "+ winnerOfRound;
  //Display the result in the DOM
 // display running scores
 //announce winner of game when one player reaches 5 points.

   //Ties
   let numberOfTies = document.querySelector('#numberOfTies');
   let currentTie = document.createElement("h2");

   numberOfTies.textContent = tieScore;
   numberOfTies.appendChild(currentTie);

   //humanScore
   let numberOfHumanWins = document.querySelector('#humanScore');

   let HumanScore = document.createElement("h2");

   numberOfHumanWins.textContent = humanScore;
   numberOfHumanWins.appendChild(HumanScore);

   //computerScore
   let numberOfComputerWins = document.getElementById("computerScore").innerHTML = computerScore;

 //  let numberOfComputerWins = document.querySelector('#computerScore');

   //let ComputerScore = document.createElement("h2");

   //numberOfComputerWins.textContent = computerScore;
   //numberOfComputerWins.appendChild(ComputerScore);




}


// plays the game with selection when the button is clicked
//event listeners
let rock = document.querySelector("#rock");
rock.addEventListener("click", () => playGame("rock"));

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => playGame("paper"));

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => playGame("scissors"));
