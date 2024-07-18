import { getPositionBoard } from "../methods/getPositionBoard.js";
import { Piece } from "./piece.js";

export class Rook extends Piece {
    constructor(id, color, position) {
        super(id, color, position)
    }

    #absolutMovements() {
        let positionX = this.position.positionX
        let positionY = this.position.positionY
        let absolutMovements = []


        //Posições acima
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

        //Posições abaixo
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

        //Posições a direita
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

        //Posições a esquerda
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