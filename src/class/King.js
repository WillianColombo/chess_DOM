import { getPositionBoard } from "../methods/getPositionBoard.js";
import { pieces } from "../methods/setPieces.js";
import { Bishop } from "./Bishop.js";
import { Piece } from "./piece.js";
import { Queen } from "./Queen.js";
import { Rook } from "./Rook.js";

export class King extends Piece {
    constructor(id, color, position) {
        super(id, color, position)
    }

    #absolutMovements() {
        let positionX = this.position.positionX
        let positionY = this.position.positionY

        let absolutMovements = [
            { positionX: positionX - 1, positionY: positionY - 1 },
            { positionX: positionX, positionY: positionY - 1 },
            { positionX: positionX + 1, positionY: positionY - 1 },
            { positionX: positionX - 1, positionY: positionY },
            { positionX: positionX + 1, positionY: positionY },
            { positionX: positionX - 1, positionY: positionY + 1 },
            { positionX: positionX, positionY: positionY + 1 },
            { positionX: positionX + 1, positionY: positionY + 1 },
        ]

        return absolutMovements.filter(element =>
            element.positionX >= 1 &&
            element.positionX <= 8 &&
            element.positionY >= 1 &&
            element.positionY <= 8)
    }

    getMovements() {
        let absolutMovements = this.#absolutMovements()
        let movements = []

        let checkMovements = []
        pieces.forEach(piece => {
            if (!(piece instanceof King) && piece.color !== this.color) {
                let pieceMovements = piece.getMovements()
                pieceMovements.forEach(position => {
                    absolutMovements.forEach(absolutPosition => {
                        if (position.positionX === absolutPosition.positionX && position.positionY === absolutPosition.positionY) {
                            checkMovements.push(absolutPosition)
                        }
                    })
                })
            }
        })
        if (checkMovements.length > 0) {
            checkMovements.forEach(checkPosition => {
                absolutMovements = absolutMovements.filter(absolutPosition => absolutPosition !== checkPosition)
            })
        }

        absolutMovements.forEach(position => {
            const positionBoard = getPositionBoard(position.positionX, position.positionY)
            if (!positionBoard.occupation) {
                movements.push(positionBoard)
            } else {
                if (positionBoard.occupation.color !== this.color) {
                    movements.push(positionBoard)
                }
            }
        })
        return movements
    }
}