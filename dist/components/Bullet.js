"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bullet {
    constructor(x, y, speed, width, height) {
        this.position = { x, y };
        this.speed = speed;
        this.width = width;
        this.height = height;
    }
    move() {
        this.position.y -= this.speed;
    }
    isOffScreen(screenHeight) {
        return this.position.y < 0;
    }
}
exports.default = Bullet;
