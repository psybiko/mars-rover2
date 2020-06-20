const Position = require("../models/Position");

describe("Position", () => {
  test("should create a new Position instance", () => {
    const position = new Position(1, 3);
    expect(position).toBeInstanceOf(Position);
  });
});
