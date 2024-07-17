const PositionBoard = require("./class/board");
const Piece = require("./class/piece");

const position1A = new PositionBoard(1, 'A')
const position2A = new PositionBoard(2, 'A')

const tower = new Piece('tower1', 'black', position1A)

tower.move(position2A)

console.log(tower)
console.log(position1A)
console.log(position2A)