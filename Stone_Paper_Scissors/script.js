const cards = [...document.querySelectorAll('.card')] // using the spread operator to convert the nodelist into an array
const playerScoreDiv = document.querySelector('.pScore')
const compScoreDiv = document.querySelector('.cScore')
const resultDiv = document.querySelector('.result')

let pScore = 0, cScore = 0

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    let index = Math.floor(Math.random() * 3)
    return options[index]
}

const updateState = (result) => {
    playerScoreDiv.innerText = pScore
    compScoreDiv.innerText = cScore
    resultDiv.innerText = result
}

const compare = (playerChoice, computerChoice) => {
    let p1 = playerChoice, p2 = computerChoice
    console.log('computer = ',p2)
    console.log('player = ',p1)

    let ans = ''

    if((p1 == 'rock' && p2 == 'scissors') || (p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock')) {
        ans = 'player wins'
        pScore++
    } else if(p1 == p2) {
        ans = 'its a tie'
    } else {
        ans = 'computer wins'
        cScore++
    }
    updateState(ans)
}

const getChoices = (playerChoice) => {
    let computerChoice = getComputerChoice()
    compare(playerChoice, computerChoice)
}

const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', () => {
    playerScoreDiv.innerText = 0
    compScoreDiv.innerText = 0
    resultDiv.innerText = '--'

    pScore = 0
    cScore = 0
})

const playGame = () => {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            getChoices(card.dataset.name)
        })
    })
}

playGame()