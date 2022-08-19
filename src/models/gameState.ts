import { Card } from "./card";
import { Dice } from "./dice";
import { Region } from "./region";

export interface GameState {
    gameStarted: boolean;
    regions: Region[];
    dices: {
        freePeople: {
            available: Dice[];
            used: Dice[];
        },
        sauronForces: {
            available: Dice[];
            used: Dice[];
        }
    },
    cards: {
        freePeople: {
            strategyDeck: Card[],
            characterDeck: Card[],
            hand: Card[],
            played: Card[]
        },
        sauronForces: {
            strategyDeck: Card[],
            characterDeck: Card[],
            hand: Card[],
            played: Card[]
        }
    }
}