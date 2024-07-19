import { getPositionBoard } from "../methods/getPositionBoard.js";
import { Piece } from "./piece.js";

export class Knight extends Piece {
    constructor(id, color, position) {
        super(id, color, position)
    }

    #absolutMovements(){
        let positionX = this.position.positionX
        let positionY = this.position.positionY
        
        let absolutMovements = [
            {positionX: positionX - 1, positionY: positionY - 2},
            {positionX: positionX - 2, positionY: positionY - 1},
            {positionX: positionX + 1, positionY: positionY - 2},
            {positionX: positionX + 2, positionY: positionY - 1},
            {positionX: positionX - 2, positionY: positionY + 1},
            {positionX: positionX - 1, positionY: positionY + 2},
            {positionX: positionX + 2, positionY: positionY + 1},
            {positionX: positionX + 1, positionY: positionY + 2},
        ]

        return absolutMovements.filter(element => 
            element.positionX >= 1 && 
            element.positionX <= 8 && 
            element.positionY >= 1 && 
            element.positionY <= 8)
    }

    getMovements(){
        const absolutMovements = this.#absolutMovements()
        let movements = []

        absolutMovements.forEach(position => {
            const positionBoard = getPositionBoard(position.positionX, position.positionY)
            if (!positionBoard.occupation) {
                movements.push(positionBoard)
            } else {
                if(positionBoard.occupation.color !== this.color){
                    movements.push(positionBoard)
                }
            }
        })
        return movements
    }
}