const gameSection = document.querySelector('.gameSection')
const scoreSection = document.querySelector('.scoreSection')
const currentRound = document.querySelector('.currentRound')

let numberOfRoundsElement = document.createElement('span')
let computerChoiceElement = document.createElement('span')
let humanScoreElement = document.createElement('span')
let computerScoreElement = document.createElement('span')

let humanScore = 0
let computerScore = 0
let humanChoice = ""
let numberOfRounds = 0

function getComputerChoice () {
    let randomNumber = Math.random() * 10
    if(randomNumber <=3) return "ROCK"
        else if (randomNumber > 3 && randomNumber <= 6.5)
            return "PAPER"
        else return "SCISSORS"
}

gameSection.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        ++numberOfRounds
        humanChoice = e.target.textContent.toUpperCase()
        playRound(humanChoice)
        console.log("Current scores:\nHuman: " + humanScore + " PC: " + computerScore)

        numberOfRoundsElement.textContent = numberOfRounds
        currentRound.querySelector('#rounds').appendChild(numberOfRoundsElement)
    }
    if (numberOfRounds === 5) // You also need buttons to stop responding & option to  reset the page after 5 rounds
        pickWinner()
})

function playRound (humanChoice) {
    let computerChoice = getComputerChoice()

    computerChoiceElement.textContent = computerChoice
    currentRound.querySelector('#computerPick').appendChild(computerChoiceElement)

    let didPCWin = true // assume PC wins

    if (humanChoice === computerChoice) {
        alert(`Both picked ${humanChoice}, this round was a Draw!`)
        return
    }

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") 
        didPCWin = false
    if (humanChoice === "PAPER" && computerChoice === "ROCK")
        didPCWin = false
    if (humanChoice === "SCISSORS" && computerChoice === "PAPER")
        didPCWin = false

    if (didPCWin) {
        ++computerScore
        alert(`Computer picked ${computerChoice}, they won this round!`)
    }
    else {
        ++humanScore
        alert(`Computer picked ${computerChoice}, you won this round!`)
    }


    computerScoreElement.textContent = computerScore
    humanScoreElement.textContent = humanScore
    scoreSection.querySelector('#computerScore').appendChild(computerScoreElement)
    scoreSection.querySelector('#humanScore').appendChild(humanScoreElement)
    
}

function pickWinner () {
    (humanScore > computerScore) ? alert("You Won!")
    : (computerScore > humanScore) ? alert("PC Won!")
    : alter("Draw!")
}

/**
 * 
 * Add some type of effects to show which button was selected by the user
 * 
 * add at the end, optionally
 *   Trivia: Did you know that the popular band, BTS is the official brand ambassadors of Rock, Paper, Scissors!
 */