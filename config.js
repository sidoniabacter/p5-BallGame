export const boardWidth = 800;
export const boardHeigth = 600;

export const balls = [];

export const Paddle = {
  width: 100,
  height: 40,
  color: "black",
  x: 0,
  y: boardHeigth - 50,
  draw: function () {
    this.x = mouseX - this.width / 2;
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  },
};

let gameMessage = "";

export function getGameMessage() {
  return gameMessage;
}

export function onWin() {
  balls.forEach((ball) => {
    ball.isMoving = false;
  });
  gameMessage = "You Win!";
}

export function onLose() {
  gameMessage = "You Lost!";
}

export function simulareExecutieCevaPeServer() {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
}
