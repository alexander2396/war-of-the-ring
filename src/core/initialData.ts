import { Faction } from "../models/faction";
import { Region } from "../models/region";
import { Side } from "../models/side";
import { Unit } from "../models/unit";
import { UnitType } from "../models/unitType";

export class InitialData {
    Regions: Region[] = [
        {
            key: 'rivendell',
            xposition: '985px',
            yposition: '190px',
            units: [
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader)
            ],
            rectangleCoordinates: '954,123,1019,140,1044,201,920,250'
        } as Region,
        {
            key: 'lorien',
            xposition: '1062px',
            yposition: '476px',
            units: [
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader)
            ],
            rectangleCoordinates: '988,457,1060,409,1121,475,1112,514,1006,502'
        } as Region,
        {
            key: 'moria',
            xposition: '1016px',
            yposition: '367px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular)
            ]
        } as Region,
    ]
}