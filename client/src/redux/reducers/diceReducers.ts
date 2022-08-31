import { PayloadAction } from "@reduxjs/toolkit";
import { Dice } from "../../models/dice";
import { saveGame } from "./genericReducers";

export const setFreePeopleDicesReducer = (state, action: PayloadAction<Dice[]>) => {
    state.gameState.dices.freePeople.available = action.payload;
    state.gameState.dices.freePeople.used = [];
}

export const setSauronForcesDicesReducer = (state, action: PayloadAction<Dice[]>) => {
    state.gameState.dices.sauronForces.available = action.payload;
    state.gameState.dices.sauronForces.used = [];
}

export const useFreePeopleDiceReducer = (state, action: PayloadAction<Dice>) => {
    let dice = state.gameState.dices.freePeople.available.find(x => x.key === action.payload.key);
    state.gameState.dices.freePeople.available = state.gameState.dices.freePeople.available.filter(x => x.key !== dice.key);
    state.gameState.dices.freePeople.used.push(dice);

    saveGame(state, `${state.username} used dice.`);
}

export const useSauronForcesDiceReducer = (state, action: PayloadAction<Dice>) => {
    let dice = state.gameState.dices.sauronForces.available.find(x => x.key === action.payload.key);
    state.gameState.dices.sauronForces.available = state.gameState.dices.sauronForces.available.filter(x => x.key !== dice.key);
    state.gameState.dices.sauronForces.used.push(dice);

    saveGame(state, `${state.username} used dice.`);
}