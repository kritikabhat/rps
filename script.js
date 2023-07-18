const computerTally = document.getElementById('computerTally')
const finalTally = document.getElementById('finalTally')
const paperBtn = document.getElementById('paperBtn')
const rockBtn = document.getElementById('rockBtn')
const roundWon = document.getElementById('roundWon')
const scissorsBtn = document.getElementById('scissorsBtn')
const userTally = document.getElementById('userTally')

let computerChoice = ""
let finalWinner = ""
let scoreComputer = 0
let scoreUser = 0

function randomChoice () {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound (userChoice, computerChoice) {
    let roundWinner, winningChoice
    if (String(userChoice).toUpperCase() === "ROCK") {
        switch(String(computerChoice).toUpperCase()) {
            case "ROCK": 
                roundWinner = "Draw!"
                winningChoice = "Draw"
                break; 
            case "PAPER": 
                roundWinner = "You Lose!"
                winningChoice = "Paper Won"
                break; 
            case "SCISSORS": 
                roundWinner = "You Win!"
                winningChoice = "Rock Won"
                break; 
        }
    } else if (String(userChoice).toUpperCase() === "PAPER") {
        switch(String(computerChoice).toUpperCase()) {
            case "PAPER": 
                roundWinner = "Draw!"
                winningChoice = "Draw"
                break; 
            case "ROCK": 
                roundWinner = "You Win!"
                winningChoice = "Paper Won"
                break; 
            case "SCISSORS": 
                roundWinner = "You Lose!"
                winningChoice = "Scissors Won"
                break; 
        }
    } else {
        switch(String(computerChoice).toUpperCase()) {
            case "SCISSORS": 
                roundWinner = "Draw!"
                winningChoice = "Draw"
                break; 
            case "PAPER": 
                roundWinner = "You Win!"
                winningChoice = "Scissors Won"
                break; 
            case "ROCK": 
                roundWinner = "Rock Won"
                break; 
        }
    }
    return { roundWinner, winningChoice }
}

paperBtn.addEventListener('click', () => startPlayOnClick('paper'))
rockBtn.addEventListener('click', () => startPlayOnClick('rock'))
scissorsBtn.addEventListener('click', () => startPlayOnClick('scissors'))

function startPlayOnClick (userChoice) {
    computerChoice = randomChoice()
    let { roundWinner, winningChoice} = playRound(userChoice, computerChoice)
    updateScoreTally(roundWinner)
    showRoundWinner(winningChoice)
}

function showRoundWinner(winningChoice) {
    if (winningChoice === undefined || winningChoice === null) return
    roundWon.style.border = "1px solid black"
    roundWon.style.borderRadius = "8px"
    roundWon.style.display = "flex"
    roundWon.style.padding = "10px"
    roundWon.textContent = winningChoice
}

function showFinalTally(finalWinner) {
    finalTally.style.border = "1px solid black"
    finalTally.style.borderRadius = "8px"
    finalTally.style.display = "flex"
    finalTally.style.padding = "10px"
    finalTally.textContent = finalWinner
}

function updateScoreTally (roundWinner) {
    if (roundWinner === "You Lose!") {
        ++scoreComputer
        computerTally.textContent = `Computer: ${scoreComputer}`
    } else if(roundWinner === "You Win!") {
        ++scoreUser
        userTally.textContent = `Player: ${scoreUser}`
    }
    if (scoreComputer === 5 || scoreUser === 5) {
        declareWinner(scoreComputer, scoreUser)
    }
}

function declareWinner(scoreComputer, scoreUser) {
    if (scoreComputer > scoreUser) finalWinner = "Computer Wins!"
    else finalWinner= "You win!"
    showFinalTally(finalWinner)
    alert("Game has ended. Refresh page to try again!")
}