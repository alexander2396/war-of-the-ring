import { CardType } from "../models/cardType";
import { Side } from "../models/side";

export class DrawCardAction {
    side: Side;
    cardType: CardType;
}