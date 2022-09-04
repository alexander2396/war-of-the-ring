import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { saveGame } from "./genericReducers";

export const moveFellowshipToRegionReduces = (state: ApplicationState, action: PayloadAction<string>) => {
    let currentLocation = state.gameState.regions.find(x => x.isFellowshipHere);
    let destination = state.gameState.regions.find(x => x.key === action.payload);

    currentLocation.isFellowshipHere = false;
    destination.isFellowshipHere = true;


    saveGame(state, `Fellowship revealed in ${destination.key}`);
}

export const setFellowshipTrackPositionReducer = (state: ApplicationState, action: PayloadAction<number>) => {
    state.gameState.fellowship.trackPosition = action.payload;

    saveGame(state, `${state.username} set fellowship track position to ${action.payload}.`);
}

export const setCorruptionReducer = (state: ApplicationState, action: PayloadAction<number>) => {
    state.gameState.fellowship.corruption = action.payload;

    saveGame(state, `${state.username} set corruption to ${action.payload}.`);
}

export const revealFellowshipReducer = (state: ApplicationState, action: PayloadAction<void>) => {
    state.gameState.fellowship.isRevealed = true;
    state.gameState.fellowship.trackPosition = 0;

    saveGame(state, `${state.username} revealed fellowship.`);
}

export const hideFellowshipReducer = (state: ApplicationState, action: PayloadAction<void>) => {
    state.gameState.fellowship.isRevealed = false;

    saveGame(state, `${state.username} hide fellowship.`);
}