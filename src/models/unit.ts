import { ImageUrlResolver } from '../core/imageUrlResolver';
import { Faction } from './faction';
import { Side } from './side';
import { UnitType } from './unitType';

export class Unit {
    side: Side;
    faction: Faction;
    type: UnitType;

    imageUrl: string;

    constructor(side, faction, type) {
        this.side = side;
        this.faction = faction;
        this.type = type;
        
        this.imageUrl = ImageUrlResolver.getUnitUrl(this);
    }

    private
}