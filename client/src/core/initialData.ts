import { Faction } from "../models/enums/faction";
import { Hero } from "../models/hero";
import { Region } from "../models/region";
import { SettlementType } from "../models/enums/settlementType";
import { Side } from "../models/enums/side";
import { Unit } from "../models/unit";
import { UnitType } from "../models/enums/unitType";

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
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.Castle
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
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.Castle
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
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.Castle
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
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.Castle
        },
        {
            key: 'mount-gundabad',
            xposition: '912',
            yposition: '59',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular)
            ],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.Castle
        },
        {
            key: 'moria',
            xposition: '1016',
            yposition: '367',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular)
            ],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.Castle
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
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.Castle
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
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.Castle
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
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.Castle
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
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.Castle
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
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.Castle
        },
        {
            key: 'nurn',
            xposition: '1552',
            yposition: '1062',
            units: [
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
            ],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.Castle
        },
        {
            key: 'ered-luin',
            xposition: '440',
            yposition: '215',
            units: [
                new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Dwarfs,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'iron-hills',
            xposition: '1526',
            yposition: '150',
            units: [
                new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Dwarfs,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'erebor',
            xposition: '1414',
            yposition: '128',
            units: [
                new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Leader)
            ],
            side: Side.FreePeople,
            faction: Faction.Dwarfs,
            settlementType: SettlementType.Castle
        },
        {
            key: 'fellowship',
            xposition: '1715',
            yposition: '200',
            units: [
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader, Hero.Gandalf),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader, Hero.Aragorn),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader, Hero.Legolas),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader, Hero.Gimli),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader, Hero.Boromir),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader, Hero.Merry),
                new Unit(Side.FreePeople, Faction.Elves, UnitType.Leader, Hero.Pippin)
            ],
            side: null,
            faction: null,
            settlementType: null
        },
        {
            key: 'shire',
            xposition: '590',
            yposition: '300',
            units: [
                new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Northmen,
            settlementType: SettlementType.LargeTown
        },
        {
            key: 'bree',
            xposition: '744',
            yposition: '221',
            units: [
                new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Northmen,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'north-downs',
            xposition: '679',
            yposition: '159',
            units: [
                new Unit(Side.FreePeople, Faction.Northmen, UnitType.Elite)
            ],
            side: Side.FreePeople,
            faction: Faction.Northmen,
            settlementType: SettlementType.None
        },
        {
            key: 'carrock',
            xposition: '1158',
            yposition: '172',
            units: [
                new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Northmen,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'dale',
            xposition: '1425',
            yposition: '255',
            units: [
                new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Northmen, UnitType.Leader)
            ],
            side: Side.FreePeople,
            faction: Faction.Northmen,
            settlementType: SettlementType.LargeTown
        },
        {
            key: 'orthanc',
            xposition: '912',
            yposition: '692',
            units: [
                new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Isengard, UnitType.Elite),
            ],
            side: Side.SauronForces,
            faction: Faction.Isengard,
            settlementType: SettlementType.Castle
        },
        {
            key: 'north-dunland',
            xposition: '890',
            yposition: '505',
            units: [
                new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular)
            ],
            side: Side.SauronForces,
            faction: Faction.Isengard,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'south-dunland',
            xposition: '857',
            yposition: '605',
            units: [
                new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular)
            ],
            side: Side.SauronForces,
            faction: Faction.Isengard,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'fords-of-isen',
            xposition: '872',
            yposition: '780',
            units: [
                new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Rohan, UnitType.Leader)
            ],
            side: Side.FreePeople,
            faction: Faction.Rohan,
            settlementType: SettlementType.Fortification
        },
        {
            key: 'helms-deep',
            xposition: '986',
            yposition: '817',
            units: [
                new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Rohan,
            settlementType: SettlementType.Castle
        },
        {
            key: 'edoras',
            xposition: '1105',
            yposition: '822',
            units: [
                new Unit(Side.FreePeople, Faction.Rohan, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Rohan,
            settlementType: SettlementType.LargeTown
        },
        {
            key: 'dol-amroth',
            xposition: '1030',
            yposition: '1014',
            units: [
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.Castle
        },
        {
            key: 'pelargir',
            xposition: '1181',
            yposition: '1071',
            units: [
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular)
            ],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.LargeTown
        },
        {
            key: 'minas-tirith',
            xposition: '1265',
            yposition: '917',
            units: [
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Elite),
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Leader),
            ],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.Castle
        },
        {
            key: 'osgiliath',
            xposition: '1323',
            yposition: '1003',
            units: [
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
                new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular)
            ],
            side: null,
            faction: null,
            settlementType: SettlementType.Fortification
        },
        {
            key: 'north-rhun',
            xposition: '1638',
            yposition: '352',
            units: [
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular)
            ],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'south-rhun',
            xposition: '1685',
            yposition: '628',
            units: [
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Elite)
            ],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'umbar',
            xposition: '1143',
            yposition: '1267',
            units: [
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular)
            ],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: SettlementType.Castle
        },
        {
            key: 'near-harad',
            xposition: '1341',
            yposition: '1267',
            units: [
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Elite)
            ],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: SettlementType.SmallTown
        },
        {
            key: 'far-harad',
            xposition: '1535',
            yposition: '1190',
            units: [
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
                new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Elite)
            ],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: SettlementType.LargeTown
        }
    ];
}