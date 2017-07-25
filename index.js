import { Fighter} from "./fighter";
import { ImprovedFighter } from "./improvedFighter";


let showResult = (fighter, improvedFighter) => {
  console.log(
    `***Result***
${fighter.name}: ${(fighter.health > 0) ? fighter.health : 0}
${improvedFighter.name}: ${(improvedFighter.health > 0) ? improvedFighter.health : 0}`);
};

function fight(fighter, improvedFighter, ...point) {
  console.log(`Fighter's name: ${fighter.name}, health: ${fighter.health}
Improved fighter's name: ${improvedFighter.name}, health: ${improvedFighter.health}`);
  let turn = 0;
  console.log(point);
  for (p of point) {
    if (turn % 2 === 0) {
      fighter.hit(improvedFighter, p)
    } else {
      improvedFighter.doubleHit(fighter, p)
    }
    if ((fighter.health <= 0) || (improvedFighter.health <= 0)) {
      showResult(fighter, improvedFighter);
      break;
    }
    turn++;
  }
}

let fighter = new Fighter();
let improvedFighter = new ImprovedFighter();
fight(fighter, improvedFighter,6,5,30,32,12,19,37,95);