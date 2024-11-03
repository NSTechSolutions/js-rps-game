// Notes

// const varieble are in Uppercase.
// let and arguments are in Calme case.

// Game itialization
window.addEventListener("DOMContentLoaded", (event) => {
  const STARTBTN = document.querySelector("#btnStartGame");
  const TEXTBOX = document.querySelector(".player-one-choice");

  // Start Game Using Input
  TEXTBOX.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      INTGAME();
    }
  });

  // Start Game Button
  STARTBTN.addEventListener("click", INTGAME);
});

// Rock Paper Scissors Game
const INTGAME = () => {
  // Player Value Be converted to lowercase
  const PLAYERVALUE = document
    .querySelector(".player-one-choice")
    .value.toLocaleLowerCase();

  // If textbox is empty
  if (PLAYERVALUE !== "") {
    //
    if (
      //Check if input is Rock, Paper, Scissors
      PLAYERVALUE == "rock" ||
      PLAYERVALUE == "paper" ||
      PLAYERVALUE == "scissors"
    ) {
      // Choice Values

      // Player choice
      const PLAYERCHOICE = playerEvalute(PLAYERVALUE);
      // Computer Choice
      const COMPUTERCHOICE = computerEvalute();

      // Body Of ROCK, PAPER, SCISSORS Game
      PLAYERCHOICE === COMPUTERCHOICE
        ? gameOutPut("Tie !!!", PLAYERCHOICE, COMPUTERCHOICE)
        : PLAYERCHOICE == "Rock" && COMPUTERCHOICE == "Scissors"
        ? gameOutPut("Player Wins !!!", PLAYERCHOICE, COMPUTERCHOICE)
        : PLAYERCHOICE == "Rock" && COMPUTERCHOICE == "Paper"
        ? gameOutPut("Computer Wins !!!", PLAYERCHOICE, COMPUTERCHOICE)
        : PLAYERCHOICE == "Paper" && COMPUTERCHOICE == "Rock"
        ? gameOutPut("Player Wins !!!", PLAYERCHOICE, COMPUTERCHOICE)
        : PLAYERCHOICE == "Paper" && COMPUTERCHOICE == "Scissors"
        ? gameOutPut("Computer Wins !!!", PLAYERCHOICE, COMPUTERCHOICE)
        : PLAYERCHOICE == "Scissors" && COMPUTERCHOICE == "Paper"
        ? gameOutPut("Player Wins !!!", PLAYERCHOICE, COMPUTERCHOICE)
        : PLAYERCHOICE == "Scissors" && COMPUTERCHOICE == "Rock"
        ? gameOutPut("Computer Wins !!!", PLAYERCHOICE, COMPUTERCHOICE)
        : null;
    } else {
      alert("Enter either Rock, Paper, Scissors");
    }
  } else {
    alert("You did not enter anyting");
  }
};

// PLayer Choice Being Evalueted
function playerEvalute(pChoice) {
  let playerChoice = "";

  switch (pChoice) {
    case "rock":
      playerChoice = "Rock";
      break;
    case "paper":
      playerChoice = "Paper";
      break;
    case "scissors":
      playerChoice = "Scissors";
      break;
  }

  return playerChoice;
}

// Computer Choice Being Evalueted
function computerEvalute() {
  // Computer Choieces
  const COMPUTERCHOICES = ["Rock", "Paper", "Scissors"];

  // Computer Random Choice
  const RANDOMCOMPUTERCHOICE =
    COMPUTERCHOICES[Math.floor(Math.random() * COMPUTERCHOICES.length)];

  return RANDOMCOMPUTERCHOICE;
}

// Scores
let playerScore = 0;
let computerScore = 0;

// Outcome Display
function gameOutPut(outcome, playOutcome, computerOutcome) {
  // Output div Being activated
  const OUTPUT = document.querySelector(".game-output");
  OUTPUT.classList.add("active");

  //Output Elements
  const PLAYEROUTPUT = OUTPUT.querySelector(".player-ans");
  const COMPUTEROUTPUT = OUTPUT.querySelector(".computer-ans");
  const OUTPUTVALUE = OUTPUT.querySelector(".outcome");

  //Dislaying the Outcomes
  PLAYEROUTPUT.innerText = playOutcome;
  COMPUTEROUTPUT.innerText = computerOutcome;
  OUTPUTVALUE.innerText = outcome;

  // Scores Calculation

  // Player Score increment
  outcome == "Player Wins !!!"
    ? (playerScore = playerScore + 1)
    : // Computer Score increment
    outcome == "Computer Wins !!!"
    ? (computerScore = computerScore + 1)
    : null;

  // Scoreboard
  scoreboard(playerScore, computerScore);
}

// ScoreBoard
function scoreboard(playerScore, computerScore) {
  // Score Elements
  const PLAYERSCORE = document.querySelector(".player1-score-span");
  const COMPUTERSCORE = document.querySelector(".com-score-span");

  // Scores Values
  let playerScoreValue = playerScore;
  let computerScoreValue = computerScore;

  // Displaying Scores
  PLAYERSCORE.innerText = playerScoreValue;
  COMPUTERSCORE.innerText = computerScoreValue;

  //Determines the game winner
  if (playerScoreValue === 11 || computerScoreValue === 11) {
    gameState(playerScoreValue, computerScoreValue);
  }
}

function gameState(player, computer) {
  player == 11
    ? alert(`Player is the Winner with ${player} points`)
    : com == 11
    ? alert(`Computer is the Winner with ${computer} points`)
    : null;
	// Will the page when there is a winner
  document.location.reload();
}
