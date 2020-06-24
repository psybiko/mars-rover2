class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static create(x, y) {
    if (x < 0 || y < 0) {
      throw new Error("position cannot be smaller than grid size");
    } else {
      return `${x}, ${y}`;
    }
  }

  display() {
    return `${this.x}, ${this.y}`;
  }
}

module.exports = Position;
