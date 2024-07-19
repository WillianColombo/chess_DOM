import { Piece } from "./piece.js"
import { getPositionBoard } from "../methods/getPositionBoard.js"

export class Pawn extends Piece {
    constructor(id, color, position) {
        super(id, color, position)
        this.firstMovement = true //First Moviment refere-se ao primeiro movimento de um peão, que pode andar uma posição a mais
    }

    //Verifica se o peão chegou do lado oposto do tabuleiro, possibilitando a promoção do Peão
    checkPromotion() {
        return positionY === 8 || positionY === 1 ? true : false
    }

    //Após dar o primeiro movimento, se torna false, impossibilitando andar mais de uma posição
    changeFirstMovement() {
        this.firstMovement = false
    }

    //Retorna todas as posições possíveis do primeiro movimento de um peão
    #absolutFirstMovements() {
        let positionX = this.position.positionX
        let positionY = this.position.positionY
        let absolutMovements = []

        if (this.color === 'black') {
            absolutMovements = [
                [
                    { positionX: positionX, positionY: positionY + 1, diagonal: false },
                    { positionX: positionX, positionY: positionY + 2, diagonal: false },
                ],
                { positionX: positionX - 1, positionY: positionY + 1, diagonal: true },
                { positionX: positionX + 1, positionY: positionY + 1, diagonal: true },
            ]
        } else {
            absolutMovements = [
                [
                    { positionX: positionX, positionY: positionY - 1, diagonal: false },
                    { positionX: positionX, positionY: positionY - 2, diagonal: false },
                ],
                { positionX: positionX - 1, positionY: positionY - 1, diagonal: true },
                { positionX: positionX + 1, positionY: positionY - 1, diagonal: true },
            ]
        }
        return absolutMovements.filter(element => 
            element.positionX >= 1 && 
            element.positionX <= 8 && 
            element.positionY >= 1 && 
            element.positionY <= 8)
    }

    //Retorna todas as posições possíveis do movimento de um peão (não primeiro)
    #absolutMovements() {
        let positionX = this.position.positionX
        let positionY = this.position.positionY
        let absolutMovements = []

        if (this.color === 'black') {
            absolutMovements = [
                { positionX: positionX, positionY: positionY + 1, diagonal: false },
                { positionX: positionX - 1, positionY: positionY + 1, diagonal: true },
                { positionX: positionX + 1, positionY: positionY + 1, diagonal: true },
            ]
        } else {
            absolutMovements = [
                { positionX: positionX, positionY: positionY - 1, diagonal: false },
                { positionX: positionX - 1, positionY: positionY - 1, diagonal: true },
                { positionX: positionX + 1, positionY: positionY - 1, diagonal: true },
            ]
        }

        return absolutMovements.filter(element => 
            element.positionX >= 1 && 
            element.positionX <= 8 && 
            element.positionY >= 1 && 
            element.positionY <= 8)
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