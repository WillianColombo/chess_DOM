import { Piece } from "./piece.js"
import { getPositionBoard } from "../methods/getPositionBoard.js"

export class Pawn extends Piece {
    constructor(id, color, position) {
        super(id, color, position)
        this.firstMovement = true //First Moviment refere-se ao primeiro movimento de um peão, que pode andar uma posição a mais
    }

    //Verifica se o peão chegou do lado oposto do tabuleiro, possibilitando a promoção do Peão
    checkPromotion() {
        return this.position.positionY === 8 || this.position.positionY === 1 ? true : false
    }

    //Após dar o primeiro movimento, se torna false, impossibilitando andar mais de uma posição
    changeFirstMovement() {
        this.firstMovement = false
    }

    //Recebe todas as posições possíveis, e separa as inválidas (campos com coordenadas menor que 1 e maior que 8)
    #removeInvalidPositions(absolutMovements) {
        absolutMovements.forEach(position => {
            if (position.positionX < 1 || position.positionX > 8 || position.positionY < 1 || position.positionY > 8) {
                const i = absolutMovements.indexOf(position)
                absolutMovements.splice(i, 1)
            }
        })
        return absolutMovements
    }

    //Retorna todas as posições possíveis do primeiro movimento de um peão
    #absolutFirstMovements() {
        if (this.color === 'black') {
            const absolutMovements = [
                [
                    { positionX: this.position.positionX, positionY: this.position.positionY + 1, diagonal: false },
                    { positionX: this.position.positionX, positionY: this.position.positionY + 2, diagonal: false },
                ],
                { positionX: this.position.positionX - 1, positionY: this.position.positionY + 1, diagonal: true },
                { positionX: this.position.positionX + 1, positionY: this.position.positionY + 1, diagonal: true },
            ]
            return absolutMovements
        } else {
            const absolutMovements = [
                [
                    { positionX: this.position.positionX, positionY: this.position.positionY - 1, diagonal: false },
                    { positionX: this.position.positionX, positionY: this.position.positionY - 2, diagonal: false },
                ],
                { positionX: this.position.positionX - 1, positionY: this.position.positionY - 1, diagonal: true },
                { positionX: this.position.positionX + 1, positionY: this.position.positionY - 1, diagonal: true },
            ]
            return this.#removeInvalidPositions(absolutMovements)
        }
    }

    //Retorna todas as posições possíveis do movimento de um peão (não primeiro)
    #absolutMovements() {
        let absolutMovements = []
        if (this.color === 'black') {
            absolutMovements = [
                { positionX: this.position.positionX, positionY: this.position.positionY + 1, diagonal: false },
                { positionX: this.position.positionX - 1, positionY: this.position.positionY + 1, diagonal: true },
                { positionX: this.position.positionX + 1, positionY: this.position.positionY + 1, diagonal: true },
            ]
        } else {
            absolutMovements = [
                { positionX: this.position.positionX, positionY: this.position.positionY - 1, diagonal: false },
                { positionX: this.position.positionX - 1, positionY: this.position.positionY - 1, diagonal: true },
                { positionX: this.position.positionX + 1, positionY: this.position.positionY - 1, diagonal: true },
            ]
        }

        return this.#removeInvalidPositions(absolutMovements)
    }

    //Retorna os movimentos válidos do peão
    getMovements() {
        const absolutMovements = this.firstMovement ? this.#absolutFirstMovements() : this.#absolutMovements()
        let movements = []
        absolutMovements.forEach(position => {
            if (Array.isArray(position)) {
                for (let element of position) {
                    const positionBoard = getPositionBoard(element.positionX, element.positionY)
                    if (!positionBoard.occupation) {
                        movements.push(positionBoard)
                    } else break
                }
            } else if (position.diagonal) {
                const positionBoard = getPositionBoard(position.positionX, position.positionY)
                if (positionBoard.occupation && positionBoard.occupation.color !== this.color) {
                    movements.push(positionBoard)
                }
            } else {
                const positionBoard = getPositionBoard(position.positionX, position.positionY)
                if (!positionBoard.occupation) {
                    movements.push(positionBoard)
                }
            }
        })
        return movements
    }
}