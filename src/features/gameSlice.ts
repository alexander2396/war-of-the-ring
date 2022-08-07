import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetUnitsAction } from "../actions/setUnitsAction";
import { RootState } from "../app/store";
import { InitialData } from "../core/initialData";
import { Dice } from "../models/dice";
import { Region } from "../models/region";
import { Unit } from "../models/unit";

export interface GameState {
    gameStarted: boolean;
    regions: Region[];
    freePeopleDices: Dice[];
    sauronForcesDices: Dice[];
}

const initialState: GameState = {
    gameStarted: false,
    regions: new InitialData().Regions,
    freePeopleDices: [],
    sauronForcesDices: []
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame: (state) => {
            state.gameStarted = true;
        },
        setFreePeopleDices: (state, action: PayloadAction<Dice[]>) => {
            state.freePeopleDices = action.payload;
        },
        setSauronForcesDices: (state, action: PayloadAction<Dice[]>) => {
            state.sauronForcesDices = action.payload;
        },
        setRegionUnits: (state, action: PayloadAction<SetUnitsAction>) => {
            state.regions.find(x => x.key === action.payload.regionKey).units = action.payload.units;
        },
    }
});

export const { 
    setFreePeopleDices,
    setSauronForcesDices,
    startGame,
    setRegionUnits
 } = gameSlice.actions;

export const selectRegions = (state: RootState) => state.game.regions;
export const selectFreePeopleDices = (state: RootState) => state.game.freePeopleDices;
export const selectSauronForcesDices = (state: RootState) => state.game.sauronForcesDices;
export const selectGameStarted = (state: RootState) => state.game.gameStarted;

export default gameSlice.reducer;