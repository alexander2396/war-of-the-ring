import { CardType } from "../models/enums/cardType";
import { Side } from "../models/enums/side";

export class DrawCardAction {
    side: Side;
    cardType: CardType;
}