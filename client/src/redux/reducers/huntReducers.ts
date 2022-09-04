import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { HuntTile } from "../../models/huntTile";
import { saveGame } from "./genericReducers";

export const addHuntTileToPoolReducer = (state: ApplicationState, action: PayloadAction<HuntTile>) => {
    let tile = state.gameState.hunt.drawn.find(x => x.key === action.payload.key);

    state.gameState.hunt.drawn = state.gameState.hunt.drawn.filter(x => x.key !== action.payload.key);
    state.gameState.hunt.pool.push(tile);

    saveGame(state, `${state.username} added ${tile.imageUrl} to pool.`);
}

export const removeHuntTileFromPoolReducer = (state: ApplicationState, action: PayloadAction<HuntTile>) => {
    let tile = state.gameState.hunt.pool.find(x => x.key === action.payload.key);

    state.gameState.hunt.pool = state.gameState.hunt.pool.filter(x => x.key !== action.payload.key);
    state.gameState.hunt.drawn.push(tile);

    saveGame(state, `${state.username} removed ${tile.imageUrl} from pool.`);
}

export const getRandomHuntTileFromPoolReducer = (state: ApplicationState, action: PayloadAction<void>) => {
    let tile = state.gameState.hunt.pool[Math.floor(Math.random() * state.gameState.hunt.pool.length)]

    state.gameState.hunt.pool = state.gameState.hunt.pool.filter(x => x.key !== tile.key);
    state.gameState.hunt.drawn.push(tile);

    saveGame(state, `${state.username} drawn ${tile.imageUrl} from pool.`);
}