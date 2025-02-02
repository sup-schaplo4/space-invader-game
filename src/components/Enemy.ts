class Enemy {
    position: { x: number; y: number };
    health: number;

    constructor(x: number, y: number, health: number) {
        this.position = { x, y };
        this.health = health;
    }

    move(dx: number, dy: number) {
        this.position.x += dx;
        this.position.y += dy;
    }

    shoot() {
        // Logic for shooting
    }

    takeDamage(amount: number) {
        this.health -= amount;
        if (this.health <= 0) {
            this.destroy();
        }
    }

    private destroy() {
        // Logic for enemy destruction
    }
}