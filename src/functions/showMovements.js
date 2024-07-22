import { getChildren } from "../methods/getChildren.js"
import { board } from "../methods/setBoard.js"
import { capturePiece } from "./capturePiece.js"
import { movePiece } from "./movePiece.js"

export function showMovements(piece) {
    removeShowMovements()

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
            pieceElement.onclick = () => capturePiece(movement)
            pieceElement.style.backgroundColor = 'red'
        }
    })
}

export function removeShowMovements() {
    //Remove os movimentos visuais
    board.forEach(positionBoard => {
        if (!positionBoard.occupation) {
            const buttonSquare = document.getElementById(`btn-${positionBoard.positionX}-${positionBoard.positionY}`)
            if (buttonSquare) {
                buttonSquare.remove()
            }

        }
    })
}