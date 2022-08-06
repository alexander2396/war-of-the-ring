import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { InitialData } from "../core/initialData";
import { Region } from "../models/region";

export interface GameState {
    regions: Region[];
}

const initialState: GameState = {
    regions: new InitialData().Regions
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        addUnit: (state) => {
        }
    }
});

export const { addUnit } = gameSlice.actions;

export const selectRegions = (state: RootState) => state.game.regions;

export default gameSlice.reducer;