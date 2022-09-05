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
            new Card('fps01', Side.FreePeople, CardType.Strategy),
            new Card('fps02', Side.FreePeople, CardType.Strategy),
            new Card('fps03', Side.FreePeople, CardType.Strategy),
            new Card('fps04', Side.FreePeople, CardType.Strategy),
            new Card('fps05', Side.FreePeople, CardType.Strategy),
            new Card('fps06', Side.FreePeople, CardType.Strategy),
            new Card('fps07', Side.FreePeople, CardType.Strategy),
            new Card('fps08', Side.FreePeople, CardType.Strategy),
            new Card('fps09', Side.FreePeople, CardType.Strategy),
            new Card('fps10', Side.FreePeople, CardType.Strategy),
            new Card('fps11', Side.FreePeople, CardType.Strategy),
            new Card('fps12', Side.FreePeople, CardType.Strategy),
            new Card('fps13', Side.FreePeople, CardType.Strategy),
            new Card('fps14', Side.FreePeople, CardType.Strategy),
            new Card('fps15', Side.FreePeople, CardType.Strategy),
            new Card('fps16', Side.FreePeople, CardType.Strategy),
            new Card('fps17', Side.FreePeople, CardType.Strategy),
            new Card('fps18', Side.FreePeople, CardType.Strategy),
            new Card('fps19', Side.FreePeople, CardType.Strategy),
            new Card('fps20', Side.FreePeople, CardType.Strategy),
            new Card('fps21', Side.FreePeople, CardType.Strategy),
            new Card('fps22', Side.FreePeople, CardType.Strategy),
            new Card('fps23', Side.FreePeople, CardType.Strategy),
            new Card('fps24', Side.FreePeople, CardType.Strategy)
        ];

        shuffle(cards);

        return cards;
    }

    static buildFreePeopleCharacterDeck(): Card[] {
        const cards = [
            new Card('fpc01', Side.FreePeople, CardType.Character),
            new Card('fpc02', Side.FreePeople, CardType.Character),
            new Card('fpc03', Side.FreePeople, CardType.Character),
            new Card('fpc04', Side.FreePeople, CardType.Character),
            new Card('fpc05', Side.FreePeople, CardType.Character),
            new Card('fpc06', Side.FreePeople, CardType.Character),
            new Card('fpc07', Side.FreePeople, CardType.Character),
            new Card('fpc08', Side.FreePeople, CardType.Character),
            new Card('fpc09', Side.FreePeople, CardType.Character),
            new Card('fpc10', Side.FreePeople, CardType.Character),
            new Card('fpc11', Side.FreePeople, CardType.Character),
            new Card('fpc12', Side.FreePeople, CardType.Character),
            new Card('fpc13', Side.FreePeople, CardType.Character),
            new Card('fpc14', Side.FreePeople, CardType.Character),
            new Card('fpc15', Side.FreePeople, CardType.Character),
            new Card('fpc16', Side.FreePeople, CardType.Character),
            new Card('fpc17', Side.FreePeople, CardType.Character),
            new Card('fpc18', Side.FreePeople, CardType.Character),
            new Card('fpc19', Side.FreePeople, CardType.Character),
            new Card('fpc20', Side.FreePeople, CardType.Character),
            new Card('fpc21', Side.FreePeople, CardType.Character),
            new Card('fpc22', Side.FreePeople, CardType.Character),
            new Card('fpc23', Side.FreePeople, CardType.Character),
            new Card('fpc24', Side.FreePeople, CardType.Character)
        ];
        
        shuffle(cards);

        return cards;
    }
    
    static buildSauronStrategyDeck(): Card[] {
        const cards = [
            new Card('sas01', Side.SauronForces, CardType.Strategy),
            new Card('sas02', Side.SauronForces, CardType.Strategy),
            new Card('sas03', Side.SauronForces, CardType.Strategy),
            new Card('sas04', Side.SauronForces, CardType.Strategy),
            new Card('sas05', Side.SauronForces, CardType.Strategy),
            new Card('sas06', Side.SauronForces, CardType.Strategy),
            new Card('sas07', Side.SauronForces, CardType.Strategy),
            new Card('sas08', Side.SauronForces, CardType.Strategy),
            new Card('sas09', Side.SauronForces, CardType.Strategy),
            new Card('sas10', Side.SauronForces, CardType.Strategy),
            new Card('sas11', Side.SauronForces, CardType.Strategy),
            new Card('sas12', Side.SauronForces, CardType.Strategy),
            new Card('sas13', Side.SauronForces, CardType.Strategy),
            new Card('sas14', Side.SauronForces, CardType.Strategy),
            new Card('sas15', Side.SauronForces, CardType.Strategy),
            new Card('sas16', Side.SauronForces, CardType.Strategy),
            new Card('sas17', Side.SauronForces, CardType.Strategy),
            new Card('sas18', Side.SauronForces, CardType.Strategy),
            new Card('sas19', Side.SauronForces, CardType.Strategy),
            new Card('sas20', Side.SauronForces, CardType.Strategy),
            new Card('sas21', Side.SauronForces, CardType.Strategy),
            new Card('sas22', Side.SauronForces, CardType.Strategy),
            new Card('sas23', Side.SauronForces, CardType.Strategy),
            new Card('sas24', Side.SauronForces, CardType.Strategy)
        ];

        return cards;
    }

    static buildSauronCharacterDeck(): Card[] {
        const cards = [
            new Card('sac01', Side.SauronForces, CardType.Character),
            new Card('sac02', Side.SauronForces, CardType.Character),
            new Card('sac03', Side.SauronForces, CardType.Character),
            new Card('sac04', Side.SauronForces, CardType.Character),
            new Card('sac05', Side.SauronForces, CardType.Character),
            new Card('sac06', Side.SauronForces, CardType.Character),
            new Card('sac07', Side.SauronForces, CardType.Character),
            new Card('sac08', Side.SauronForces, CardType.Character),
            new Card('sac09', Side.SauronForces, CardType.Character),
            new Card('sac10', Side.SauronForces, CardType.Character),
            new Card('sac11', Side.SauronForces, CardType.Character),
            new Card('sac12', Side.SauronForces, CardType.Character),
            new Card('sac13', Side.SauronForces, CardType.Character),
            new Card('sac14', Side.SauronForces, CardType.Character),
            new Card('sac15', Side.SauronForces, CardType.Character),
            new Card('sac16', Side.SauronForces, CardType.Character),
            new Card('sac17', Side.SauronForces, CardType.Character),
            new Card('sac18', Side.SauronForces, CardType.Character),
            new Card('sac19', Side.SauronForces, CardType.Character),
            new Card('sac20', Side.SauronForces, CardType.Character),
            new Card('sac21', Side.SauronForces, CardType.Character),
            new Card('sac22', Side.SauronForces, CardType.Character),
            new Card('sac23', Side.SauronForces, CardType.Character),
            new Card('sac24', Side.SauronForces, CardType.Character)
        ];

        return cards;
    }
}