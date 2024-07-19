import { pieces } from "../methods/setPieces.js"

export function pieceBuilder(){
    pieces.forEach(piece => {
        const square = document.getElementById(`${piece.position.positionX}-${piece.position.positionY}`)
        square.innerText = piece.constructor.name + " " + piece.color
        square.disabled = false
    })
}