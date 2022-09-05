import { Card } from "../models/card";
import { CardType } from "../models/enums/cardType";
import { Side } from "../models/enums/side";

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export class CardService {
    static buildFreePeopleStrategyDeck(): Card[] {
        const cards = [
            new Card('fps001', Side.FreePeople, CardType.Strategy),
            new Card('fps002', Side.FreePeople, CardType.Strategy),
            new Card('fps003', Side.FreePeople, CardType.Strategy)
        ];

        shuffle(cards);

        return cards;
    }

    static buildFreePeopleCharacterDeck(): Card[] {
        const cards = [
            new Card('fpc001', Side.FreePeople, CardType.Character),
            new Card('fpc002', Side.FreePeople, CardType.Character),
            new Card('fpc003', Side.FreePeople, CardType.Character)
        ];
        
        shuffle(cards);

        return cards;
    }
    
    static buildSauronStrategyDeck(): Card[] {
        const cards = [
            new Card('sas001', Side.SauronForces, CardType.Strategy),
            new Card('sas002', Side.SauronForces, CardType.Strategy),
            new Card('sas003', Side.SauronForces, CardType.Strategy)
        ];

        return cards;
    }

    static buildSauronCharacterDeck(): Card[] {
        const cards = [
            new Card('sac001', Side.SauronForces, CardType.Character),
            new Card('sac002', Side.SauronForces, CardType.Character),
            new Card('sac003', Side.SauronForces, CardType.Character)
        ];

        return cards;
    }
}