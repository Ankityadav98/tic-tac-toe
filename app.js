let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newgameBtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

console.dir(boxes);

let turnO = true;
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    count++;
    checkWinner();
    if (msgContainer.classList.contains("hide") && count === 9) {
      msg.innerText = `It's a DRAW! Please start a new game.`;
      msgContainer.classList.remove("hide");
    }
  });
});

newgameBtn.addEventListener("click", () => {
  enableBoxes();
  msgContainer.classList.add("hide");
  count = 0;
});

resetBtn.addEventListener("click", () => {
  enableBoxes();
  if (!msgContainer.classList.contains("hide")) {
    msgContainer.classList.add("hide");
  }
  count = 0;
});

const enableBoxes = () => {
  turnO = true;
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let pattern of win) {
    const pos1val = boxes[pattern[0]].innerText;
    const pos2val = boxes[pattern[1]].innerText;
    const pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        disableBoxes();
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};
console.log(count);
