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
}

