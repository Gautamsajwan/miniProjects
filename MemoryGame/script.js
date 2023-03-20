// Define the game board size and create an array to hold the card values
const BOARD_SIZE = 16;
let cardValues = [];

// Get DOM elements
const gameBoard = document.querySelector('.game-board');
const gameStats = document.querySelector('.game-stats');
const movesDisplay = document.querySelector('.moves');
const timerDisplay = document.querySelector('.timer');
const restartButton = document.querySelector('.game-restart');

// Initialize game state variables
let moves = 0;
let timer = null;
let seconds = 0;
let flippedCards = [];

// Create the game board
function createBoard() {
    // Initialize the card values
    cardValues = Array.from({length: BOARD_SIZE / 2}, (_, index) => index + 1);
    cardValues = cardValues.concat(cardValues);

    // Shuffle the card values
    cardValues.sort(() => Math.random() - 0.5);

    // Create the cards and add them to the game board
    for (let i = 0; i < BOARD_SIZE; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = cardValues[i];
        card.addEventListener('click', handleCardClick);
        gameBoard.appendChild(card);
    }
}

// Handle card clicks
function handleCardClick() {
    // Don't do anything if the card is already flipped or there are already 2 flipped cards
    if (this.classList.contains('flipped') || flippedCards.length === 2) {
        return;
    }

    // Flip the card and add it to the flipped cards array
    this.classList.add('flipped');
    flippedCards.push(this);
        // If there are 2 flipped cards, check if they match
        if (flippedCards.length === 2) {
            // Increment the moves counter
            moves++;
            movesDisplay.textContent = `Moves: ${moves}`;
    
            // If the cards match, keep them flipped and reset the flipped cards array
            if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
                flippedCards[0].classList.remove('flipped');
                flippedCards[1].classList.remove('flipped');
                flippedCards = [];
    
                // Check if the game is over
                if (gameBoard.querySelectorAll('.card:not(.flipped)').length === 0) {
                    endGame();
                }
            }
            // If the cards don't match, flip them back over after a short delay
            else {
                setTimeout(() => {
                    flippedCards[0].classList.remove('flipped');
                    flippedCards[1].classList.remove('flipped');
                    flippedCards = [];
                }, 1000);
            }
        }
    }
    
    // Handle game restart
    function handleRestartClick() {
        // Reset game state variables
        moves = 0;
        seconds = 0;
        flippedCards = [];
    
        // Reset game board
        while (gameBoard.firstChild) {
            gameBoard.removeChild(gameBoard.firstChild);
        }
        createBoard();
    
        // Reset game stats
        movesDisplay.textContent = `Moves: ${moves}`;
        timerDisplay.textContent = `Time: ${formatTime(seconds)}`;
    
        // Reset timer
        clearInterval(timer);
        timer = null;
    }
    
    // End the game
    function endGame() {
        // Stop the timer
        clearInterval(timer);
        timer = null;
    
        // Show a congratulations message
        setTimeout(() => {
            alert(`Congratulations! You completed the game in ${moves} moves and ${formatTime(seconds)}.`);
        }, 500);
    }
    
    // Format the time string
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    // Initialize the game
    createBoard();
    restartButton.addEventListener('click', handleRestartClick);
    
    // Start the timer
    timer = setInterval(() => {
        seconds++;
        timerDisplay.textContent = `Time: ${formatTime(seconds)}`;
    }, 1000);
    
