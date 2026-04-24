let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let randomNumber = Math.random() * 10
    
    if(randomNumber <=3) return "Rock"
        else if (randomNumber > 3 && randomNumber <= 6.5)
            return "Paper"
        else return "Scissors"
}

console.log(getComputerChoice())

function getHumanChoice () {
    return prompt("Pick one!")
}

console.log(getHumanChoice())