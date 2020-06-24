const Grid = require("./src/models/Grid");
const Rover = require("./src/models/Rover");

/*
Input: 

5 5 
1 2 N 
LMLMLMLMM 
33E 
MMRMMRMRRM

Expected Output:

1 3 N
5 1 E

*/

// connect grid to the rover
// if the position of the rover is bigger than the x and y values of the grid, then throw an error
// pass instructions to the rover

const grid = Grid.create(5, 5);
console.log(grid.display());
const rover1 = Rover.create(4, 4, "N");
rover1.instructions("LMLMLMLMM");
rover1.turnLeft;
console.log(rover1.display());

// const rover2 = Rover.create(3, 3, "E");
// rover2.instructions("MMRMMRMRRM");
// console.log(rover2.display());
