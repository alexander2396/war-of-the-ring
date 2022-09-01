import { Faction } from "../models/enums/faction";
import { Hero } from "../models/hero";
import { Unit } from "../models/unit";
import { UnitType } from "../models/enums/unitType";
import { Dice } from "../models/dice";
import { Side } from "../models/enums/side";
import { DiceType } from "../models/enums/diceType";

export class ImageUrlResolver {
    static getUnitUrl(unit: Unit): string {

        if (unit.hero !== null) {
            return `images/units/${Hero[unit.hero]}.png`;
        }

        switch (unit.faction) {
            case Faction.Elves:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/ElvenRegular.png';            
                if (unit.type === UnitType.Elite) 
                    return 'images/units/ElvenElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/ElvenLeader.png';
                break;
            case Faction.Dwarfs:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/DwarvenRegular.png';            
                if (unit.type === UnitType.Elite) 
                    return 'images/units/DwarvenElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/DwarvenLeader.png';
                break;
            case Faction.Northmen:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/NorthRegular.png';            
                if (unit.type === UnitType.Elite) 
                    return 'images/units/NorthElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/NorthLeader.png';
                break;
            case Faction.Rohan:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/RohanRegular.png';            
                if (unit.type === UnitType.Elite) 
                    return 'images/units/RohanElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/RohanLeader.png';
                break;
            case Faction.Gondor:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/GondorRegular.png';            
                if (unit.type === UnitType.Elite) 
                    return 'images/units/GondorElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/GondorLeader.png';
                break;
            case Faction.Sauron:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/SauronRegular.png';
                if (unit.type === UnitType.Elite) 
                    return 'images/units/SauronElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/Nazgul.png';
                break;
            case Faction.Isengard:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/IsengardRegular.png';
                if (unit.type === UnitType.Elite) 
                    return 'images/units/IsengardElite.png';
                break;
            case Faction.Easterlings:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/SouthronRegular.png';
                if (unit.type === UnitType.Elite) 
                    return 'images/units/SouthronElite.png';
                break;
            default:
                return ''
        }
    }

    static getDiceUrl(dice: Dice): string {
        if (dice.side === Side.FreePeople) {
            switch(dice.type) {
                case DiceType.Character:   
                    return 'images/dices/ADFPcharacter.png';
                case DiceType.ArmyMuster:
                    return 'images/dices/ADFParmymuster.png';
                case DiceType.Palantir:
                    return 'images/dices/ADFPevent.png';
                case DiceType.Muster:
                    return 'images/dices/ADFPmuster.png';
                case DiceType.WillOfTheWest:
                    return 'images/dices/ADFPwill.png';
            }
        } else {
            switch(dice.type) {
                case DiceType.Character:   
                    return 'images/dices/ADSAcharacter.png';
                case DiceType.ArmyMuster:
                    return 'images/dices/ADSAarmymuster.png';
                case DiceType.Palantir:
                    return 'images/dices/ADSAevent.png';
                case DiceType.Muster:
                    return 'images/dices/ADSAmuster.png';
                case DiceType.Eye:
                    return 'images/dices/ADSAeye.png';
                case DiceType.Army:
                    return 'images/dices/ADSAarmy.png';
            }
        }
    }

    static getCardUrl = (fileName: string) => 'images/cards/' + fileName + '.png';
    static getSmallCardUrl = (fileName: string) => 'images/cards/small/' + fileName + '_s.png';
}