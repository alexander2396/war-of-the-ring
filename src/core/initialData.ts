import { Card } from "../models/card";
import { CardType } from "../models/cardType";
import { Faction } from "../models/faction";
import { Region } from "../models/region";
import { Side } from "../models/side";
import { Unit } from "../models/unit";
import { UnitType } from "../models/unitType";

export class InitialData {
    Regions: Region[] = [
        {
            key: 'rivendell',
            xposition: '985',
            yposition: '190',
            units: [
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader)
            ],
            rectangleCoordinates: '954,123,1019,140,1044,201,920,250'
        },
        {
            key: 'lorien',
            xposition: '1062',
            yposition: '476',
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
            xposition: '405',
            yposition: '325',
            units: [
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader)
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'woodland-realm',
            xposition: '1310',
            yposition: '230',
            units: [
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader)
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'mount-gundabad',
            xposition: '912',
            yposition: '59',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular)
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'moria',
            xposition: '1016',
            yposition: '367',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular)
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'dol-guldur',
            xposition: '1254',
            yposition: '480',
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
            xposition: '1500',
            yposition: '807',
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
            xposition: '1485',
            yposition: '925',
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
            xposition: '1648',
            yposition: '800',
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
            xposition: '1618',
            yposition: '952',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
            ],
            rectangleCoordinates: ''
        },
        {
            key: 'nurn',
            xposition: '1552',
            yposition: '1062',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
            ],
            rectangleCoordinates: ''
        }
    ];
}