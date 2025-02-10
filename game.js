// Global variables to track scores
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function to get the human's choice
function getHumanChoice() {
    let userInput = prompt("Enter your choice: rock, paper, or scissors");
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Ask again if input is invalid
    }
}

// Test the functions
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log("Human choice:", humanChoice);
console.log("Computer choice:", computerChoice);

// Example of updating scores (this will be expanded in later steps)
if (humanChoice === computerChoice) {
    console.log("It's a tie!");
} else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
) {
    console.log("Human wins this round!");
    humanScore++; // Increment human score
} else {
    console.log("Computer wins this round!");
    computerScore++; // Increment computer score
}

// Log the scores
console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);