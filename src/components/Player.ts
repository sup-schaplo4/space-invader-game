class Player {
    position: { x: number; y: number };
    score: number;

    constructor(x: number, y: number) {
        this.position = { x, y };
        this.score = 0;
    }

    move(x: number, y: number) {
        this.position.x += x;
        this.position.y += y;
    }

    shoot() {
        // Logic for shooting a bullet
    }

    updateScore(points: number) {
        this.score += points;
    }
}

export default Player;