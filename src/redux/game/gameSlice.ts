import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetUnitsAction } from "../../actions/setUnitsAction";
import { RootState } from "../store";
import { InitialData } from "../../core/initialData";
import { Card } from "../../models/card";
import { Dice } from "../../models/dice";
import { Region } from "../../models/region";

export interface GameState {
    gameStarted: boolean;
    regions: Region[];
    dices: {
        freePeople: {
            available: Dice[];
            used: Dice[];
        },
        sauronForces: {
            available: Dice[];
            used: Dice[];
        }
    },
    cards: {
        freePeople: {
            deck: Card[],
            hand: Card[],
            played: Card[]
        },
        sauronForces: {
            deck: Card[],
            hand: Card[],
            played: Card[]
        }
    }
}

const initialState: GameState = {
    gameStarted: false,
    regions: new InitialData().Regions,
    dices: {
        freePeople: {
            available: [],
            used: []
        },
        sauronForces: {
            available: [],
            used: []
        }
    },
    cards: {
        freePeople: {
            deck: [],
            hand: [],
            played: []
        },
        sauronForces: {
            deck: [],
            hand: [],
            played: []
        }
    }
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        startGame: (state) => {
            state.gameStarted = true;
        },
        setFreePeopleDices: (state, action: PayloadAction<Dice[]>) => {
            state.dices.freePeople.available = action.payload;
            state.dices.freePeople.used = [];
        },
        setSauronForcesDices: (state, action: PayloadAction<Dice[]>) => {
            state.dices.sauronForces.available = action.payload;
            state.dices.sauronForces.used = [];
        },
        setRegionUnits: (state, action: PayloadAction<SetUnitsAction>) => {
            state.regions.find(x => x.key === action.payload.regionKey).units = action.payload.units;
        },
        useFreePeopleDice: (state, action: PayloadAction<Dice>) => {
            let dice = state.dices.freePeople.available.find(x => x.key === action.payload.key);
            state.dices.freePeople.available = state.dices.freePeople.available.filter(x => x.key !== dice.key);
            state.dices.freePeople.used.push(dice);
        },
        useSauronForcesDice: (state, action: PayloadAction<Dice>) => {
            let dice = state.dices.sauronForces.available.find(x => x.key === action.payload.key);
            state.dices.sauronForces.available = state.dices.sauronForces.available.filter(x => x.key !== dice.key);
            state.dices.sauronForces.used.push(dice);
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
export const selectFreePeopleDices = (state: RootState) => state.game.dices.freePeople.available;
export const selectFreePeopleUsedDices = (state: RootState) => state.game.dices.freePeople.used;
export const selectSauronForcesDices = (state: RootState) => state.game.dices.sauronForces.available;
export const selectSauronForcesUsedDices = (state: RootState) => state.game.dices.sauronForces.used;
export const selectGameStarted = (state: RootState) => state.game.gameStarted;

export default gameSlice.reducer;