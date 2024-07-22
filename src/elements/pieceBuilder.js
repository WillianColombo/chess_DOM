import { showMovements } from "../functions/showMovements.js"
import { pieces } from "../methods/setPieces.js"

export function pieceBuilder(){
    pieces.forEach(piece => {
        const square = document.getElementById(`${piece.position.positionX}-${piece.position.positionY}`)
        const pieceElement = document.createElement('button')

        pieceElement.innerText = piece.constructor.name + " " + piece.color
        pieceElement.id = piece.id
        pieceElement.className = 'piece'
        pieceElement.onclick = () => showMovements(piece)

        square.appendChild(pieceElement)
    })
}