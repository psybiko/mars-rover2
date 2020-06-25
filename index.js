const Grid = require("./src/models/Grid");
const Rover = require("./src/models/Rover");

// const grid = Grid.create(5, 5);
// console.log("GRID: ", grid);

const rover1 = Rover.create(1, 2, "N");
rover1.instructions("LMLMLMLMM");
console.log("ROVER 1: ", rover1.display());
const rover2 = Rover.create(3, 3, "E");
rover2.instructions("MMRMMRMRRM");
console.log("ROVER 2: ", rover2.display());

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
