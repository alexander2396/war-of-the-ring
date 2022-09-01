import { v4 as uuidv4 } from 'uuid';
import { ImageUrlResolver } from '../core/imageUrlResolver';
import { DiceType } from './enums/diceType';
import { Side } from './enums/side';

export class Dice {
    key: string;
    type: DiceType;
    side: Side;

    imageUrl: string;

    constructor(side: Side, type: DiceType) {
        this.key = uuidv4();
        this.side = side;
        this.type = type;
        
        this.imageUrl = ImageUrlResolver.getDiceUrl(this);
    }
}