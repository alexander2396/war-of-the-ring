import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { HuntTile } from "../../models/huntTile";

export const addHuntTileToPoolReducer = (state: ApplicationState, action: PayloadAction<HuntTile>) => {
    state.socket.emit('add-hunt-tile-to-pool', {
        _id: state._id,
        huntTile: action.payload
    });
}

export const removeHuntTileFromPoolReducer = (state: ApplicationState, action: PayloadAction<HuntTile>) => {
    state.socket.emit('remove-hunt-tile-from-pool', {
        _id: state._id,
        huntTile: action.payload
    });
}

export const getRandomHuntTileFromPoolReducer = (state: ApplicationState, action: PayloadAction<void>) => {
    state.socket.emit('get-random-hunt-tile-from-pool', {
        _id: state._id
    });
}