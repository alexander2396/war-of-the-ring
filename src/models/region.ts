import { Faction } from "./faction";
import { SettlementType } from "./settlementType";
import { Side } from "./side";
import { Unit } from "./unit";

export class Region {
    key: string;
    units: Unit[];
    xposition: string;
    yposition: string;
    settlementType: SettlementType;
    side: Side;
    faction: Faction;
}