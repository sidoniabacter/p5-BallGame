function testArrays() {
  let mySquares1 = [
    {
      x: 100,
      color: "red",
      value: "A",
    },
    {
      x: 160,
      color: "orange",
      value: "B",
    },
    {
      x: 220,
      color: "yellow",
      value: "C",
    },
    {
      x: 280,
      color: "green",
      value: "D",
    },
    {
      x: 340,
      color: "blue",
      value: "E",
    },
    {
      x: 400,
      color: "purple",
      value: "F",
    },
  ];

  // let mySquares1 = [100, 160, 220, 280, 340, 400]
  // let myColors1 = ["red", "orange", "yellow", "green", "blue", "purple"]
  // let myNumbers1 = ["A", "B", "C", "D", "E", "F"]

  let mySquares2 = [100, 160, 220, 280, 340, 400];
  let myColors2 = ["green", "red", "blue", "yellow", "orange", "cyan"];
  let myNumbers2 = ["12", "25", "36", "41", "59", "67"];
  // for (let i = 0; i < mySquares.length; i++) {
  //     fill(myColors[i])
  //     square(mySquares[i],100,50)
  // }
  mySquares1.forEach((squareObject) => {
    if (squareObject.color != "blue") {
      fill(squareObject.color);
      square(squareObject.x, 100, 50);

      fill("black");
      textSize(18);
      text(squareObject.value, squareObject.x + 20, 130);
    }
  });

  mySquares2.forEach((squareX, index) => {
    if (myNumbers2[index] % 2 != 0) {
      fill(myColors2[index]);
      square(squareX, 160, 50);

      fill("black");
      textSize(18);
      text(myNumbers2[index], squareX + 20, 190);
    }
  });

  myMatrix = [
    [100, 160, 220, 280, 340, 400],
    [100, 160, 220, 280, 340, 400],
    [100, 160, 220, 280, 340, 400],
  ];

  myMatrixColors = [
    ["red", "orange", "yellow", "green", "blue", "purple"],
    ["red", "orange", "yellow", "red", "blue", "purple"],
    ["red", "orange", "yellow", "green", "blue", "red"],
  ];

  myMatrixNumbers = [
    ["12", "25", "36", "41", "59", "67"],
    ["12", "25", "36", "41", "59", "67"],
    ["12", "25", "36", "41", "59", "67"],
  ];

  let squareY = 250;
  myMatrix.forEach((lineArray, lineIndex) => {
    lineArray.forEach((squareX, colIndex) => {
      if (myMatrixColors[lineIndex][colIndex] == "red") {
        fill(myMatrixColors[lineIndex][colIndex]);
        square(squareX, squareY, 50);

        fill("black");
        textSize(18);
        text(myMatrixNumbers[lineIndex][colIndex], squareX + 20, squareY + 30);
      }
    });
    squareY += 60;
  });
}
