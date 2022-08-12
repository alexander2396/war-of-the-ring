import { Faction } from "../models/faction";
import { Unit } from "../models/unit";
import { UnitType } from "../models/unitType";

export class ImageUrlResolver {
    static getUnitUrl(unit: Unit): string {

        switch (unit.faction) {
            case Faction.Elves:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/ElvenRegular.png';            
                if (unit.type === UnitType.Elite) 
                    return 'images/units/ElvenElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/ElvenLeader.png';
                break;
            case Faction.Sauron:
                if (unit.type === UnitType.Regular) 
                    return 'images/units/SauronRegular.png';
                if (unit.type === UnitType.Elite) 
                    return 'images/units/SauronElite.png';
                if (unit.type === UnitType.Leader) 
                    return 'images/units/Nazgul.png';
                break;
        }

        return '';
    }
}