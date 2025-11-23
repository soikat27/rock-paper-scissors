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

let humanScore    = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice)
{
    const score = document.querySelector(".score");
    const sBoard = document.querySelector(".scoreBoard");
    const winner = document.querySelector(".winner");

    if (humanChoice === computerChoice)
    {
        score.textContent = "Tie!";
        score.style.color = "whiteSmoke";
    }

    else
    {
        switch(humanChoice)
        {
            case "rock":
                if (computerChoice === "paper")
                {
                    score.textContent = "You lose! Paper beats Rock.";
                    score.style.color = "red";
                    computerScore++;
                }

                else 
                {
                    score.textContent = "You win! Rock beats Scissors.";
                    score.style.color = "green";
                    humanScore++;
                }

                break;

            case "paper":
                if (computerChoice === "rock")
                {
                    score.textContent = "You win! Paper beats Rock.";
                    score.style.color = "green";
                    humanScore++;
                }

                else
                {
                    score.textContent = "You lose! Scissors beats paper.";
                    score.style.color = "red";
                    computerScore++;
                }

                break;

            case "scissors":
                if (computerChoice === "rock")
                {
                    score.textContent = "You lose! Rock beats Scissors.";
                    score.style.color = "red";
                    computerScore++;
                }

                else
                {
                    score.textContent = "You win! Scissors beats paper.";
                    score.style.color = "green";
                    humanScore++;
                }

                break;
        }
    }
    // display the running score
    sBoard.textContent = `ScoreBoard:\nYour score: ${humanScore}; Computer score: ${computerScore}`;

    // display winner
    if (humanScore == 5 || computerScore == 5)
    {
        if (humanScore == 5)
        {
            winner.textContent = "You Win the Game!";
            winner.style.color = "green";
        }
        else
        {
            winner.textContent = "Computer Wins the Game!";
            winner.style.color = "red"
        }
    }
}

const rock     = document.querySelector("button#rock");
const paper    = document.querySelector("button#paper");
const scissors = document.querySelector("button#scissors");

function call(e)
{
    const btn = e.currentTarget.id;

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

rock.addEventListener("click", call);
paper.addEventListener("click", call);
scissors.addEventListener("click", call);

console.log(rock);