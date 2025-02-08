console.log("Hello World")

function getComputerChoice() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // Use conditional logic to return "rock", "paper", or "scissors"
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice)