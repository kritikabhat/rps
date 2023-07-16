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

function startPlayOnClick (userChoice) {
    computerChoice = randomChoice()
    let result = playRound(userChoice, computerChoice)
    updateScoreTally(result)
}

function updateScoreTally (result) {
    if (result === "You Lose!") {
        ++scoreComputer
        computerTally.textContent = `Player: ${scoreComputer}`
    } else if(result === "You Win!") {
        ++scoreUser
        userTally.textContent = `Computer: ${scoreUser}`
    }
}

function startGame () {
    for (let i = 0; i < 5; i++) {
        rockBtn.addEventListener('click', startPlayOnClick('rock'))
        paperBtn.addEventListener('click', startPlayOnClick('paper'))
        scissorsBtn.addEventListener('click', startPlayOnClick('scissors'))
    }

    if (scoreComputer > scoreUser) finalWinner= "Computer Wins!"
    else if (scoreComputer < scoreUser) finalWinner= "You win!"
    else finalWinner = "Draw!"
    
    finalTally.style.display = "flex"
    finalTally.textContent = finalWinner
}

// A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.