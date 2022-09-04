import { Faction } from "../models/enums/faction";
import { Hero } from "../models/hero";
import { Region } from "../models/region";
import { SettlementType } from "../models/enums/settlementType";
import { Side } from "../models/enums/side";
import { Unit } from "../models/unit";
import { UnitType } from "../models/enums/unitType";
import { Politics } from "../models/politics";
import { HuntTile } from "../models/huntTile";

export class InitialData {
    Regions: Region[] = [
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
            settlementType: null,
            isFellowshipHere: false
        },
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: true
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.LargeTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.None,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.LargeTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.Fortification,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.LargeTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.LargeTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.Fortification,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.Castle,
            isFellowshipHere: false
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
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false
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
            settlementType: SettlementType.LargeTown,
            isFellowshipHere: false
        },
        {
            key: 'erebor-castle',
            xposition: '60',
            yposition: '305',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Dwarfs,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'grey-havens-castle',
            xposition: '60',
            yposition: '411',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'rivendell-castle',
            xposition: '60',
            yposition: '517',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'woodland-realm-castle',
            xposition: '60',
            yposition: '620',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'lorien-castle',
            xposition: '60',
            yposition: '724',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'helms-deep-castle',
            xposition: '60',
            yposition: '829',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Rohan,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'minas-tirith-castle',
            xposition: '60',
            yposition: '933',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'dol-amroth-castle',
            xposition: '60',
            yposition: '1035',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'mount-gundabad-castle',
            xposition: '160',
            yposition: '305',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'moria-castle',
            xposition: '160',
            yposition: '411',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'dol-guldur-castle',
            xposition: '160',
            yposition: '517',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'orthhanc-castle',
            xposition: '160',
            yposition: '620',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Isengard,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'morannon-castle',
            xposition: '160',
            yposition: '724',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'barad-dur-castle',
            xposition: '160',
            yposition: '829',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'minas-morgul-castle',
            xposition: '160',
            yposition: '933',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        },
        {
            key: 'umbar-castle',
            xposition: '160',
            yposition: '1035',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false
        }
    ];

    Politics: Politics[] = [
        {
            faction: Faction.Elves,
            isActive: true,
            track: 3
        },
        {
            faction: Faction.Dwarfs,
            isActive: false,
            track: 3
        },
        {
            faction: Faction.Northmen,
            isActive: false,
            track: 3
        },
        {
            faction: Faction.Rohan,
            isActive: false,
            track: 3
        },
        {
            faction: Faction.Gondor,
            isActive: false,
            track: 2
        },
        {
            faction: Faction.Easterlings,
            isActive: true,
            track: 2
        },
        {
            faction: Faction.Isengard,
            isActive: true,
            track: 1
        },
        {
            faction: Faction.Sauron,
            isActive: true,
            track: 1
        }
    ]

    Hunt = {
        Pool: [
            new HuntTile('3.png'),
            new HuntTile('3.png'),
            new HuntTile('3.png'),
            new HuntTile('2.png'),
            new HuntTile('2.png'),
            new HuntTile('1.png'),
            new HuntTile('1.png'),
            new HuntTile('eyer.png'),
            new HuntTile('eyer.png'),
            new HuntTile('eyer.png'),
            new HuntTile('eyer.png'),
            new HuntTile('2r.png'),
            new HuntTile('1r.png'),
            new HuntTile('1r.png'),
            new HuntTile('0r.png'),
            new HuntTile('0r.png')
        ],
        Drawn: [
            new HuntTile('b0.png'),
            new HuntTile('b0.png'),
            new HuntTile('b-1.png'),
            new HuntTile('b-2.png'),
            new HuntTile('r1rs.png'),
            new HuntTile('r3s.png'),
            new HuntTile('rds.png'),
            new HuntTile('reyers.png'),
        ],
    };

    UnitsPool: Unit[] = [
        new Unit(Side.FreePeople, Faction.Elves, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Elves, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Elves, UnitType.Elite),

        new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Leader),
        new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Leader),
        new Unit(Side.FreePeople, Faction.Dwarfs, UnitType.Leader),

        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Leader),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Leader),
        new Unit(Side.FreePeople, Faction.Gondor, UnitType.Leader),
    
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Leader),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Leader),
        new Unit(Side.FreePeople, Faction.Northmen, UnitType.Leader),
        
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Regular),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Elite),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Leader),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Leader),
        new Unit(Side.FreePeople, Faction.Rohan, UnitType.Leader),

        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Isengard, UnitType.Elite),
        
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Leader),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Leader),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Leader),
        new Unit(Side.SauronForces, Faction.Sauron, UnitType.Leader),

        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Regular),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Elite),
        new Unit(Side.SauronForces, Faction.Easterlings, UnitType.Elite)
    ];
}