import { ImageUrlResolver } from '../core/imageUrlResolver';
import { Faction } from './faction';
import { Side } from './side';
import { UnitType } from './unitType';
import { v4 as uuidv4 } from 'uuid';
import { Hero } from './hero';

export class Unit {
    key: string;
    side: Side;
    faction: Faction;
    type: UnitType;
    hero?: Hero;

    imageUrl: string;
    selected: boolean;

    constructor(side, faction, type, hero = null) {
        this.key = uuidv4();
        this.side = side;
        this.faction = faction;
        this.type = type;
        this.hero = hero;
        
        this.imageUrl = ImageUrlResolver.getUnitUrl(this);
    }
}