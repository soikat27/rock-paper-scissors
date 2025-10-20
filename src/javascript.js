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

playRound(getHumanChoice(), getComputerChoice());
console.log(humanScore);
console.log(computerScore);