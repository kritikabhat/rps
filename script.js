let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let randomNumber = Math.random() * 10
    
    if(randomNumber <=3) return "ROCK"
        else if (randomNumber > 3 && randomNumber <= 6.5)
            return "PAPER"
        else return "SCISSORS"
}

function getHumanChoice () {
    return prompt("Pick one!")
}

function playRound () {
    let humanChoice = getHumanChoice().toUpperCase()
    let computerChoice = getComputerChoice()

    console.log("You Pick: " + humanChoice)
    console.log("Computer Picks: " + computerChoice)
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

function playGame () {
    for (let i = 0; i < 5; i ++) {
        playRound()
        console.log("Current scores:\nHuman: " + humanScore + " PC: " + computerScore)
    }

    (humanScore > computerScore) ? console.log("You Won!")
        : (computerScore > humanScore) ? console.log("PC Won!")
        : console.log("Draw!")
}

playGame()