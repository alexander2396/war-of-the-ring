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
    freePeopleUsedDices: Dice[];
    sauronForcesDices: Dice[];
    sauronForcesUsedDices: Dice[];
}

const initialState: GameState = {
    gameStarted: false,
    regions: new InitialData().Regions,
    freePeopleDices: [],
    freePeopleUsedDices: [],
    sauronForcesDices: [],
    sauronForcesUsedDices: []
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
            state.freePeopleUsedDices = [];
        },
        setSauronForcesDices: (state, action: PayloadAction<Dice[]>) => {
            state.sauronForcesDices = action.payload;
            state.sauronForcesUsedDices = [];
        },
        setRegionUnits: (state, action: PayloadAction<SetUnitsAction>) => {
            state.regions.find(x => x.key === action.payload.regionKey).units = action.payload.units;
        },
        useFreePeopleDice: (state, action: PayloadAction<Dice>) => {
            let dice = state.freePeopleDices.find(x => x.key === action.payload.key);
            state.freePeopleDices = state.freePeopleDices.filter(x => x.key !== dice.key);
            state.freePeopleUsedDices.push(dice);
        },
        useSauronForcesDice: (state, action: PayloadAction<Dice>) => {
            let dice = state.sauronForcesDices.find(x => x.key === action.payload.key);
            state.sauronForcesDices = state.sauronForcesDices.filter(x => x.key !== dice.key);
            state.sauronForcesUsedDices.push(dice);
        }
    }
});

export const { 
    setFreePeopleDices,
    setSauronForcesDices,
    startGame,
    setRegionUnits,
    useFreePeopleDice,
    useSauronForcesDice
 } = gameSlice.actions;

export const selectRegions = (state: RootState) => state.game.regions;
export const selectFreePeopleDices = (state: RootState) => state.game.freePeopleDices;
export const selectFreePeopleUsedDices = (state: RootState) => state.game.freePeopleUsedDices;
export const selectSauronForcesDices = (state: RootState) => state.game.sauronForcesDices;
export const selectSauronForcesUsedDices = (state: RootState) => state.game.sauronForcesUsedDices;
export const selectGameStarted = (state: RootState) => state.game.gameStarted;

export default gameSlice.reducer;