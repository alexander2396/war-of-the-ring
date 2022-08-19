import { Faction } from "../models/faction";
import { Hero } from "../models/hero";
import { Unit } from "../models/unit";
import { UnitType } from "../models/unitType";

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
            case Faction.Sauron:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/SauronRegular.png';
                if (unit.type === UnitType.Elite) 
                    return 'images/units/SauronElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/Nazgul.png';
                break;
            default:
                return ''
        }

    }

    static getCardUrl = (fileName: string) => 'images/cards/' + fileName;
}