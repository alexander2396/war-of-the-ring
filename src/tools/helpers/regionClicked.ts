import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { Region } from "../../models/region";
import { GameState, setRegionUnits } from "../../redux/game/gameSlice";

export type RegionClickedTypes = {
    region?: Region;
    showUnitsMenu: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedRegion: React.Dispatch<React.SetStateAction<Region>>,
    dispatch: ThunkDispatch<{
        game: GameState;
    }, undefined, AnyAction> & Dispatch<AnyAction>,
    SelectedRegion: Region,
}

export const regionClicked = ({region, showUnitsMenu, setSelectedRegion, dispatch, SelectedRegion}: RegionClickedTypes): void => {
    if (!SelectedRegion) {
        if (!region.units || region.units.length === 0) return;

        region.units.map(x => x.selected = true);
        showUnitsMenu(true);
        setSelectedRegion(region);
    } else {
        if (region.key === SelectedRegion.key) return;

        let unitsArray = [];
        unitsArray = unitsArray.concat(SelectedRegion.units.filter(x => x.selected));
        unitsArray = unitsArray.concat(region.units);
        dispatch(setRegionUnits({
            regionKey: region.key,
            units: unitsArray
        }));
        dispatch(setRegionUnits({
            regionKey: SelectedRegion.key,
            units: SelectedRegion.units.filter(x => !x.selected)
        }));

        showUnitsMenu(false);
        setSelectedRegion(null);
    }    
}