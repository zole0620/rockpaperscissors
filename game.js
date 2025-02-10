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

console.log(getComputerChoice());

function getHumanChoice() {
    // Use prompt to get the user's input
    let userInput = prompt("Enter your choice: rock, paper, or scissors");

    // Convert the input to lowercase to make it case-insensitive
    userInput = userInput.toLowerCase();

    // Validate the input
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput; // Return the valid choice
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors."); // Notify the user of invalid input
        return getHumanChoice(); // Recursively ask for input again
    }
}
