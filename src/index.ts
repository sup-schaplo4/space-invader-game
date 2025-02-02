// This file is the entry point of the Space Invader game.
// It initializes the game, sets up the game loop, and manages the game state.

import { Player } from './components/Player';
import { Enemy } from './components/Enemy';
import { Bullet } from './components/Bullet';
import { CollisionSystem } from './systems/CollisionSystem';
import { RenderSystem } from './systems/RenderSystem';

class Game {
    private player: Player;
    private enemies: Enemy[];
    private bullets: Bullet[];
    private collisionSystem: CollisionSystem;
    private renderSystem: RenderSystem;
    private gameLoop: any;

    constructor() {
        this.player = new Player();
        this.enemies = [];
        this.bullets = [];
        this.collisionSystem = new CollisionSystem();
        this.renderSystem = new RenderSystem();
        this.initialize();
    }

    private initialize() {
        this.setupEnemies();
        this.startGameLoop();
    }

    private setupEnemies() {
        // Logic to create and position enemies
    }

    private startGameLoop() {
        this.gameLoop = setInterval(() => {
            this.update();
            this.render();
        }, 1000 / 60); // 60 FPS
    }

    private update() {
        // Update game state, move player, bullets, etc.
        this.checkCollisions();
    }

    private checkCollisions() {
        this.collisionSystem.checkCollision(this.bullets, this.enemies);
    }

    private render() {
        this.renderSystem.render(this.player, this.enemies, this.bullets);
    }
}

const game = new Game();