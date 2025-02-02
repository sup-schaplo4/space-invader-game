export interface Position {
    x: number;
    y: number;
}

export interface GameObject {
    position: Position;
    update(): void;
}

export interface BulletType {
    speed: number;
    damage: number;
}