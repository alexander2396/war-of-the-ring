import { PayloadAction } from "@reduxjs/toolkit";
import { SetUnitsAction } from "../../actions/setUnitsAction";
import { saveGame } from "./genericReducers";

export const setRegionUnitsReducer = (state, action: PayloadAction<SetUnitsAction>) => {
    state.gameState.regions.find(x => x.key === action.payload.regionKey).units = action.payload.units;

    saveGame(state, `${state.username} moved units.`);
}