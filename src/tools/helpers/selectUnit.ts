import { Region } from "../../models/region";
import { Unit } from "../../models/unit";

type PropTypes = {
    unit: Unit
    SelectedRegion: Region
    setSelectedRegion: React.Dispatch<React.SetStateAction<Region>>
}

export const selectUnit = ({unit, SelectedRegion, setSelectedRegion}: PropTypes) => {
    let region = { ...SelectedRegion };
    region.units.find(x => x.key === unit.key).selected = !unit.selected;
    setSelectedRegion(region);
}