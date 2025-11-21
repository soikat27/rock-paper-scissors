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
    if (humanChoice === computerChoice)
    {
        console.log("Tie!");
    }

    else
    {
        switch(humanChoice)
        {
            case "rock":
                if (computerChoice === "paper")
                {
                    console.log("You lose! Paper beats Rock.");
                    computerScore++;
                }

                else 
                {
                    console.log("You win! Rock beats Scissors.");
                    humanScore++;
                }

                break;

            case "paper":
                if (computerChoice === "rock")
                {
                    console.log("You win! Paper beats Rock.");
                    humanScore++;
                }

                else
                {
                    console.log("You lose! Scissors beats paper.");
                    computerScore++;
                }

                break;

            case "Scissors":
                if (computerChoice === "rock")
                {
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                }

                else
                {
                    console.log("You win! Scissors beats paper.");
                    humanScore++;
                }

                break;
        }
    }
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

const rock = document.querySelector("button#rock");
function callRock (e)
{
    playRound("rock", getComputerChoice());
}
rock.addEventListener("click", callRock);