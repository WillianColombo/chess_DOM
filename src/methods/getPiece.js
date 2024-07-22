import { pieces } from "./setPieces.js"

export function getPiece(id) {
    const positions = id.split('-')

    return pieces.find(piece => 
        piece.position.positionX === parseInt(positions[0]) &&
        piece.position.positionY === parseInt(positions[1])
    )
}