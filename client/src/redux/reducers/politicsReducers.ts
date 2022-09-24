import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { Politics } from "../../models/politics";

export const movePoliticsReducer = (state: ApplicationState, action: PayloadAction<Politics>) => {
    state.socket.emit('move-politics', {
        _id: state._id,
        politics: action.payload
    });
}

export const activatePoliticsReducer = (state: ApplicationState, action: PayloadAction<Politics>) => {
    state.socket.emit('activate-politics', {
        _id: state._id,
        politics: action.payload
    });
}