const gameSection = document.querySelector('.gameSection')
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
    }

    if (numberOfRounds === 5)
        pickWinner()
})

function playRound (humanChoice) {
    let computerChoice = getComputerChoice()

    // Need to show the computer choice and number of rounds on a line
    // console.log("Computer Picks: " + computerChoice)

    let didPCWin = true // assume PC wins

    if (humanChoice === computerChoice) return

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") 
        didPCWin = false
    if (humanChoice === "PAPER" && computerChoice === "ROCK")
        didPCWin = false
    if (humanChoice === "SCISSORS" && computerChoice === "PAPER")
        didPCWin = false

    if (didPCWin) ++computerScore
    else ++humanScore
}

function pickWinner () {
    (humanScore > computerScore) ? console.log("You Won!")
    : (computerScore > humanScore) ? console.log("PC Won!")
    : console.log("Draw!")
}

/**
 * After each round, use altert to tell who won
 * Update score in the "current scores" section
 * To show final scores, add a new div
 * 
 * Add some type of effects to show which button was selected by the user
 * 
 * add at the end, optionally
 *             Trivia: Did you know that the popular band, BTS is the official
            brand ambassadors of Rock, Paper, Scissors!
 */