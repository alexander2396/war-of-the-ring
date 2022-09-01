import { v4 as uuidv4 } from 'uuid';
import { ImageUrlResolver } from '../core/imageUrlResolver';
import { CardType } from './enums/cardType';
import { Side } from './enums/side';

export class Card {
    key: string;
    side: Side;
    type: CardType;

    imageUrl: string;
    smallImageUrl: string;

    constructor(fileName: string, side: Side, type: CardType) {
        this.key = uuidv4();
        this.side = side;
        this.type = type;        
        
        this.imageUrl = ImageUrlResolver.getCardUrl(fileName);
        this.smallImageUrl = ImageUrlResolver.getSmallCardUrl(fileName);
    }
}