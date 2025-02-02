class Enemy {
    position: { x: number; y: number };
    width: number;
    height: number;
    health: number;

    constructor(x: number, y: number, width: number, height: number, health: number) {
        this.position = { x, y };
        this.health = health;
        this.width = width;
        this.height = height;
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
            this.die();
        }
    }
    die() {
        console.log('Enemy had died')
    }
    private destroy() {
        // Logic for enemy destruction
    }
}
export default Enemy