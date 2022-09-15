import { PayloadAction } from "@reduxjs/toolkit";
import { io } from "socket.io-client";
import { ApplicationState } from "../../models/applicationState";
import { Unit } from "../../models/unit";

export const openSocketReducer = (state) => {
    state.socket = process.env.NODE_ENV == 'development' 
        ? io("http://localhost:3001", { autoConnect: false }) 
        : io({ autoConnect: false });
};

export const setUserReducer = (state, action: PayloadAction<string>) => {
    state.username = action.payload;
}

export function saveGame(state, message) {
    state.socket.emit('update-game', {
        _id: state._id,
        gameState: state.gameState,
        message: message
    });
}

export const setFreePeopleVictoryPointsReducer = (state: ApplicationState, action: PayloadAction<number>) => {
    state.gameState.victoryPoints.freePeople = action.payload;

    saveGame(state, `${state.username} set FP victory points to ${action.payload}.`);
}

export const setSauronForcesVictoryPointsReducer = (state: ApplicationState, action: PayloadAction<number>) => {
    state.gameState.victoryPoints.sauronForces = action.payload;

    saveGame(state, `${state.username} set SF victory points to ${action.payload}.`);
}

export const updateUnitsPoolReducer = (state: ApplicationState, action: PayloadAction<Unit[]>) => {
    state.gameState.unitsPool = action.payload;

    saveGame(state, `${state.username} updated units pool.`);
}