import { getChildren } from "../methods/getChildren.js";
import { board } from "../methods/setBoard.js";
import { showMovements } from "./showMovements.js";

export function resetActions() {
    board.forEach(positionBoard => {
        if (!positionBoard.occupation) {
            const buttonSquare = document.getElementById(`btn-${positionBoard.positionX}-${positionBoard.positionY}`)
            if (buttonSquare) {
                buttonSquare.remove()
            }
        } else {
            const pieceElement = getChildren(document.getElementById(`${positionBoard.positionX}-${positionBoard.positionY}`))
            pieceElement.onclick = () => showMovements(positionBoard.occupation)
            pieceElement.className = 'piece'
        }
    })
}