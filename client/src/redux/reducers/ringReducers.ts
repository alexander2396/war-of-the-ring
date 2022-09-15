import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { Ring } from "../../models/ring";

export const useFreePeopleRingReducer = (state: ApplicationState, action: PayloadAction<Ring>) => {
    state.socket.emit('use-free-people-ring', {
        key: state.key,
        ring: action.payload
    });
}

export const useSauronForcesRingReducer = (state: ApplicationState, action: PayloadAction<Ring>) => {
    state.socket.emit('use-sauron-forces-ring', {
        key: state.key,
        ring: action.payload
    });
}