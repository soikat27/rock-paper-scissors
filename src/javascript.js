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