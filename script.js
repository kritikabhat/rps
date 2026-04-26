const gameSection = document.querySelector('.gameSection')
const scoreSection = document.querySelector('.scoreSection')
const currentRound = document.querySelector('.currentRound')

let numberOfRoundsElement = document.createElement('span')
let computerChoiceElement = document.createElement('span')
let humanChoiceElement = document.createElement('span')
let humanScoreElement = document.createElement('span')
let computerScoreElement = document.createElement('span')

const jsConfetti = new JSConfetti()
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
    if (numberOfRounds > 5) {
        e.target.disabled = true
        alert("Please refresh page to play again!")
        return
    }

    if (e.target.tagName === 'BUTTON') {
        ++numberOfRounds
        humanChoice = e.target.textContent.slice(3).trim().toUpperCase()
        playRound(humanChoice)

        numberOfRoundsElement.textContent = numberOfRounds
        currentRound.querySelector('#rounds').appendChild(numberOfRoundsElement)
    }
    if (numberOfRounds === 5) {
        pickWinner()
        ++numberOfRounds
    }
})

function playRound (humanChoice) {
    let computerChoice = getComputerChoice()

    computerChoiceElement.textContent = computerChoice
    humanChoiceElement.textContent = humanChoice
    currentRound.querySelector('#computerPick').appendChild(computerChoiceElement)
    currentRound.querySelector('#humanPicked').appendChild(humanChoiceElement)

    // if we assume this, we only need to check condition where PC loses
    let didPCWin = true

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
    if (humanScore > computerScore) {
        alert("You Won!")
        jsConfetti.addConfetti({
            emojis: ['🌈', '🎉', '🎈', '✨', '🍬', '🌸'],
        }).then(() => jsConfetti.addConfetti())
    }
    else if (computerScore > humanScore) {
        alert("PC Won!")
        jsConfetti.addConfetti({
            emojis: ['✌️', '👊', '✋'],
        }).then(() => jsConfetti.addConfetti())
    }
    else {
        alert("This time, it is a draw! Refresh page to try again!")
    }
}
