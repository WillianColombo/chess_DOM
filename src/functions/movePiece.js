import { Pawn } from "../class/Pawn.js";
import { promotionBuilder } from "../elements/promotionBuilder.js";
import { getChildren } from "../methods/getChildren.js";
import { board } from "../methods/setBoard.js";
import { capturePiece } from "./capturePiece.js";
import { resetActions } from "./resetActions.js";

export function movePiece(piece, newPositionBoard, newSquare){
    resetActions()

    const oldPositionBoard = board.find(position => position.occupation === piece)
    const oldSquare = document.getElementById(`${oldPositionBoard.positionX}-${oldPositionBoard.positionY}`)

    //Verifica se o movimento é uma captura
    if(newPositionBoard.occupation){
        capturePiece(newPositionBoard)
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

    //Se o for peão, verifica se pode ser promovido
    if(piece instanceof Pawn && piece.checkPromotion()){
        promotionBuilder(piece, newPositionBoard, newSquare)
    }

    resetActions()
}