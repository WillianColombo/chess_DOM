import { board } from "./setBoard.js";

export function getPositionBoard(positionX, positionY){
    return board.find(positionBoard => 
        positionBoard.positionX === positionX && positionBoard.positionY === positionY)
}