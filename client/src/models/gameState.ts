import { Card } from "./card";
import { Dice } from "./dice";
import { HuntTile } from "./huntTile";
import { Politics } from "./politics";
import { Region } from "./region";
import { Ring } from "./ring";
import { Unit } from "./unit";

export interface GameState {
    turn: number;
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
    },
    fellowship: {
        isRevealed: boolean,
        trackPosition: number,
        corruption: number,
        mordorPosition: number
    },
    hunt: {
        drawn: HuntTile[],
        pool: HuntTile[]
    },
    unitsPool: Unit[],
    deadUnits: Unit[]
}