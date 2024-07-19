import { getPositionBoard } from "../methods/getPositionBoard.js";
import { Piece } from "./piece.js";

export class Bishop extends Piece {
    constructor(id, color, position) {
        super(id, color, position)
    }

    #absolutMovements(){
        let positionX = this.position.positionX
        let positionY = this.position.positionY
        let absolutMovements = []

        //Posições acima-esquerda
        let absolutMovementsAboveLeft = []
        while (positionX > 1 && positionY > 1) {
            positionX--
            positionY--
            absolutMovementsAboveLeft.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsAboveLeft.length > 0) {
            absolutMovements.push(absolutMovementsAboveLeft)
        }
        positionX = this.position.positionX
        positionY = this.position.positionY

        //Posições acima-direita
        let absolutMovementsAboveRight = []
        while (positionX < 8 && positionY > 1) {
            positionX++
            positionY--
            absolutMovementsAboveRight.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsAboveRight.length > 0) {
            absolutMovements.push(absolutMovementsAboveRight)
        }
        positionX = this.position.positionX
        positionY = this.position.positionY

        //Posições a abaixo-esquerda
        let absolutMovementsBelowLeft = []
        while (positionX > 1 && positionY < 8) {
            positionX--
            positionY++
            absolutMovementsBelowLeft.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsBelowLeft.length > 0) {
            absolutMovements.push(absolutMovementsBelowLeft)
        }
        positionX = this.position.positionX
        positionY = this.position.positionY

        //Posições a abaixo-direita
        let absolutMovementsBelowRight = []
        while (positionX < 8 && positionY < 8) {
            positionX++
            positionY++
            absolutMovementsBelowRight.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsBelowRight.length > 0) {
            absolutMovements.push(absolutMovementsBelowRight)
        }

        return absolutMovements
    }

    getMovements() {
        const absolutMovements = this.#absolutMovements()
        let movements = []

        absolutMovements.forEach(array => {
            for (let element of array) {
                const positionBoard = getPositionBoard(element.positionX, element.positionY)
                if (!positionBoard.occupation) {
                    movements.push(positionBoard)
                } else {
                    if(positionBoard.occupation.color !== this.color){
                        movements.push(positionBoard)
                        break
                    } else break
                }
            }
        })
        return movements
    }
}