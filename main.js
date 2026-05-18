import { SmilefaceHead } from "./ball.js";

import {
  boardWidth,
  boardHeigth,
  balls,
  Paddle,
  simulareExecutieCevaPeServer,
  onWin,
  getGameMessage,
} from "./config.js";

// const boardWidth = 800;
// const boardHeigth = 600;

let bricks = [];
// let balls = [];

// let gamePromiseResolve = null;
// let gamePromiseReject = null;
// let gameOver = "";

const numbersOfBricksByRow = 5;
const numbersOfBricksByColumn = 3;
const numberOfBalls = 5;

// function simulareExecutieCevaPeServer() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 5000);
//   }).then(() => {});
// }

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

let time = new Date();
setInterval(() => {
  time = new Date();
}, 1000);

const Button = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  color: "red",
  text: "button",
  textColor: "white",
  textPadding: 20,
  init: function (x, y, width, height, color, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.text = text;
  },
  draw: function () {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);

    fill(this.textColor);
    text(this.text, this.x + this.textPadding, this.y + this.textPadding);
  },
  checkIfClicked: function (callback) {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      callback();
    }
  },
};

// const startButton = Object.create(Button)
// startButton.init(200, 400, 80, 30, "green", "START")

// const stopButton = Object.create(Button)
// stopButton.init(600, 400, 70, 30, "red", "STOP")

function setup() {
  createCanvas(boardWidth, boardHeigth);
  initBricks();
  initBalls();

  //   simulareExecutieCevaPeServer().then(() => {
  //     onWin();
  //   });
}

function draw() {
  background("white");

  showBricks();
  showBalls();

  Paddle.draw();

  showHour();

  const gameMessage = getGameMessage();
  if (gameMessage.length >= 0) {
    fill("black");
    textSize(40);
    text(gameMessage, 400, 400);
    textSize(12);
  }

  // startButton.draw()
  // stopButton.draw()
}

function mousePressed() {
  // startButton.checkIfClicked(() => {
  //    smilefaceHead.init()
  //    smilefaceHead.isMoving = true
  //    smilefaceHead.timeOutId = setTimeout(() => {
  //     smilefaceHead.isMoving = false
  //    }, 4700)
  // })
  // stopButton.checkIfClicked(() => {
  //     smilefaceHead.isMoving = false
  // })
}

function initBricks() {
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

function showBricks() {
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

function initBalls() {
  for (let ballIndex = 0; ballIndex < numberOfBalls; ballIndex++) {
    const ball = Object.create(SmilefaceHead);
    ball.init(Math.floor(Math.random() * boardWidth), 500);
    if (ballIndex == 0) ball.changeColor = true;

    balls.push(ball);
  }
}

function showBalls() {
  balls.forEach((ball) => {
    ball.draw();
  });
}

function showHour() {
  //const formatTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
  const formatTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  fill("black");
  text(formatTime, 20, 20);
}

window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;

// const p5Script = document.createElement("script");
// p5Script.src = "https://cdn.jsdelivr.net/npm/p5@1.11.11/lib/p5.min.js";
// document.body.appendChild(p5Script);
