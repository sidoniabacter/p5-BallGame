export const SmilefaceHead = {
  x: 500,
  y: 715,
  size: 35,
  color: "yellow",
  isMoving: true,
  setIntervalId: 0,
  changeColor: false,
  speed: 15,
  sensX: 1,
  sensY: -1,
  init: function (x, y, speed = 15, size = 35, color = "yellow") {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
    this.color = color;
    this.setSpeed();
  },
  setSpeed: function () {
    this.resetSpeed();
    this.setIntervalId = setInterval(async () => {
      if (this.isMoving) {
        this.checkIfWallHit();
        this.checkIfPaddleHit(Paddle.x, Paddle.y, Paddle.width, Paddle.height);
        if (this.changeColor) {
          await simulareExecutieCevaPeServer();
          this.color = "blue";
          this.changeColor = false;
        } else {
          this.x = this.x + this.sensX;
          this.y = this.y + this.sensY;
        }
      }
    }, this.speed);
  },
  resetSpeed: function () {
    if (this.setIntervalId != 0) clearInterval(this.setIntervalId);
  },
  draw: function () {
    // HEAD
    fill(this.color);
    circle(this.x, this.y, this.size);

    // LEFT EYE
    circle(this.x - this.size / 5, this.y - this.size / 5, this.size / 5);
    fill("blue");
    circle(this.x - this.size / 5, this.y - this.size / 5, this.size / 10);
    fill(this.color);

    // RIGHT EYE
    circle(this.x + this.size / 5, this.y - this.size / 5, this.size / 5);
    fill("blue");
    circle(this.x + this.size / 5, this.y - this.size / 5, this.size / 10);
    fill(this.color);

    // NOSE
    fill("orange");
    triangle(
      this.x,
      this.y,
      this.x - this.size / 12.5,
      this.y + this.size / 12.5,
      this.x + this.size / 12.5,
      this.y + this.size / 12.5,
    );

    // MOUTH
    fill("red");
    arc(
      this.x,
      this.y + this.size / 5,
      this.size / 2.5,
      this.size / 3.6,
      0,
      PI,
    );
    fill(this.color);
  },
  checkIfWallHit: function () {
    if (this.y - this.size / 2 <= 0) this.sensY = 1;
    if (this.y + this.size / 2 >= boardHeigth) {
      this.isMoving = false;
      if (!balls.some((ball) => ball.isMoving)) gamePromiseReject("You Lost!");
    }
    if (this.x - this.size / 2 <= 0) this.sensX = 1;
    if (this.x + this.size / 2 >= boardWidth) this.sensX = -1;
  },
  checkIfPaddleHit: function (x, y, width, height) {
    // if (this.y - this.size / 2 <= 0 ) this.sensY = 1
    if (this.y + this.size / 2 >= y && this.x >= x && this.x <= x + width) {
      this.sensY = -1;
      return;
    }
    // if (this.x - this.size / 2 <= x + width && this.y >= y && this.y <= y + height) {
    //     this.sensX = 1
    //     return
    // }
    // if (this.x + this.size / 2 >= x && this.y >= y && this.y <= y + height) {
    //     this.sensX = -1
    //     return
    // }
  },
};
