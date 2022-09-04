import { Card } from "./card";
import { Dice } from "./dice";
import { Faction } from "./enums/faction";
import { Politics } from "./politics";
import { Region } from "./region";
import { Ring } from "./ring";

export interface GameState {
    key: string;
    gameStarted: boolean;
    regions: Region[];
    dices: {
        freePeople: {
            available: Dice[];
            used: Dice[];
            hunt: Dice[];
        },
        sauronForces: {
            available: Dice[];
            used: Dice[];
            hunt: Dice[];
        }
    },
    cards: {
        freePeople: {
            strategyDeck: Card[],
            characterDeck: Card[],
            hand: Card[],
            draft: Card[],
            active: Card[]
        },
        sauronForces: {
            strategyDeck: Card[],
            characterDeck: Card[],
            hand: Card[],
            draft: Card[],
            active: Card[]
        }
    },
    politics: Politics[],
    rings: {
        freePeople: Ring[],
        sauronForces: Ring[]
    },
    victoryPoints: {
        freePeople: number,
        sauronForces: number
    }
}