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
    state.socket.emit('set-fp-victory-points', {
        _id: state._id,
        value: action.payload
    });
}

export const setSauronForcesVictoryPointsReducer = (state: ApplicationState, action: PayloadAction<number>) => {
    state.socket.emit('set-sf-victory-points', {
        _id: state._id,
        value: action.payload
    });
}