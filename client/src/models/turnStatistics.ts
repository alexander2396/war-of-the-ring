import { Dice } from "./dice";
import { Unit } from "./unit";

export class TurnStatistics {
    turn: number;
    dices: Dice[];
    heroes: Unit[];
}