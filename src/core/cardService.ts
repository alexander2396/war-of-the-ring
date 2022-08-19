import { Card } from "../models/card";
import { CardType } from "../models/cardType";
import { Side } from "../models/side";

export class CardService {
    static buildFreePeopleStrategyDeck(): Card[] {
        const cards = [
            new Card('fps001.png', Side.FreePeople, CardType.Strategy),
            new Card('fps002.png', Side.FreePeople, CardType.Strategy),
            new Card('fps003.png', Side.FreePeople, CardType.Strategy)
        ];

        return cards;
    }

    static buildFreePeopleCharacterDeck(): Card[] {
        const cards = [
            new Card('fpc001.png', Side.FreePeople, CardType.Character),
            new Card('fpc002.png', Side.FreePeople, CardType.Character),
            new Card('fpc003.png', Side.FreePeople, CardType.Character)
        ];

        return cards;
    }
    
    static buildSauronStrategyDeck(): Card[] {
        const cards = [
            new Card('sas001.png', Side.SauronForces, CardType.Strategy),
            new Card('sas002.png', Side.SauronForces, CardType.Strategy),
            new Card('sas003.png', Side.SauronForces, CardType.Strategy)
        ];

        return cards;
    }

    static buildSauronCharacterDeck(): Card[] {
        const cards = [
            new Card('sac001.png', Side.SauronForces, CardType.Character),
            new Card('sac002.png', Side.SauronForces, CardType.Character),
            new Card('sac003.png', Side.SauronForces, CardType.Character)
        ];

        return cards;
    }
}