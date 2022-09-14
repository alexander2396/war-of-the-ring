import { Faction } from "./enums/faction";
import { SettlementType } from "./enums/settlementType";
import { Side } from "./enums/side";
import { Unit } from "./unit";

export class Region {
    key: string;
    units: Unit[];
    xposition: string;
    yposition: string;
    settlementType: SettlementType;
    side: Side;
    faction: Faction;
    isFellowshipHere: boolean;
    captured: boolean;
}