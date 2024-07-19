import { showMovements } from "../functions/showMovements.js"
import { board } from "../methods/setBoard.js"

export function boardBuilder(){
    const boardDiv = document.getElementById('board')
    
    board.forEach(position => {
        const square = document.createElement('button')
        square.id = `${position.positionX}-${position.positionY}`
        square.className = 'square'
        square.disabled = true
        square.onclick = () => showMovements()
        
        boardDiv.appendChild(square)
    })
}