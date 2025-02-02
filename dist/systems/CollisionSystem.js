"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionSystem = void 0;
class CollisionSystem {
    checkCollision(bullets, enemies) {
        bullets.forEach((bullet, bulletIndex) => {
            enemies.forEach((enemy, enemyIndex) => {
                if (this.isColliding(bullet, enemy)) {
                    this.handleCollision(bulletIndex, enemyIndex, bullets, enemies);
                }
            });
        });
    }
    isColliding(bullet, enemy) {
        // Simple AABB collision detection
        return (bullet.position.x < enemy.position.x + enemy.width &&
            bullet.position.x + bullet.width > enemy.position.x &&
            bullet.position.y < enemy.position.y + enemy.height &&
            bullet.position.y + bullet.height > enemy.position.y);
    }
    handleCollision(bulletIndex, enemyIndex, bullets, enemies) {
        bullets.splice(bulletIndex, 1); // Remove the bullet
        enemies[enemyIndex].takeDamage(10); // Damage the enemy
        if (enemies[enemyIndex].health <= 0) {
            enemies.splice(enemyIndex, 1); // Remove the enemy if health is zero
        }
    }
}
exports.CollisionSystem = CollisionSystem;
exports.default = CollisionSystem;
