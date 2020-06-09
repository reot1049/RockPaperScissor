let playerScore;
let computerScore;
let match;
let computerNum;
let arr = ["rock", "paper", "scissor"];
function computerPlay() {
    let computerPick = Math.random();
    if(computerPick <= 0.33)
    {
        return "rock";
    }
    else if((computerPick >= 0.33) && (computerPick <= 0.66))
    {
        return "paper";
    }
    else
    {
        return "scissor";
    }
}

function play(playerSelection, computerSelection) {
    match = 0;
    computerNum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        if(playerSelection.toLowerCase() != arr[i])
        {
            match++;
        }
    }
    if(match == 3)
    {
        console.log("Your didn't choose either rock, paper, nor scissor. Try again!");
    }
    else if(computerSelection == playerSelection.toLowerCase())
    {
        console.log("You chose " + playerSelection.toLowerCase() + " and the computer chose "
            + computerSelection + ". " + playerSelection.toLowerCase() + " equals to " + computerSelection
            + " score is you-" + playerScore + " computer-" + computerScore + ".");
    }
    else if((computerSelection <  playerSelection.toLowerCase()) || (computerSelection == "rock" && playerSelection.toLowerCase() == "scissor"))
    {
        computerScore++;
        console.log("You chose " + playerSelection.toLowerCase() + " and the computer chose "
            + computerSelection + ". " + playerSelection.toLowerCase() + " loses to " + computerSelection
            + " score is you-" + playerScore + " computer-" + computerScore + ".");
    }
    else if((playerSelection.toLowerCase() < computerSelection) || (computerSelection == "scissor" && playerSelection.toLowerCase() == "rock"))
    {
        playerScore++;
        console.log("You chose " + playerSelection.toLowerCase() + " and the computer chose "
        + computerSelection + ". " + playerSelection.toLowerCase() + " beats " + computerSelection
        + " score is you-" + playerScore + " computer-" + computerScore + ".");
    }
}

function game() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("What do you choose?"); 
    computerScore = 0;
    playerScore = 0;
    while((computerScore < 5) || (playerScore < 5))
    {
        play(playerSelection, computerSelection);
        console.log(playerScore + " " + computerScore);
        computerSelection = computerPlay();
        playerSelection = prompt("What do you choose?"); 
    }
    if(computerScore == 5)
    {
        console.log("Computer won!");
    }
    else if(playerScore == 5)
    {
        console.log("You won!");
    }
}

game();