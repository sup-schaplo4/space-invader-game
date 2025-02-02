"use strict";
// This file is the entry point of the Space Invader game.
// It initializes the game, sets up the game loop, and manages the game state.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import Player from './components/Player.js';               // Adjust file paths as necessary
import CollisionSystem from './systems/CollisionSystem.js';
import { RenderSystem } from './systems/RenderSystem.js';
class Game {
    constructor() {
        this.player = new Player(0, 0);
        this.enemies = [];
        this.bullets = [];
        this.collisionSystem = new CollisionSystem();
        const canvas = document.getElementById('gameCanvas');
        this.renderSystem = new RenderSystem(canvas);
        this.initialize();
    }
    initialize() {
        this.setupEnemies();
        this.startGameLoop();
    }
    setupEnemies() {
        // Logic to create and position enemies
    }
    startGameLoop() {
        this.gameLoop = setInterval(() => {
            this.update();
            this.render();
        }, 1000 / 60); // 60 FPS
    }
    update() {
        // Update game state, move player, bullets, etc.
        this.checkCollisions();
    }
    checkCollisions() {
        this.collisionSystem.checkCollision(this.bullets, this.enemies);
    }
    render() {
        this.renderSystem.render([this.player, ...this.enemies, ...this.bullets]);
    }
}
const game = new Game();
