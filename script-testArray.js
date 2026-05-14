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

  let mySquares2 = [
    {
      x: 100,
      color: "red",
      value: 11,
    },
    {
      x: 160,
      color: "orange",
      value: 12,
    },
    {
      x: 220,
      color: "yellow",
      value: 33,
    },
    {
      x: 280,
      color: "green",
      value: 43,
    },
    {
      x: 340,
      color: "blue",
      value: 53,
    },
    {
      x: 400,
      color: "purple",
      value: 63,
    },
  ];

  // let mySquares1 = [100, 160, 220, 280, 340, 400];
  // let myColors1 = ["red", "orange", "yellow", "green", "blue", "purple"];
  // let myNumbers1 = ["A", "B", "C", "D", "E", "F"];

  // let mySquares2 = [100, 160, 220, 280, 340, 400];
  // let myColors2 = ["green", "red", "blue", "yellow", "orange", "cyan"];
  // let myNumbers2 = ["11", "22", "33", "43", "53", "63"];
  // for (let i = 0; i < mySquares.length; i++) {
  // fill (myColors[i])
  //   square(mySquares[i], 100, 50);
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

  mySquares2.forEach((squareObject) => {
    if (squareObject.value % 2 == 1) {
      fill(squareObject.color);
      square(squareObject.x, 160, 50);
      fill("black");
      textSize(18);
      text(squareObject.value, squareObject.x + 20, 190);
    }
  });

  myMatrix = [
    [100, 160, 220, 280, 340, 400],
    [100, 160, 220, 280, 340, 400],
    [100, 160, 220, 280, 340, 400],
  ];

  myMatrixColors = [
    ["red", "orange", "yellow", "green", "blue", "purple"],
    ["red", "orange", "yellow", "green", "blue", "purple"],
    ["red", "orange", "yellow", "green", "blue", "purple"],
  ];

  myMatrixNumbers = [
    ["11", "22", "33", "43", "53", "63"],
    ["11", "22", "33", "43", "53", "63"],
    ["11", "22", "33", "43", "53", "63"],
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
