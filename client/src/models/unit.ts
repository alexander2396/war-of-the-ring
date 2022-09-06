import { ImageUrlResolver } from '../core/imageUrlResolver';
import { Faction } from './enums/faction';
import { Side } from './enums/side';
import { UnitType } from './enums/unitType';
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

    constructor(side, faction, type, hero = null, key = null) {
        this.key = key ?? uuidv4();
        this.side = side;
        this.faction = faction;
        this.type = type;
        this.hero = hero;
        this.selected = false
        
        this.imageUrl = ImageUrlResolver.getUnitUrl(this);
    }
}