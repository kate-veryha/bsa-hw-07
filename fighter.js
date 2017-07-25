"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fighter = (function () {
    function Fighter(name, power, health) {
        if (name === void 0) { name = 'No name'; }
        if (power === void 0) { power = 5; }
        if (health === void 0) { health = 100; }
        this.name = name;
        this.power = power;
        this.health = health;
    }
    Fighter.prototype.setDamage = function (damage) {
        this.health -= damage;
        console.log(this.name + " health: " + this.health);
    };
    Fighter.prototype.hit = function (enemy, point) {
        enemy.setDamage(point * this.power);
    };
    return Fighter;
}());
exports.Fighter = Fighter;
