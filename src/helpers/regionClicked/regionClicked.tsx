import { useAppDispatch } from "../../hooks/hooks";
import { useSelectedRegion } from "../../hooks/useSelectedRegion";
import { useShowUnitsMenu } from "../../hooks/useShowUnitsMenu";
import { Region } from "../../models/region";
import { setRegionUnits } from "../../redux/game/gameSlice";

export const RegionClicked = (region: Region): void => {
    const { setShowUnitsMenu } = useShowUnitsMenu()
    const { selectedRegion, setSelectedRegion } = useSelectedRegion()

    const dispatch = useAppDispatch();

    if (!selectedRegion) {
        if (!region.units || region.units.length === 0) return;

        region.units.map(x => x.selected = true);
        setShowUnitsMenu(true);
        setSelectedRegion(region);
    } else {
        if (region.key === selectedRegion.key) return;

        let unitsArray = [];
        unitsArray = unitsArray.concat(selectedRegion.units.filter(x => x.selected));
        unitsArray = unitsArray.concat(region.units);
        dispatch(setRegionUnits({
            regionKey: region.key,
            units: unitsArray
        }));
        dispatch(setRegionUnits({
            regionKey: selectedRegion.key,
            units: selectedRegion.units.filter(x => !x.selected)
        }));

        setShowUnitsMenu(false);
        setSelectedRegion(null);
    }    
}