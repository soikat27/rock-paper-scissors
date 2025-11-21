function getComputerChoice ()
{
    let choice = Math.floor((Math.random() * 3)) + 1;

    switch (choice)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return ""
    }
}

function getHumanChoice ()
{
    let choice = prompt("Please type your valid choice (rock/paper/scissors): ");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice)
{
    const score = document.querySelector(".score");
    const sBoard = document.querySelector(".scoreBoard");

    if (humanChoice === computerChoice)
    {
        score.textContent = "Tie!";
    }

    else
    {
        switch(humanChoice)
        {
            case "rock":
                if (computerChoice === "paper")
                {
                    score.textContent = "You lose! Paper beats Rock.";
                    computerScore++;
                }

                else 
                {
                    score.textContent = "You win! Rock beats Scissors.";
                    humanScore++;
                }

                break;

            case "paper":
                if (computerChoice === "rock")
                {
                    score.textContent = "You win! Paper beats Rock.";
                    humanScore++;
                }

                else
                {
                    score.textContent = "You lose! Scissors beats paper.";
                    computerScore++;
                }

                break;

            case "scissors":
                if (computerChoice === "rock")
                {
                    score.textContent = "You lose! Rock beats Scissors.";
                    computerScore++;
                }

                else
                {
                    score.textContent = "You win! Scissors beats paper.";
                    humanScore++;
                }

                break;
        }
    }
    // display the running score
    sBoard.textContent = `ScoreBoard:\nYour score: ${humanScore}; Computer score: ${computerScore}`;
}

// function playGame ()
// {
//     for (let round = 1; round <= 5; round++)
//     {
//         console.log("Round " + round + ":");

//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);

//         console.log(`ScoreBoard:\nYour score: ${humanScore}; Computer score: ${computerScore}`);
//     }

//     if (humanScore > computerScore)
//     {
//         console.log("You Win the Game!");
//     }

//     else if (humanScore < computerScore)
//     {
//         console.log("Computer Wins the Game!");
//     }

//     else
//     {
//         console.log("The Game Ended in a Tie!")
//     }

//     humanScore = 0;
//     computerScore = 0;
// }

// playRound(getHumanChoice(), getComputerChoice());

// add eventListeners to the buttons

    // querySelect the element
    // create a function that calls playRound with a humanChoice the buttons representing
    // prepare eventListener

const rock     = document.querySelector("button#rock");
const paper    = document.querySelector("button#paper");
const scissors = document.querySelector("button#scissors");

function callRock(e)
{
    const btn = e.target.id;

    switch (btn)
    {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
        default:
            break;
    }
}

rock.addEventListener("click", callRock);
paper.addEventListener("click", callRock);
scissors.addEventListener("click", callRock);