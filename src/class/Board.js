class PositionBoard{
    constructor(positionNum, positionLet){
        this.positionNum = positionNum
        this.positionLet = positionLet
        this.occupation = null
    }

    addPiece(piece){
        this.occupation = piece
    }
    removePiece(){
        this.occupation = null
    }
}

module.exports = PositionBoard