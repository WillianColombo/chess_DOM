import { board } from "../methods/setBoard.js"

export function boardBuilder(){
    const boardDiv = document.getElementById('board')
    
    board.forEach(position => {
        const square = document.createElement('div')
        square.id = `${position.positionX}-${position.positionY}`
        square.className = 'square'
        
        boardDiv.appendChild(square)
    })
}