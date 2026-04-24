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

let computerChoice = getComputerChoice()
let humanChoice = getHumanChoice().toUpperCase()


function playRound (humanChoice, computerChoice) {
    console.log("You Pick: " + humanChoice)
    console.log("Computer Picks: " + computerChoice)
    let didPCWin = true // assume PC wins

    if (humanChoice === computerChoice) {
        console.log("Draw!")
        return
    }

    if (humanChoice === "ROCK" && computerChoice === "SCISSORS") 
        didPCWin = false
    if (humanChoice === "PAPER" && computerChoice === "ROCK")
        didPCWin = false
    if (humanChoice === "SCISSORS" && computerChoice === "PAPER")
        didPCWin = false

    if (didPCWin) {
        console.log("PC wins!")
        ++computerScore
    } else {
        console.log("You win!")
        ++humanScore
    }
}

playRound(humanChoice, computerChoice)
console.log("Current scores:\nHuman: " + humanScore + " PC: " + computerScore)
