class Direction {
  constructor(value) {
    this.value = value;
  }

  static create(value) {
    const directions = ["N", "E", "S", "W"];
    if (directions.includes(value)) {
      return new Direction(value);
    } else {
      throw new Error("This isn't a valid direction.");
    }
  }

  static rightMapper = {
    N: "E",
    E: "S",
    S: "W",
    W: "N",
  };

  static leftMapper = {
    N: "W",
    W: "S",
    S: "E",
    E: "N",
  };

  turnRight() {
    const newDirection = Direction.rightMapper[this.value];
    this.value = newDirection;
  }

  turnLeft() {
    const newDirection = Direction.leftMapper[this.value];
    this.value = newDirection;
  }

  display() {
    return this.value;
  }
}

module.exports = Direction;
