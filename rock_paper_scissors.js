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
        console.log(`Tie game! ${playerScore} - ${computerScore}`)
    } else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        playerScore = ++playerScore
        console.log(`You win! ${playerScore} - ${computerScore}.`)
        return playerScore;
    } else if(
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ){
        computerScore = ++computerScore;
        console.log(`You lose! ${playerScore} - ${computerScore}.`);
        return computerScore;
    }
}

function gameOver(){
    if(playerScore === 5 || computerScore === 5){
        console.log("Game over!");
        return playerScore == 0 || computerScore == 0;
    }
}