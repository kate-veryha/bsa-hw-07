"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fighter_1 = require("./fighter");
var ImprovedFighter = (function (_super) {
    __extends(ImprovedFighter, _super);
    function ImprovedFighter(name, power, health) {
        if (name === void 0) { name = "Hero"; }
        if (power === void 0) { power = 25; }
        if (health === void 0) { health = 300; }
        return _super.call(this, name, power, health) || this;
    }
    ImprovedFighter.prototype.doubleHit = function (enemy, point) {
        _super.prototype.hit.call(this, enemy, point * 2);
    };
    return ImprovedFighter;
}(fighter_1.Fighter));
exports.ImprovedFighter = ImprovedFighter;
