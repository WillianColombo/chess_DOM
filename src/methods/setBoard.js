import { PositionBoard } from "../class/PositionBoard.js"

export let board = []

export function setBoard(){
    for(let positionY = 0; positionY < 8; positionY++){
        for(let positionX = 0; positionX < 8; positionX++){
            board.push(new PositionBoard(positionX + 1, positionY + 1))
        }
    }
}
