class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static create(x, y) {
    if (x < 0 || y < 0) {
      throw new Error("grid size cannot be smaller than 0, 0");
    }
    return new Grid(x, y);
  }

  display() {
    return `${this.x}, ${this.y}`;
  }
}

module.exports = Grid;
