import { Dice } from '../models/dice';
import { DiceType } from '../models/enums/diceType';
import { Side } from '../models/enums/side';

export class DiceService {
    static rollFreePeopleDices(count: number): Dice[] {
        let diceRollArray = [];
        for (var i = 0; i < count; i++) {
            let number = Math.round(Math.random() * 61);

            if (number >= 0 && number <= 10)
                diceRollArray.push(new Dice(Side.FreePeople, DiceType.ArmyMuster));

            if (number > 10 && number <= 30)
                diceRollArray.push(new Dice(Side.FreePeople, DiceType.Character));

            if (number > 30 && number <= 40)
                diceRollArray.push(new Dice(Side.FreePeople, DiceType.Palantir));

            if (number > 40 && number <= 50)
                diceRollArray.push(new Dice(Side.FreePeople, DiceType.Muster));

            if (number > 50 && number <= 61)
                diceRollArray.push(new Dice(Side.FreePeople, DiceType.WillOfTheWest));
        }

        return diceRollArray;
    }

    static rollSauronForcesDices(count: number): Dice[] {
        let diceRollArray = [];
        for (var i = 0; i < count; i++) {
            let number = Math.round(Math.random() * 61);

            if (number >= 0 && number <= 10)
                diceRollArray.push(new Dice(Side.SauronForces, DiceType.Army));

            if (number > 10 && number <= 20)
                diceRollArray.push(new Dice(Side.SauronForces, DiceType.ArmyMuster));

            if (number > 20 && number <= 30)
                diceRollArray.push(new Dice(Side.SauronForces, DiceType.Character));

            if (number > 30 && number <= 40)
                diceRollArray.push(new Dice(Side.SauronForces, DiceType.Palantir));

            if (number > 40 && number <= 50)
                diceRollArray.push(new Dice(Side.SauronForces, DiceType.Eye));

            if (number > 50 && number <= 61)
                diceRollArray.push(new Dice(Side.SauronForces, DiceType.Muster));
        }

        return diceRollArray;
    }
}