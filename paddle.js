import { boardHeigth } from "./config.js";

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
