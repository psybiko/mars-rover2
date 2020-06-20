class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    return `${this.x} ${this.y}`;
  }
}

module.exports = Position;
