import { board, setBoard } from "./methods/setBoard.js"
import { pieces, setPieces } from "./methods/setPieces.js"

setBoard()
setPieces()


pieces[10].move(board[1])

console.log(pieces[19].getMovements())
