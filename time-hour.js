let time = new Date();
setInterval(() => {
  time = new Date();
}, 1000);

function showHour() {
  //const formatTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
  const formatTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  fill("black");
  text(formatTime, 20, 20);
}

export default showHour;
