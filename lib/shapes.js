class Shape {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
}

class Circle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <!-- Background -->
  <circle cx="200" cy="150" r="135" fill="${this.color}"/>
  <!-- Text -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="64" font-family="Arial">${this.text}</text>
</svg>
`;
  }
}

class Triangle extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <!-- Background -->
  <polygon points="200,20 360,280 40,280" fill="${this.color}"/>
  <!-- Text -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="64" font-family="Arial">${this.text}</text>
</svg>
`;
  }
}

class Square extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
  <!-- Background -->
  <rect x="50" y="50" width="300" height="300" fill="${this.color}"/>
  <!-- Text -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="64" font-family="Arial">${this.text}</text>
</svg>
`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
