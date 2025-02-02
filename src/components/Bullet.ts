class Bullet {
    position: { x: number; y: number };
    speed: number;

    constructor(x: number, y: number, speed: number) {
        this.position = { x, y };
        this.speed = speed;
    }

    move() {
        this.position.y -= this.speed;
    }

    isOffScreen(screenHeight: number): boolean {
        return this.position.y < 0;
    }
}

export default Bullet;