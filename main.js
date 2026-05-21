import { SmilefaceHead, initBalls, showBalls } from "./ball.js";
import { initBricks, showBricks } from "./brick.js";
import showHour from "./time-hour.js";

import { boardWidth, boardHeigth, getGameMessage } from "./config.js";

import { Paddle } from "./paddle.js";

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

window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;

// const p5Script = document.createElement("script");
// p5Script.src = "https://cdn.jsdelivr.net/npm/p5@1.11.11/lib/p5.min.js";
// document.body.appendChild(p5Script);
