# Space Invader Game

## Overview
Space Invader is a classic arcade-style game where players control a spaceship to shoot down waves of invading aliens. The game features various components such as players, enemies, and bullets, along with sound effects and a rendering system.

## Features
- Player controls to move and shoot
- Enemy AI to move and shoot back
- Collision detection between bullets and enemies
- Sound effects for shooting and explosions
- Score tracking for the player

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd space-invader-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Game
To start the game, run:
```
npm start
```

### Project Structure
```
space-invader-game
├── src
│   ├── assets
│   │   └── sounds
│   ├── components
│   │   ├── Enemy.ts
│   │   ├── Player.ts
│   │   └── Bullet.ts
│   ├── systems
│   │   ├── CollisionSystem.ts
│   │   └── RenderSystem.ts
│   ├── index.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing
Feel free to submit issues or pull requests to improve the game. 

## License
This project is licensed under the MIT License.