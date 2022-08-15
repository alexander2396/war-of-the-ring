import { useSelectedRegion } from "../../hooks/useSelectedRegion";
import { Unit } from "../../models/unit";

export const SelectUnit = (unit: Unit) => {
    const { selectedRegion, setSelectedRegion } = useSelectedRegion()
    let region = { ...selectedRegion };
    region.units.find(x => x.key === unit.key).selected = !unit.selected;
    setSelectedRegion(region);
}