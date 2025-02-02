"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderSystem = void 0;
class RenderSystem {
    constructor(canvas) {
        this.context = canvas.getContext('2d');
    }
    render(gameObjects) {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        gameObjects.forEach(gameObject => {
            this.context.drawImage(gameObject.image, gameObject.position.x, gameObject.position.y);
        });
    }
}
exports.RenderSystem = RenderSystem;
