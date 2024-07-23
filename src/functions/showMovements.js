import { getChildren } from "../methods/getChildren.js"
import { movePiece } from "./movePiece.js"
import { resetActions } from "./resetActions.js"

export function showMovements(piece) {
    resetActions()
    // Adiciona os movimentos da peça
    const movements = piece.getMovements()
    movements.forEach(movement => {
        if (!movement.occupation) {
            const square = document.getElementById(`${movement.positionX}-${movement.positionY}`)
            const button = document.createElement('button')

            button.id = "btn-" + square.id
            button.className = 'square-movement'
            button.onclick = () => movePiece(piece, movement, square)
            square.appendChild(button)
        } else {
            const pieceElement = getChildren(document.getElementById(`${movement.positionX}-${movement.positionY}`))
            pieceElement.className = 'piece-capture'
            pieceElement.onclick = () => movePiece(piece, movement, document.getElementById(`${movement.positionX}-${movement.positionY}`))
        }
    })
}