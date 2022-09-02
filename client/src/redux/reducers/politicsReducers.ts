import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { Faction } from "../../models/enums/faction";
import { Politics } from "../../models/politics";
import { saveGame } from "./genericReducers";

export const movePoliticsReducer = (state: ApplicationState, action: PayloadAction<Politics>) => {
    state.gameState.politics.find(x => x.faction === action.payload.faction).track--;

    saveGame(state, `${state.username} moved ${Faction[action.payload.faction]} on political track.`);
}

export const activatePoliticsReducer = (state: ApplicationState, action: PayloadAction<Politics>) => {
    state.gameState.politics.find(x => x.faction === action.payload.faction).isActive = true;

    saveGame(state, `${state.username} activated ${Faction[action.payload.faction]}.`);
}