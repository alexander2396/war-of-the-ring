import { Dice } from '../models/dice';

export class DiceService {
    static rollFreePeopleDices(count: number): Dice[] {
        let diceRollArray = [];
        for (var i = 0; i < count; i++) {
            let number = Math.round(Math.random() * 61);

            if (number >= 0 && number <= 10)
                diceRollArray.push(new Dice('images/dices/ADFParmymuster.png'));

            if (number > 10 && number <= 30)
                diceRollArray.push(new Dice('images/dices/ADFPcharacter.png'));

            if (number > 30 && number <= 40)
                diceRollArray.push(new Dice('images/dices/ADFPevent.png'));

            if (number > 40 && number <= 50)
                diceRollArray.push(new Dice('images/dices/ADFPmuster.png'));

            if (number > 50 && number <= 61)
                diceRollArray.push(new Dice('images/dices/ADFPwill.png'));
        }

        return diceRollArray;
    }

    static rollSauronForcesDices(count: number): Dice[] {
        let diceRollArray = [];
        for (var i = 0; i < count; i++) {
            let number = Math.round(Math.random() * 61);

            if (number >= 0 && number <= 10)
                diceRollArray.push(new Dice('images/dices/ADSAarmy.png'));

            if (number > 10 && number <= 20)
                diceRollArray.push(new Dice('images/dices/ADSAarmymuster.png'));

            if (number > 20 && number <= 30)
                diceRollArray.push(new Dice('images/dices/ADSAcharacter.png'));

            if (number > 30 && number <= 40)
                diceRollArray.push(new Dice('images/dices/ADSAevent.png'));

            if (number > 40 && number <= 50)
                diceRollArray.push(new Dice('images/dices/ADSAeye.png'));

            if (number > 50 && number <= 61)
                diceRollArray.push(new Dice('images/dices/ADSAmuster.png'));
        }

        return diceRollArray;
    }
}