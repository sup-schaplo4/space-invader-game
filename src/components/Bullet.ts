class Bullet {
    position: { x: number; y: number };
    speed: number;
    width: number;
    height: number;

    constructor(x: number, y: number, speed: number, width: number, height: number) {
        this.position = { x, y };
        this.speed = speed;
        this.width = width;
        this.height = height;
    }

    move() {
        this.position.y -= this.speed;
    }

    isOffScreen(screenHeight: number): boolean {
        return this.position.y < 0;
    }
}

export default Bullet;