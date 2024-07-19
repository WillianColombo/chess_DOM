import { getPositionBoard } from "../methods/getPositionBoard.js";
import { Piece } from "./piece.js";

export class Queen extends Piece {
    constructor(id, color, position) {
        super(id, color, position)
    }

    #absolutMovements() {
        let positionX = this.position.positionX
        let positionY = this.position.positionY
        
        let absolutMovements = []

        //Posições acima-esquerda (Bispo)
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

        //Posições acima-direita (Bispo)
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

        //Posições a abaixo-esquerda (Bispo)
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

        //Posições a abaixo-direita (Bispo)
        let absolutMovementsBelowRight = []
        while (positionX < 8 && positionY < 8) {
            positionX++
            positionY++
            absolutMovementsBelowRight.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsBelowRight.length > 0) {
            absolutMovements.push(absolutMovementsBelowRight)
        }
        positionX = this.position.positionX
        positionY = this.position.positionY

        //Posições acima (Torre)
        let absolutMovementsAbove = []
        while (positionY > 1) {
            positionY--
            absolutMovementsAbove.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsAbove.length > 0) {
            absolutMovements.push(absolutMovementsAbove)
        }
        positionX = this.position.positionX
        positionY = this.position.positionY

        //Posições abaixo (Torre)
        let absolutMovementsBelow = []
        while (positionY < 8) {
            positionY++
            absolutMovementsBelow.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsBelow.length > 0) {
            absolutMovements.push(absolutMovementsBelow)
        }
        positionX = this.position.positionX
        positionY = this.position.positionY

        //Posições a direita (Torre)
        let absolutMovementsRight = []
        while (positionX < 8) {
            positionX++
            absolutMovementsRight.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsRight.length > 0) {
            absolutMovements.push(absolutMovementsRight)
        }
        positionX = this.position.positionX
        positionY = this.position.positionY

        //Posições a esquerda (Torre)
        let absolutMovementsLeft = []
        while (positionX > 1) {
            positionX--
            absolutMovementsLeft.push({ positionX: positionX, positionY: positionY })
        }
        if (absolutMovementsLeft.length > 0) {
            absolutMovements.push(absolutMovementsLeft)
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
                    if (positionBoard.occupation.color !== this.color) {
                        movements.push(positionBoard)
                        break
                    } else break
                }
            }
        })
        return movements
    }
}