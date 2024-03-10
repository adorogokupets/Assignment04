
function playerChoice (){
    let input
    do {
        input = String(prompt('To play the game choose rock, paper or scissors'))
        if (input !== 'rock' && input !== 'paper' && input !== 'scissors'){
            alert('Enter valid choice: rock, paper or scissors')
        }
    } while (input !== 'rock' && input !== 'paper' && input !== 'scissors')
    return input
}

function computerChoice (){
    let random = Math.round(Math.random() * 2 + 1)
    if (random === 1){
        return 'rock'
    }else if (random === 2){
        return 'paper'
    }else if (random === 3){
        return 'scissors'
    }
}

function startGame (){
    let plChoice = playerChoice()
    let coChoice = computerChoice()
    while (plChoice === coChoice){
        alert(`Your choice is ${plChoice} and computer choice is ${coChoice}. It\'s tie. Try one more time`)
        plChoice = playerChoice()
        coChoice = computerChoice()
        
    }   
    if((plChoice === 'rock' && coChoice === 'scissors') || 
       (plChoice === 'scissors' && coChoice === 'paper') || 
       (plChoice === 'paper' && coChoice === 'rock')){

        alert(`Your choice is ${plChoice} and computer choice is ${coChoice}. You Won !`)
        
       } else if ((coChoice === 'rock' && plChoice === 'scissors') || 
       (coChoice === 'scissors' && plChoice === 'paper') || 
       (coChoice === 'paper' && plChoice === 'rock')){

        alert(`Your choice is ${plChoice} and computer choice is ${coChoice}. Computer Won !`)
       } 
}

startGame()


