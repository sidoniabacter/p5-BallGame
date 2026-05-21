import { balls } from "./ball.js";

export const boardWidth = 800;
export const boardHeigth = 600;

let gameMessage = "";

export function getGameMessage() {
  return gameMessage;
}

export function onWin() {
  gameMessage = "You Win!";

  balls.forEach((ball) => {
    ball.isMoving = false;
  });
}

export function onLose() {
  gameMessage = "You Lost!";
}

export function simulareExecutieCevaPeServer() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}
