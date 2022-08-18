import { RenderUnit } from "../../elements/renderUnit";
import { Region } from "../../models/region";
import { UnitType } from "../../models/unitType";

type PropTypes = {
    region: Region
}
export const RenderRegionUnits = ({region}: PropTypes) => {

        const units = [];
    
        if (region.units.some(x => x.type === UnitType.Regular)) {
            const imageUrl = region.units.find(x => x.type === UnitType.Regular).imageUrl;
            const count = region.units.filter(x => x.type === UnitType.Regular).length;
            units.push({imageUrl, count});
        }
    
        if (region.units.some(x => x.type === UnitType.Elite)) {
            const imageUrl = region.units.find(x => x.type === UnitType.Elite).imageUrl;
            const count = region.units.filter(x => x.type === UnitType.Elite).length;
            units.push({imageUrl, count});
        }
    
        
        if (region.units.some(x => x.type === UnitType.Leader)) {
            const imageUrl = region.units.find(x => x.type === UnitType.Leader).imageUrl;
            const count = region.units.filter(x => x.type === UnitType.Leader).length;
            units.push({imageUrl, count});
        }

        return (
            <>
                {
                    units.map((unit, i) => {
                        return (<RenderUnit key={i} imageUrl={unit.imageUrl} count={unit.count} />)
                    })
                }
            </>
        )
}
