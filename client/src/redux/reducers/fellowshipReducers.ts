import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { Hero } from "../../models/hero";
import { saveGame } from "./genericReducers";

export const moveFellowshipToRegionReduces = (state: ApplicationState, action: PayloadAction<string>) => {
    state.socket.emit('move-fellowship-to-region', {
        _id: state._id,
        destinationKey: action.payload
    });
}

export const setFellowshipTrackPositionReducer = (state: ApplicationState, action: PayloadAction<number>) => {
    state.socket.emit('set-fellowship-track-position', {
        _id: state._id,
        position: action.payload
    });
}

export const setCorruptionReducer = (state: ApplicationState, action: PayloadAction<number>) => {
    state.socket.emit('set-corruption', {
        _id: state._id,
        corruption: action.payload
    });
}

export const revealFellowshipReducer = (state: ApplicationState, action: PayloadAction<void>) => {
    state.socket.emit('reveal-fellowship', {
        _id: state._id
    });
}

export const hideFellowshipReducer = (state: ApplicationState, action: PayloadAction<void>) => {
    state.socket.emit('hide-fellowship', {
        _id: state._id
    });
}

export const setMordorTrackReducer = (state: ApplicationState, action: PayloadAction<number>) => {
    state.socket.emit('set-mordor-track', {
        _id: state._id,
        mordorPosition: action.payload
    });
}

export const killRandomCompanionReducer = (state: ApplicationState, action: PayloadAction<void>) => {
    state.socket.emit('kill-random-companion', {
        _id: state._id
    });
}