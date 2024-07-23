import { Bishop } from "../class/Bishop.js";
import { Knight } from "../class/Knight.js";
import { Queen } from "../class/Queen.js";
import { Rook } from "../class/Rook.js";
import { getChildren } from "../methods/getChildren.js";
import { pieces } from "../methods/setPieces.js";

export function pawnPromotion(pawn, positionBoard, square, type) {
    const promotionDiv = document.getElementById('promotion-div')
    promotionDiv.remove()

    let piece = ''
    let cont = 0

    switch (type) {
        case 1:
            cont = pieces.filter(piece => piece.color === pawn.color && piece instanceof Rook).length
            piece = new Rook(
                `${pawn.color}-rook-${cont}`,
                pawn.color,
                positionBoard
            )
            pieces.push(piece)
            break;
        case 2:
            cont = pieces.filter(piece => piece.color === pawn.color && piece instanceof Bishop).length
            piece = new Bishop(
                `${pawn.color}-bishop-${cont}`,
                pawn.color,
                positionBoard
            )
            pieces.push(piece)
            break;
        case 3:
            cont = pieces.filter(piece => piece.color === pawn.color && piece instanceof Knight).length
            piece = new Knight(
                `${pawn.color}-knight-${cont}`,
                pawn.color,
                positionBoard
            )
            pieces.push(piece)
            break;
        case 4:
            cont = pieces.filter(piece => piece.color === pawn.color && piece instanceof Queen).length
            piece = new Queen(
                `${pawn.color}-queen-${cont}`,
                pawn.color,
                positionBoard
            )
            pieces.push(piece)
            break;
    }

    pawn.position = null

    const pawnElement = getChildren(square)
    const newPieceElement = document.createElement('button')
    newPieceElement.innerText = piece.constructor.name + " " + piece.color
    newPieceElement.id = piece.id
    newPieceElement.className = 'piece'
    newPieceElement.onclick = () => showMovements(piece)

    square.appendChild(newPieceElement)
    pawnElement.remove()
}