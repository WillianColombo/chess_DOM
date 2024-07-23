import { Bishop } from "../class/Bishop.js";
import { King } from "../class/King.js";
import { Knight } from "../class/Knight.js";
import { Pawn } from "../class/Pawn.js";
import { Queen } from "../class/Queen.js";
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
    positionWhiteRook2.occupation = whiteRook2
    positionBlackRook1.occupation = blackRook1
    positionBlackRook2.occupation = blackRook2

    pieces.push(whiteRook1, whiteRook2, blackRook1, blackRook2)


    //Gera os bispos
    const positionWhiteBishop1 = getPositionBoard(3, 8)
    const positionWhiteBishop2 = getPositionBoard(6, 8)
    const positionBlackBishop1 = getPositionBoard(3, 1)
    const positionBlackBishop2 = getPositionBoard(6, 1)

    const whiteBishop1 = new Bishop(`white-bishop-1`, 'white', positionWhiteBishop1)
    const whiteBishop2 = new Bishop(`white-bishop-2`, 'white', positionWhiteBishop2)
    const blackBishop1 = new Bishop(`black-bishop-1`, 'black', positionBlackBishop1)
    const blackBishop2 = new Bishop(`black-bishop-2`, 'black', positionBlackBishop2)

    positionWhiteBishop1.occupation = whiteBishop1
    positionWhiteBishop2.occupation = whiteBishop2
    positionBlackBishop1.occupation = blackBishop1
    positionBlackBishop2.occupation = blackBishop2

    pieces.push(whiteBishop1, whiteBishop2, blackBishop1, blackBishop2)

    //Gera as rainhas
    const positionWhiteQueen = getPositionBoard(5, 8)
    const positionBlackQueen = getPositionBoard(5, 1)

    const whiteQueen = new Queen(`white-queen`, 'white', positionWhiteQueen)
    const blackQueen = new Queen(`black-queen`, 'black', positionBlackQueen)


    positionWhiteQueen.occupation = whiteQueen
    positionBlackQueen.occupation = blackQueen

    pieces.push(whiteQueen, blackQueen)

    //Gera os cavalos
    const positionWhiteKnight1 = getPositionBoard(2, 8)
    const positionWhiteKnight2 = getPositionBoard(7, 8)
    const positionBlackKnight1 = getPositionBoard(2, 1)
    const positionBlackKnight2 = getPositionBoard(7, 1)

    const whiteKnight1 = new Knight(`white-knight-1`, 'white', positionWhiteKnight1)
    const whiteKnight2 = new Knight(`white-knight-2`, 'white', positionWhiteKnight2)
    const blackKnight1 = new Knight(`black-knight-1`, 'black', positionBlackKnight1)
    const blackKnight2 = new Knight(`black-knight-2`, 'black', positionBlackKnight2)

    positionWhiteKnight1.occupation = whiteKnight1
    positionWhiteKnight2.occupation = whiteKnight2
    positionBlackKnight1.occupation = blackKnight1
    positionBlackKnight2.occupation = blackKnight2

    pieces.push(whiteKnight1, whiteKnight2, blackKnight1, blackKnight2)

    //Gera as rainhas
    const positionWhiteKing = getPositionBoard(4, 8)
    const positionBlackKing = getPositionBoard(4, 1)

    const whiteKing = new King(`white-king`, 'white', positionWhiteKing)
    const blackKing = new King(`black-king`, 'black', positionBlackKing)


    positionWhiteKing.occupation = whiteKing
    positionBlackKing.occupation = blackKing

    pieces.push(whiteKing, blackKing)
}