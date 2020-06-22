const Grid = require("./src/models/Grid");
const Position = require("./src/models/Position");
const Rover = require("./src/models/Rover");
const Direction = require("./src/models/Direction");

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

const rover1 = Rover.create(1, 2, "N");
rover1.instructions("LMLMLMLMM");
rover1.turnLeft;
rover1.display();
const rover2 = Rover.create(3, 3, "E");
rover2.instructions("MMRMMRMRRM");
rover2.display();
