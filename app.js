// Current player
let player = "0";
let gameOver = false;
let winner = "";
let drawMatch = 0;
let count = 0;
// change player
const changePlayer = () => (player == "X") ? player = "0" : player = "X";
//win condition
let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];



const checkWin = (box) => {
    let boxes = document.querySelectorAll(".box");
    winCondition.forEach(e => {
        for (let i = 0; i < e.length; i++) {
            if (boxes[e[0]].innerHTML == boxes[e[1]].innerHTML && boxes[e[0]].innerHTML == boxes[e[2]].innerHTML && boxes[e[0]].innerHTML != "") {
                gameOver = true;
                drawMatch = 0;
                winner = boxes[e[0]].innerHTML;
                showGameover();
            }
        }

    })
}
let boxes = document.querySelectorAll(".box");
boxes.forEach(e => {
    e.addEventListener("click", () => {
        count++;
        if (count == 9) {
            gameOver = true;
            drawMatch = 1;
            showGameover();
        };
        changePlayer();
        e.innerHTML = player;
        checkWin(boxes[e.id]);
    })
})

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    window.location.reload();
})



const showGameover = () => {
    const info = document.querySelector(".info");
    const board = document.querySelector(".board");
    const gameOver = document.querySelector(".gameOver");
    if (gameOver && drawMatch == 0) {
        info.innerHTML = winner + " won the game";
    }
    if (gameOver && drawMatch == 1) {
        info.innerHTML = "Game is draw";
    }
    board.style.display = "none";
    gameOver.style.display = "flex";
}
