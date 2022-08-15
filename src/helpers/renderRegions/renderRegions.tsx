import { useAppSelector } from "../../hooks/hooks";
import { selectRegions } from "../../redux/game/gameSlice";
import { RegionClicked } from "../regionClicked/regionClicked";
import { RenderRegionUnits } from "../renderRegionUnits/renderRegionUnits";

export const RenderRegions = (): any =>  {
    const regions = useAppSelector(selectRegions);
    const regionBlocks: any = [];
    regions.forEach((region) => {
        regionBlocks.push(
        <div>
            <div className='regionArmy d-flex flex-row' style={{ left: region.xposition, top: region.yposition }}
                onClick={() => RegionClicked(region)}>{RenderRegionUnits(region)}</div>
        </div>
        )
    })

    return regionBlocks;
}