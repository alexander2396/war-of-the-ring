import { useAppSelector } from "../../hooks/hooks";
import { selectRegions } from "../../redux/game/gameSlice";
import { RegionClicked } from "../regionClicked/regionClicked";

export const RenderRegionAreas = (): any  => {
    const regions = useAppSelector(selectRegions);
    const blocks: any = [];

    regions.forEach((region) => {
        blocks.push(<area className='region' shape="poly" onClick={() => RegionClicked(region)} coords={region.rectangleCoordinates} />)
    });

    return blocks;
}