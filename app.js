let boxes = document.querySelector(".box");
let resetBtn = document.querySelector(".reset-btn");

let turnO = true; //playerX , playerO

const winPatterns = [
  [0, 1, 2],
  [1, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    box.innerText = "abcd";
  });
});
