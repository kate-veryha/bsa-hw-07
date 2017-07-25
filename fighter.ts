import { IFighter } from './ifighter';

class Fighter implements IFighter {
    readonly name: string;
    readonly power: number;
    health: number;
    constructor(name = 'No name', power = 5, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage: number): void {
        this.health -= damage;
        console.log(`${this.name} health: ${this.health}`);
    }

    hit(enemy: Fighter, point: number): void {
        enemy.setDamage(point * this.power);
    }
}

export { Fighter };