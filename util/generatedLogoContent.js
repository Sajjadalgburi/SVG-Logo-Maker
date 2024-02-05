const { Circle, Triangle, Square } = require("../lib/shapes.js");

function generatedLogoContent({ shape, shapeColor, textContent, textColor }) {
  if (shape === "Circle") {
    const circle = new Circle(shapeColor, textColor, textContent);
    return circle.render();
  } else if (shape === "Triangle") {
    const triangle = new Triangle(shapeColor, textColor, textContent);
    return triangle.render();
  } else if (shape === "Square") {
    const square = new Square(shapeColor, textColor, textContent);
    return square.render();
  }
}

module.exports = generatedLogoContent;
