import Bullet from '../components/Bullet';
import Enemy from '../components/Enemy';

export class CollisionSystem {
    checkCollision(bullets: Bullet[], enemies: Enemy[]): void {
        bullets.forEach((bullet, bulletIndex) => {
            enemies.forEach((enemy, enemyIndex) => {
                if (this.isColliding(bullet, enemy)) {
                    this.handleCollision(bulletIndex, enemyIndex, bullets, enemies);
                }
            });
        });
    }

    private isColliding(bullet: Bullet, enemy: Enemy): boolean {
        // Simple AABB collision detection
        return (
            bullet.position.x < enemy.position.x + enemy.width &&
            bullet.position.x + bullet.width > enemy.position.x &&
            bullet.position.y < enemy.position.y + enemy.height &&
            bullet.position.y + bullet.height > enemy.position.y
        );
    }

    private handleCollision(bulletIndex: number, enemyIndex: number, bullets: Bullet[], enemies: Enemy[]): void {
        bullets.splice(bulletIndex, 1); // Remove the bullet
        enemies[enemyIndex].takeDamage(10); // Damage the enemy

        if (enemies[enemyIndex].health <= 0) {
            enemies.splice(enemyIndex, 1); // Remove the enemy if health is zero
        }
    }
}
export default CollisionSystem;