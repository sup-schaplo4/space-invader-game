export class RenderSystem {
    private context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.context = canvas.getContext('2d')!;
    }

    render(gameObjects: any[]) {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        
        gameObjects.forEach(gameObject => {
            this.context.drawImage(gameObject.image, gameObject.position.x, gameObject.position.y);
        });
    }
}