export class PositionBoard{
    constructor(positionX, positionY){
        this.positionX = positionX
        this.positionY = positionY
        this.occupation = null
    }

    addPiece(piece){
        this.occupation = piece
    }
    removePiece(){
        this.occupation = null
    }
    checkOccupation(){
        return this.occupation ? true : false
    }
}