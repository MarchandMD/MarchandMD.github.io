const game = () => {
    let pScore = 0;
    let cScore = 0;



    const startGame = () => {

        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');



        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');


        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })

        })


        const computerOptions = ['rock', 'paper', 'scissors'];


        options.forEach(option => {

            option.addEventListener('click', function () {

                const computerNumber = Math.floor(Math.random() * 3);

                const computerChoice = computerOptions[computerNumber];


                setTimeout(() => {
                    compareHands(this.textContent, computerChoice)

                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 800);


                playerHand.style.animation = "shakePlayer 0.8s ease";
                computerHand.style.animation = "shakeComputer 0.8s ease";
            });
        });


    };

    const updateScoreboard = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie!";
            return;
        }

        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins!";
                pScore++;
                if (pScore == 5) {
                    updateScoreboard();
                    endGame();
                    return;
                } else {
                    updateScoreboard();
                }
                return;
            } else {
                winner.textContent = "Computer Wins!";
                cScore++;
                if (cScore == 5) {
                    updateScoreboard();
                    endGame();
                    return;
                } else {
                    updateScoreboard();
                }
                return;
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer Wins!";
                cScore++;
                if (cScore == 5) {
                    updateScoreboard();
                    endGame();
                    return;
                } else {
                    updateScoreboard();
                }
                return;
            } else {
                winner.textContent = "Player Wins!";
                pScore++;
                if (pScore == 5) {
                    updateScoreboard();
                    endGame();
                    return;
                } else {
                    updateScoreboard();
                }
                return;
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Wins!";
                cScore++;
                if (cScore == 5) {
                    updateScoreboard();
                    endGame();
                    return;
                } else {
                    updateScoreboard();
                }
                return;
            } else {
                winner.textContent = "Player Wins!";
                pScore++;
                if (pScore == 5) {
                    updateScoreboard();
                    endGame();
                    return;
                } else {
                    updateScoreboard();
                }
                return;
            }
        }



    }
    /* following the lead of https://github.com/DevEdwin, I added endGame() */
    const endGame = () => {
        const match = document.querySelector('.match');
        const end = document.querySelector('.end');
        const message = document.querySelector('.end h1');
        message.innerHTML = `<p>GAME OVER!</p><p>Player score: ${pScore}</p><p>Computer score: ${cScore}</p>`;
        match.classList.remove('fadeIn');
        end.classList.add('fadeIn');
    }

        //Added resetGame(), all else created by https://github.com/DevEdwin
    const resetGame = () => {
        const playAgainBtn = document.querySelector('.reset');
        const match = document.querySelector('.match');
        const end = document.querySelector('.end');
        const winner = document.querySelector('.winner');

        playAgainBtn.addEventListener('click', () => {
            end.classList.remove('fadeIn');
            match.classList.add('fadeIn');
            pScore = 0;
            cScore = 0;
            updateScoreboard();
            winner.textContent = "Choose an Option"
        })
    }



    startGame();
    playMatch();
    resetGame();

};

game();