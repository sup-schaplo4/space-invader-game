"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(x, y) {
        this.position = { x, y };
        this.score = 0;
    }
    move(x, y) {
        this.position.x += x;
        this.position.y += y;
    }
    shoot() {
        // Logic for shooting a bullet
    }
    updateScore(points) {
        this.score += points;
    }
}
exports.default = Player;
