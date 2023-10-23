const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
    console.log('  0 1 2');
    for (let i = 0; i < board.length; i++) {
        console.log(`${i} ${board[i].join(' ')}`);
    }
}

function makeMove(row, col) {
    if (board[row][col] === ' ') {
        board[row][col] = currentPlayer;
        return true;
    }
    return false;
}

function checkWin() {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (
            (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) ||
            (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer)
        ) {
            return true;
        }
    }

    // Check diagonals
    if (
        (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)
    ) {
        return true;
    }

    return false;
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function playGame() {
    printBoard();

    rl.question(`Player ${currentPlayer}, enter your move (row and column separated by space): `, (input) => {
        const [row, col] = input.split(' ').map(Number);

        if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            if (makeMove(row, col)) {
                if (checkWin()) {
                    printBoard();0,0
                    console.log(`Player ${currentPlayer} wins!`);
                    rl.close();
                } else {
                    switchPlayer();
                    playGame();
                }
            } else {
                console.log('Cell is already taken. Try again.');
                playGame();
            }
        } else {
            console.log('Invalid input. Please enter row and column between 0 and 2.');
            playGame();
        }
    });
}

playGame();