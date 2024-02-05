const { Circle, Triangle, Square } = require("../lib/shapes.js");

describe("Triangle", () => {
  it("should render the correct shape", () => {
    const shape = new Triangle("green", "white", "lol");
    const values = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <!-- Background -->
  <polygon points="200,20 360,280 40,280" fill="green"/>
  <!-- Text -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="64" font-family="Arial">lol</text>
</svg>
`;

    expect(shape.render()).toEqual(values);
  });
});

describe("Square", () => {
  it("should render the correct shape", () => {
    const shape = new Square("red", "blue", "hey");
    const values = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <!-- Background -->
  <rect x="50" y="50" width="300" height="300" fill="red"/>
  <!-- Text -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="64" font-family="Arial">hey</text>
</svg>
`;

    expect(shape.render()).toEqual(values);
  });
});
