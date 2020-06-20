const Position = require("../models/Position");
const Direction = require("../models/Direction");

class Rover {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }

  static create(x, y, direction) {
    const position = new Position(x, y);
    const direction = new Direction(direction);
    return new Rover(position, direction);
  }
}
