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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: true,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
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
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'erebor-castle',
            xposition: '60',
            yposition: '305',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Dwarfs,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'grey-havens-castle',
            xposition: '60',
            yposition: '411',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'rivendell-castle',
            xposition: '60',
            yposition: '517',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'woodland-realm-castle',
            xposition: '60',
            yposition: '620',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'lorien-castle',
            xposition: '60',
            yposition: '724',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Elves,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'helms-deep-castle',
            xposition: '60',
            yposition: '829',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Rohan,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'minas-tirith-castle',
            xposition: '60',
            yposition: '933',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'dol-amroth-castle',
            xposition: '60',
            yposition: '1035',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'mount-gundabad-castle',
            xposition: '160',
            yposition: '305',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'moria-castle',
            xposition: '160',
            yposition: '411',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'dol-guldur-castle',
            xposition: '160',
            yposition: '517',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'orthhanc-castle',
            xposition: '160',
            yposition: '620',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Isengard,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'morannon-castle',
            xposition: '160',
            yposition: '724',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'barad-dur-castle',
            xposition: '160',
            yposition: '829',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'minas-morgul-castle',
            xposition: '160',
            yposition: '933',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'umbar-castle',
            xposition: '160',
            yposition: '1035',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: SettlementType.CastleInside,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'forlindon',
            xposition: '322',
            yposition: '228',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'north-ered-luin',
            xposition: '474',
            yposition: '124',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Dwarfs,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'evendim',
            xposition: '564',
            yposition: '157',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'arnor',
            xposition: '611',
            yposition: '62',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'ettenmoors',
            xposition: '793',
            yposition: '126',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'buckland',
            xposition: '674',
            yposition: '257',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Northmen,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'angmar',
            xposition: '713',
            yposition: '35',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.LargeTown,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'mount-gram',
            xposition: '833',
            yposition: '51',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'weather-hills',
            xposition: '821',
            yposition: '224',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'troll-shaws',
            xposition: '886',
            yposition: '260',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'south-downs',
            xposition: '815',
            yposition: '341',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'old-forest',
            xposition: '680',
            yposition: '350',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'cardolan',
            xposition: '707',
            yposition: '447',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'harlindon',
            xposition: '340',
            yposition: '433',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'tower-hills',
            xposition: '474',
            yposition: '407',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'south-ered-luin',
            xposition: '573',
            yposition: '403',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'minhiriath',
            xposition: '583',
            yposition: '560',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'fords-of-bruinen',
            xposition: '936',
            yposition: '305',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'high-pass',
            xposition: '993',
            yposition: '268',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'hollin',
            xposition: '902',
            yposition: '412',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'tharoad',
            xposition: '745',
            yposition: '575',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'enedwaith',
            xposition: '684',
            yposition: '696',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'cap-of-rohan',
            xposition: '794',
            yposition: '719',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Isengard,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'druwaith-laur',
            xposition: '720',
            yposition: '820',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'andrast',
            xposition: '662',
            yposition: '924',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'goblins-gate',
            xposition: '1061',
            yposition: '241',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'old-ford',
            xposition: '1123',
            yposition: '244',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'eagles-eyrie',
            xposition: '1070',
            yposition: '152',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'gladden-fields',
            xposition: '1102',
            yposition: '329',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'dimrill-dale',
            xposition: '1111',
            yposition: '401',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'north-anduin-vale',
            xposition: '1195',
            yposition: '390',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'south-anduin-vale',
            xposition: '1170',
            yposition: '483',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'parth-celebrant',
            xposition: '1106',
            yposition: '560',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'fangorn',
            xposition: '1020',
            yposition: '608',
            units: [],
            side: null,
            faction: null,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'eastemnet',
            xposition: '1157',
            yposition: '668',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Rohan,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'westemnet',
            xposition: '1080',
            yposition: '741',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Rohan,
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'folde',
            xposition: '1172',
            yposition: '805',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Rohan,
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'northern-mirkwood',
            xposition: '1227',
            yposition: '122',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'western-mirkwood',
            xposition: '1230',
            yposition: '208',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'withered-heath',
            xposition: '1314',
            yposition: '123',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'rhosgobel',
            xposition: '1190',
            yposition: '303',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Northmen,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'old-forest-road',
            xposition: '1295',
            yposition: '297',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Northmen,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'narrows-of-the-forest',
            xposition: '1269',
            yposition: '359',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'eastern-mirkwood',
            xposition: '1331',
            yposition: '365',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'southern-mirkwood',
            xposition: '1340',
            yposition: '472',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Sauron,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'northern-rhovanion',
            xposition: '1403',
            yposition: '366',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'vale-of-the-carnen',
            xposition: '1518',
            yposition: '290',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'vale-of-the-celduin',
            xposition: '1507',
            yposition: '373',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'east-rhun',
            xposition: '1738',
            yposition: '348',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'sothern-rhovanion',
            xposition: '1447',
            yposition: '468',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'northern-dorwinion',
            xposition: '1560',
            yposition: '448',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'southern-dorwinion',
            xposition: '1555',
            yposition: '560',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'ash-mountains',
            xposition: '1607',
            yposition: '695',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'noman-lands',
            xposition: '1472',
            yposition: '586',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'eastern-brown-lands',
            xposition: '1365',
            yposition: '570',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'western-brown-lands',
            xposition: '1258',
            yposition: '586',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'western-emyn-muil',
            xposition: '1273',
            yposition: '691',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'eastern-emyn-muil',
            xposition: '1392',
            yposition: '656',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'dagorlad',
            xposition: '1504',
            yposition: '704',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'dead-marshes',
            xposition: '1326',
            yposition: '766',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'north-ithilien',
            xposition: '1397',
            yposition: '818',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'south-ithilien',
            xposition: '1391',
            yposition: '1005',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'west-harondor',
            xposition: '1235',
            yposition: '1172',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'east-harondor',
            xposition: '1380',
            yposition: '1140',
            units: [],
            side: null,
            faction: null,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'kahnd',
            xposition: '1560',
            yposition: '1130',
            units: [],
            side: Side.SauronForces,
            faction: Faction.Easterlings,
            settlementType: null,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'lossarnach',
            xposition: '1216',
            yposition: '984',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'lamedon',
            xposition: '1120',
            yposition: '936',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.SmallTown,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'erech',
            xposition: '971',
            yposition: '910',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'anfalas',
            xposition: '815',
            yposition: '970',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
        },
        {
            key: 'druada-forest',
            xposition: '1240',
            yposition: '813',
            units: [],
            side: Side.FreePeople,
            faction: Faction.Gondor,
            settlementType: SettlementType.None,
            isFellowshipHere: false,
            captured: false
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