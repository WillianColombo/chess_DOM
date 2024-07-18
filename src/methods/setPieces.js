import { Pawn } from "../class/Pawn.js";
import { Rook } from "../class/Rook.js";
import { getPositionBoard } from "./getPositionBoard.js";

export let pieces = []

export function setPieces() {
    //Gera os peões brancos
    for (let i = 0; i < 8; i++) {
        const position = getPositionBoard(i + 1, 7)
        const piece = new Pawn(
            `white-pawn-${i + 1}`, //Id
            'white', //Color
            position //Position
        )

        position.occupation = piece
        pieces.push(piece)
    }

    //Gera os peões pretos
    for (let i = 0; i < 8; i++) {
        const position = getPositionBoard(i + 1, 2)
        const piece = new Pawn(
            `black-pawn-${i + 1}`, //Id
            'black', //Color
            position //Position
        )

        position.occupation = piece
        pieces.push(piece)
    }

    //Gera as torres
    const positionWhiteRook1 = getPositionBoard(1, 8)
    const positionWhiteRook2 = getPositionBoard(8, 8)
    const positionBlackRook1 = getPositionBoard(1, 1)
    const positionBlackRook2 = getPositionBoard(8, 1)

    const whiteRook1 = new Rook(`white-rook-1`, 'white', positionWhiteRook1)
    const whiteRook2 = new Rook(`white-rook-2`, 'white', positionWhiteRook2)
    const blackRook1 = new Rook(`black-rook-1`, 'black', positionBlackRook1)
    const blackRook2 = new Rook(`black-rook-2`, 'black', positionBlackRook2)

    positionWhiteRook1.occupation = whiteRook1
    positionWhiteRook1.occupation = whiteRook2
    positionBlackRook1.occupation = blackRook1
    positionBlackRook2.occupation = blackRook2

    pieces.push(whiteRook1, whiteRook2, blackRook1, blackRook2)

}