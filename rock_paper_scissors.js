var myArray = ["Rock", "Paper", "Scissors"];
var playerSelection = "Rock";
var computerSelection;
var playerScore = 0;
var computerScore = 0;

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

        
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if( playerSelection === computerSelection) {
        console.log("Tie game!")
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){ 
        playerScore = ++playerScore;
    }
    else( 
        computerScore = ++computerScore);
    if(++playerScore) {
        console.log("You won!")
    } else if(++computerScore) {
        console.log("You lost!")
    } else(console.log("You tied"))
}

function displayResults() {
    console.log(playerScore, computerScore);
}
