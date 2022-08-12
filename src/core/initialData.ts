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
        },
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
        },
        {
            key: 'grey-havens',
            xposition: '405px',
            yposition: '325px',
            units: [
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader)
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'woodland-realm',
            xposition: '1310px',
            yposition: '230px',
            units: [
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader)
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'mount-gundabad',
            xposition: '912px',
            yposition: '59px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular)
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'moria',
            xposition: '1016px',
            yposition: '367px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular)
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'dol-guldur',
            xposition: '1254px',
            yposition: '480px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Elite),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Leader),
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'morannon',
            xposition: '1500px',
            yposition: '807px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Leader),
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'minas-morgul',
            xposition: '1485px',
            yposition: '925px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Leader),
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'barad-dur',
            xposition: '1648px',
            yposition: '800px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Elite),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Leader),
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'gorgoroth',
            xposition: '1618px',
            yposition: '952px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'nurn',
            xposition: '1552px',
            yposition: '1062px',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
            ],
            rectangleCoordinates: ''
        }
    ]
}