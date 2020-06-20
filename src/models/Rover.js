const Position = require("../models/Position");
const Direction = require("../models/Direction");

class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  static create(x, y, dir) {
    const position = Position.create(x, y);
    const direction = Direction.create(dir);
    return new Rover(position, direction);
  }

  turnRight() {
    this.direction.turnRight();
  }

  turnLeft() {
    this.direction.turnLeft();
  }

  display() {
    return `${this.x} ${this.y} ${this.direction};`;
  }
}

const rover1 = new Rover(1, 3, "N");
rover1.turnRight();
console.log(rover1.direction);

module.exports = Rover;
