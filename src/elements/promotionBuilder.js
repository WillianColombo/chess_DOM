import { pawnPromotion } from "../functions/pawnPromotion.js"

export function promotionBuilder(pawn, positionBoard, square){
    const gameDiv = document.getElementById('game-div')
    const promotionDiv = document.createElement('div')

    promotionDiv.id = 'promotion-div'

    const rookPromotion = document.createElement('button')
    const bishopPromotion = document.createElement('button')
    const knightPromotion = document.createElement('button')
    const queenPromotion = document.createElement('button')

    rookPromotion.innerText = 'Torre'
    bishopPromotion.innerText = 'Bispo'
    knightPromotion.innerText = 'Cavalo'
    queenPromotion.innerText = 'Rainha'

    rookPromotion.classList.add('promotion-options') 
    bishopPromotion.classList.add('promotion-options') 
    knightPromotion.classList.add('promotion-options') 
    queenPromotion.classList.add('promotion-options')
    
    rookPromotion.onclick = () => pawnPromotion(pawn, positionBoard, square, 1) 
    bishopPromotion.onclick = () => pawnPromotion(pawn, positionBoard, square, 2) 
    knightPromotion.onclick = () => pawnPromotion(pawn, positionBoard, square, 3) 
    queenPromotion.onclick = () => pawnPromotion(pawn, positionBoard, square, 4)
    
    promotionDiv.append(rookPromotion, bishopPromotion, knightPromotion, queenPromotion)
    gameDiv.appendChild(promotionDiv)
}