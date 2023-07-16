const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

const userTally = document.getElementById('userTally')
const computerTally = document.getElementById('computerTally')
const finalTally = document.getElementById('finalTally') // finalTally.hidden = true initally. I have set display= none 

let scoreUser = 0
let scoreComputer = 0
let finalWinner = ""
let computerChoice = ""
let numberOfPlays = 0

function randomChoice () {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound (userChoice, computerChoice) {
    let result
    if (String(userChoice).toUpperCase() === "ROCK") {
        switch(String(computerChoice).toUpperCase()) {
            case "ROCK": 
                result = "Draw!"
                break; 
            case "PAPER": 
                result = "You Lose!"
                break; 
            case "SCISSORS": 
                result = "You Win!"
                break; 
            default: 
                result = "Invalid input!"
                break;
        }
    } else if (String(userChoice).toUpperCase() === "PAPER") {
        switch(String(computerChoice).toUpperCase()) {
            case "PAPER": 
                result = "Draw!"
                break; 
            case "ROCK": 
                result = "You Win!"
                break; 
            case "SCISSORS": 
                result = "You Lose!"
                break; 
            default: 
                result = "Invalid input!"
                break;
        }
    } else {
        switch(String(computerChoice).toUpperCase()) {
            case "SCISSORS": 
                result = "Draw!"
                break; 
            case "PAPER": 
                result = "You Win!"
                break; 
            case "ROCK": 
                result = "You Lose!"
                break; 
            default: 
                result = "Invalid input!"
                break;
        }
    }
    return result
}

rockBtn.addEventListener('click', () => startPlayOnClick('rock'))
paperBtn.addEventListener('click', () => startPlayOnClick('paper'))
scissorsBtn.addEventListener('click', () => startPlayOnClick('scissors'))

function startPlayOnClick (userChoice) {
    computerChoice = randomChoice()
    let thisWinner = playRound(userChoice, computerChoice)
    updateScoreTally(thisWinner)
}

function updateScoreTally (thisWinner) {
    numberOfPlays++;
    if (thisWinner === "You Lose!") {
        ++scoreComputer
        computerTally.textContent = `Computer: ${scoreComputer}`
    } else if(thisWinner === "You Win!") {
        ++scoreUser
        userTally.textContent = `Player: ${scoreUser}`
    }
    if (numberOfPlays === 5) declareWinner()
}

function declareWinner() {
    if (scoreComputer > scoreUser) finalWinner= "Computer Wins!"
    else if (scoreComputer < scoreUser) finalWinner= "You win!"
    else finalWinner = "Draw!"

    alert("Game has ended. Refresh page to try again!")
    
    /* finalTally.style.display = "flex"
    finalTally.textContent = finalWinner */
}