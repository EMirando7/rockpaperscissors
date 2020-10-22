function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum === 1 ? 'Rock' :randomNum === 2 ? 'Paper' : 'Scissors'
}
function startGame(){
    let gameCheck = 0;
    let computerSelection = computerPlay();
    const btns = document.querySelectorAll('.btn')
    btns.forEach(btn => {
        btn.addEventListener('click', function initiate(e) {
            if(gameCheck === 0){
                const playerSelection = e.target;
                if(computerSelection == 'Rock' && playerSelection.textContent === 'Scissors'){
                    playerSelection.classList.add('clicked');
                    const loseCase1 = document.createElement('p');
                    loseCase1.textContent = `You lose! Computer's ${computerSelection}, beats your ${playerSelection.textContent}.`
                    document.body.appendChild(loseCase1);
                    btn.addEventListener('mouseleave', () => {
                        btn.classList.remove('clicked')});
                    btn.removeEventListener('click', initiate);
                    gameCheck++;
                    return
                }
                if(computerSelection === 'Paper' && playerSelection.textContent == 'Rock'){
                    playerSelection.classList.add('clicked');
                    const loseCase2 = document.createElement('p');
                    loseCase2.textContent = `You lose! Computer's ${computerSelection}, beats your ${playerSelection.textContent}.`
                    document.body.appendChild(loseCase2);
                    btn.addEventListener('mouseleave', () => {
                        btn.classList.remove('clicked')});
                    btn.removeEventListener('click', initiate);
                    gameCheck++;
                    return
                }
                if(computerSelection == 'Scissors' && playerSelection.textContent == 'Paper'){
                    playerSelection.classList.add('clicked');
                    const loseCase3 = document.createElement('p');
                    loseCase3.textContent = `You lose! Computer's ${computerSelection}, beats your ${playerSelection.textContent}`
                    document.body.appendChild(loseCase3);
                    btn.addEventListener('mouseleave', () => {
                        btn.classList.remove('clicked')});
                    btn.removeEventListener('click', initiate);
                    gameCheck++
                    return;
                }
                if(computerSelection === playerSelection.textContent) {
                    playerSelection.classList.add('clicked');
                    const drawCase = document.createElement('p');
                    drawCase.textContent =`Draw. Your selection, ${playerSelection.textContent}, is the same as ${computerSelection}'s selection.`
                    document.body.appendChild(drawCase);
                    btn.addEventListener('mouseleave', () => {
                        btn.classList.remove('clicked')});
                    btn.removeEventListener('click', initiate);
                    gameCheck++
                    return
                }
            }    
                const winCase = document.createElement('p');
                winCase.textContent = `You win, your move, ${playerSelection.textContent}, beats Computers's ${computerSelection}.`
                document.body.appendChild(winCase);

        })
    })
}