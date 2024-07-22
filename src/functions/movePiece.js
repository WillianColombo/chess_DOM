import { Pawn } from "../class/Pawn.js";
import { getChildren } from "../methods/getChildren.js";
import { board } from "../methods/setBoard.js";
import { capturePiece } from "./capturePiece.js";
import { removeShowMovements } from "./showMovements.js";

export function movePiece(piece, newPositionBoard, newSquare){
    const oldPositionBoard = board.find(position => position.occupation === piece)
    const oldSquare = document.getElementById(`${oldPositionBoard.positionX}-${oldPositionBoard.positionY}`)

    removeShowMovements()

    //Verifica se o movimento é uma captura
    if(newPositionBoard.occupation){
        capturePiece(newPositionBoard.occupation)
    }

    //Move a peça no tabuleiro lógico
    oldPositionBoard.occupation = null
    newPositionBoard.occupation = piece
    piece.position = newPositionBoard

    
    //Move a peça no tabuleiro gráfico
    const pieceElement = getChildren(oldSquare)
    pieceElement.remove()
    newSquare.appendChild(pieceElement)

    //Se o for peão, muda o atributo que dá movimentos diferentes no primeiro
    if(piece instanceof Pawn){
        piece.changeFirstMovement()
    }
}