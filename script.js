
//randomly return rock, paper, or scissors
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1; // returns 1 - 3
    return randomNum === 1 ? 'rock' :randomNum === 2 ? 'paper' : 'scissors'
}
// a single round of the game , with player and computer selection

//better yet, instead of adding parameters to playRound(),
//  I can declare vars that hold the result of the computer and player's moves and use those,
//  the need to be dynamic in the parameters isn't needed
function playRound() {
    var computerSelection = computerPlay(); // <-- declared
    var playerSelection = prompt('What is your move?');
    //if comp wins, return the message
    if(computerSelection == 'rock' && playerSelection == 'scissors'){
        return `You lose! Computer's ${computerSelection}, beats your ${playerSelection}`
    }
    if(computerSelection == 'paper' && playerSelection == 'rock'){
        return `You lose! Computer's ${computerSelection}, beats your ${playerSelection}`
    }
    if(computerSelection == 'scissors' && playerSelection == 'paper'){
        return `You lose! Computer's ${computerSelection}, beats your ${playerSelection}`
    }
    if(computerSelection === playerSelection) {
        return `Draw. Your selection, ${playerSelection}, is the same as ${computerSelection}'s selection.`
    }
    return `You win, your move, ${playerSelection}, beats Computers's ${computerSelection}`
}


//func to where to store a looped playRound 5 times
function game() {
    //write loop
    for(let i = 1; i < 6; i ++){ //if i is 6, it's not less than 6, so it runs 1-5, correct
        //each iteration runs playRound and logs into console
        console.log(playRound());
    }
}


//eventlistener
const btns = document.querySelectorAll('.btn')
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.classList.add('clicked')
    })
})