class Shape {
  constructor(color, textColor, text) {
    this.color = color;
    this.textColor = textColor;
    this.text = text;
  }
}

class Cirlce extends Shape {
  constructor(color, textColor, text) {
    super(color, textColor, text);
  }

  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
  <!-- Background -->
  <circle cx="150" cy="100" r="90" fill=${this.color}/>
  <!-- Text -->
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill=${this.textColor} font-size="48" font-family="Arial">${this.text}</text>
</svg>
`;
  }
}
