const Position = require("../models/Position");
const Direction = require("../models/Direction");

class Rover {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  static create(x, y, dir) {
    const position = new Position(x, y);
    const direction = Direction.create(dir);
    return new Rover(position, direction);
  }

  turnRight() {
    this.direction.turnRight();
  }

  turnLeft() {
    this.direction.turnLeft();
  }

  moveForward() {
    if (this.direction.value === "N") {
      this.position.y += 1;
    } else if (this.direction.value === "W") {
      this.position.x -= 1;
    } else if (this.direction.value === "S") {
      this.position.y -= 1;
    } else if (this.direction.value === "E") {
      this.position.x += 1;
    }
  }

  instruction(i) {
    if (i === "L") {
      this.turnLeft();
    } else if (i === "R") {
      this.turnRight();
    } else if (i === "M") {
      this.moveForward();
    }
  }

  instructions(instruction) {
    return instruction
      .split("")
      .forEach((instruction) => this.instruction(instruction));
  }

  display() {
    return `${this.position.x} ${this.position.y} ${this.direction.value}`;
  }
}

module.exports = Rover;
