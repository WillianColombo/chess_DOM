export class Piece {
    constructor(id, color, position) {
        this.id = id
        this.color = color
        this.status = true
        this.position = position
    }

    disabled() {
        this.status = false
    }
    enabled() {
        this.status = true
    }
    move(newPosition) {
        const oldPosition = this.position
        this.position = newPosition
        oldPosition.removePiece()
        newPosition.addPiece(this)
    }
}

