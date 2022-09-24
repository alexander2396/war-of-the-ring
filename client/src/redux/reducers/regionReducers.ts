import { PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { Unit } from "../../models/unit";

export class MoveUnitsAction {
    regionFromKey: string;
    regionToKey: string;
    units: Unit[];
}

export class RemoveUnitsAction {
    regionKey: string;
    units: Unit[];
}

export class AddUnitAction {
    regionKey: string;
    unit: Unit;
}

export class DowngradeUnitAction {
    regionKey: string;
    unit: Unit;
}

export const moveUnitsReducer = (state: ApplicationState, action: PayloadAction<MoveUnitsAction>) => {
    state.socket.emit('move-units', {
        _id: state._id,
        regionFromKey: action.payload.regionFromKey,
        regionToKey: action.payload.regionToKey,
        units: action.payload.units
    });
}

export const removeUnitsReducer = (state: ApplicationState, action: PayloadAction<RemoveUnitsAction>) => {
    state.socket.emit('remove-units', {
        _id: state._id,
        regionKey: action.payload.regionKey,
        units: action.payload.units
    });
}

export const addUnitReducer = (state: ApplicationState, action: PayloadAction<AddUnitAction>) => {
    state.socket.emit('add-unit', {
        _id: state._id,
        regionKey: action.payload.regionKey,
        unit: action.payload.unit
    });
}

export const moveDeadUnitToPoolReducer = (state: ApplicationState, action: PayloadAction<Unit>) => {
    state.socket.emit('move-dead-unit-to-pool', {
        _id: state._id,
        unitKey: action.payload.key
    });
}

export const downgradeUnitReducer = (state: ApplicationState, action: PayloadAction<DowngradeUnitAction>) => {
    state.socket.emit('downgrade-unit', {
        _id: state._id,
        regionKey: action.payload.regionKey,
        unitKey: action.payload.unit.key
    });
}

export const setRegionCapturedReducer = (state: ApplicationState, action: PayloadAction<{regionKey: string, captured: boolean}>) => {
    state.socket.emit('capture-region', {
        _id: state._id,
        regionKey: action.payload.regionKey,
        captured: action.payload.captured
    });
}