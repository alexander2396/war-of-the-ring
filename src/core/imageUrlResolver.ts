import { Faction } from "../models/faction";
import { Unit } from "../models/unit";
import { UnitType } from "../models/unitType";
import ElevenRegular from '../images/units/ElvenRegular.png';
import ElvenElite from '../images/units/ElvenElite.png';
import ElvenLeader from '../images/units/ElvenLeader.png';
import SauronRegular from '../images/units/SauronRegular.png';

export class ImageUrlResolver {
    static getUnitUrl(unit: Unit): string {

        switch (unit.faction) {
            case Faction.Elves:
                if (unit.type === UnitType.Regular) 
                    return ElevenRegular;            
                if (unit.type === UnitType.Elite) 
                    return ElvenElite;
                if (unit.type === UnitType.Leader) 
                    return ElvenLeader;
                break;
            case Faction.Sauron:
                if (unit.type === UnitType.Regular) 
                    return SauronRegular;
                break;
        }

        return '';
    }
}