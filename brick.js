import { balls } from "./ball.js";
import { onWin } from "./config.js";

let bricks = [];

const numbersOfBricksByRow = 5;
const numbersOfBricksByColumn = 3;

const Brick = {
  x: 0,
  y: 0,
  color: [0, 0, 0],
  height: 0,
  width: 0,
  display: true,
  init: function (x, y, color, height, width) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
  },
  draw: function () {
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.x, this.y, this.width, this.height);
  },
  checkIfHit: function (ballX, ballY, ballRay) {
    if (
      this.display &&
      ballY - ballRay <= this.y + this.height &&
      ballY + ballRay >= this.y &&
      ballX + ballRay >= this.x &&
      ballX - ballRay <= this.x + this.width
    ) {
      this.display = false;
      return true;
    }
    return false;
  },
};

export function initBricks() {
  const marignLR = 800 / 20;
  const paddingBetweenCols = 800 / 30;
  const brickWidth =
    (800 - 2 * marignLR - (numbersOfBricksByRow - 1) * paddingBetweenCols) /
    numbersOfBricksByRow;
  const marignTop = 80;
  const paddingBetweenRows = 40;
  for (let rowIndex = 0; rowIndex < numbersOfBricksByColumn; rowIndex++) {
    bricks.push([]);
    for (let colIndex = 0; colIndex < numbersOfBricksByRow; colIndex++) {
      const brick = Object.create(Brick);
      brick.init(
        marignLR + colIndex * (brickWidth + paddingBetweenCols),
        marignTop + rowIndex * paddingBetweenRows,
        [
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
        ],
        30,
        brickWidth,
      );
      bricks[rowIndex].push(brick);
    }
  }
  console.log("bricks", bricks);
}

export function showBricks() {
  let allGone = true;
  bricks.forEach((bricksRow) => {
    bricksRow.forEach((brick) => {
      balls.forEach((ball) => {
        if (brick.checkIfHit(ball.x, ball.y, ball.size / 2)) {
          if (ball.speed > 1) ball.speed = ball.speed - 1;
          ball.setSpeed();
        }
      });
      if (brick.display) {
        allGone = false;
        brick.draw();
      }
    });
  });
  console.log(allGone);
  if (allGone) onWin();
}
