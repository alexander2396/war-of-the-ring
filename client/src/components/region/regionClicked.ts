import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import { GameState } from "../../models/gameState";
import { Region } from "../../models/region";
import { moveUnits } from "../../redux/game/gameSlice";

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
        region.units.map(x => x.selected = true);
        
        showUnitsMenu(true);
        setSelectedRegion(region);
    } else {
        if (region.key === SelectedRegion.key) return;

        dispatch(moveUnits({
            regionFromKey: SelectedRegion.key,
            regionToKey: region.key,
            units: SelectedRegion.units.filter(x => x.selected)
        }));

        showUnitsMenu(false);
        setSelectedRegion(null);
    }    
}