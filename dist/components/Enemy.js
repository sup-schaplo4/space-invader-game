"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Enemy {
    constructor(x, y, width, height, health) {
        this.position = { x, y };
        this.health = health;
        this.width = width;
        this.height = height;
    }
    move(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
    }
    shoot() {
        // Logic for shooting
    }
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.die();
        }
    }
    die() {
        console.log('Enemy had died');
    }
    destroy() {
        // Logic for enemy destruction
    }
}
exports.default = Enemy;
