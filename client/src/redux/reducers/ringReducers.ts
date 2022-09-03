import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { Ring } from "../../models/ring";
import { saveGame } from "./genericReducers";

export const useFreePeopleRingReducer = (state: ApplicationState, action: PayloadAction<Ring>) => {
    let ring = state.gameState.rings.freePeople.find(x => x.number === action.payload.number);

    state.gameState.rings.freePeople = state.gameState.rings.freePeople.filter(x => x.number !== ring.number);
    state.gameState.rings.sauronForces.push(ring);

    saveGame(state, `${state.username} used ring.`);
}

export const useSauronForcesRingReducer = (state: ApplicationState, action: PayloadAction<Ring>) => {
    state.gameState.rings.sauronForces = state.gameState.rings.sauronForces.filter(x => x.number !== action.payload.number);

    saveGame(state, `${state.username} used ring.`);
}