import { IFighter } from './ifighter';
import { Fighter } from './fighter';

class ImprovedFighter extends Fighter implements IFighter {
    constructor (
        name: string = "Hero",
        power: number = 25,
        health: number = 300,
    ) {
        super(name, power, health);
    }

    doubleHit(enemy: Fighter, point: number): void {
        super.hit(enemy, point * 2)
    }
}

export { ImprovedFighter };