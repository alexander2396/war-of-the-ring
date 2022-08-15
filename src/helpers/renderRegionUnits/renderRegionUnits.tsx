import { Region } from "../../models/region";
import { UnitType } from "../../models/unitType";
import { RenderUnit } from "../../components/renderUnit/renderUnit";

export const RenderRegionUnits = (region: Region): any => {
    let regularBlock;
    if (region.units.some(x => x.type === UnitType.Regular)) {
        const imageUrl = region.units.find(x => x.type === UnitType.Regular).imageUrl;
        const count = region.units.filter(x => x.type === UnitType.Regular).length;
        regularBlock = RenderUnit(imageUrl, count);
    }

    let eliteBlock;
    if (region.units.some(x => x.type === UnitType.Elite)) {
        const imageUrl = region.units.find(x => x.type === UnitType.Elite).imageUrl;
        const count = region.units.filter(x => x.type === UnitType.Elite).length;
        eliteBlock = RenderUnit(imageUrl, count);
    }

    
    let leaderBlock;
    if (region.units.some(x => x.type === UnitType.Leader)) {
        const imageUrl = region.units.find(x => x.type === UnitType.Leader).imageUrl;
        const count = region.units.filter(x => x.type === UnitType.Leader).length;
        leaderBlock = RenderUnit(imageUrl, count);
    }

    return (
        [
            regularBlock,
            eliteBlock,
            leaderBlock
        ]
    );
}