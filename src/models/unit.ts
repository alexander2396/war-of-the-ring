import { ImageUrlResolver } from '../core/imageUrlResolver';
import { Faction } from './faction';
import { Side } from './side';
import { UnitType } from './unitType';
import { v4 as uuidv4 } from 'uuid';

export class Unit {
    key: string;
    side: Side;
    faction: Faction;
    type: UnitType;

    imageUrl: string;
    selected: boolean;

    constructor(side, faction, type) {
        this.key = uuidv4();
        this.side = side;
        this.faction = faction;
        this.type = type;
        
        this.imageUrl = ImageUrlResolver.getUnitUrl(this);
    }
}