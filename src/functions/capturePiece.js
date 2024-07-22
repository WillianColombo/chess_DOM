import { getChildren } from "../methods/getChildren.js"
import { getPiece } from "../methods/getPiece.js"

export function capturePiece(positionBoard){
    const capturedPieceElement = getChildren(
        document.getElementById(`${positionBoard.positionX}-${positionBoard.positionY}`)
    )

    const capturedPiece = getPiece(`${positionBoard.positionX}-${positionBoard.positionY}`)
    capturedPiece.disabled()
    capturedPieceElement.remove()
}