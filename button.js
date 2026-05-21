export const Button = {
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
