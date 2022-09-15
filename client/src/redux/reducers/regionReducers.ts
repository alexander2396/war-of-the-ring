import { current, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { Faction } from "../../models/enums/faction";
import { Side } from "../../models/enums/side";
import { UnitType } from "../../models/enums/unitType";
import { Unit } from "../../models/unit";
import { saveGame } from "./genericReducers";

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
    let unit = state.gameState.deadUnits.find(x => x.key === action.payload.key);

    state.gameState.unitsPool.push(unit);

    state.gameState.deadUnits = state.gameState.deadUnits.filter(x => x.key !== unit.key);
    
    saveGame(state, `${state.username} moved unit ${Faction[action.payload.faction]} from dead to pool.`);
}

export const downgradeUnitReducer = (state: ApplicationState, action: PayloadAction<DowngradeUnitAction>) => {
    let region = state.gameState.regions.find(x => x.key === action.payload.regionKey);

    let unit = region.units.find(x => x.key === action.payload.unit.key);

    if (unit.type !== UnitType.Elite) return;

    if (unit.side === Side.SauronForces) {
        let regular = current(state.gameState.unitsPool).find(x => x.faction === unit.faction && x.type === UnitType.Regular);
        if (!regular) return;

        region.units = region.units.filter(x => x.key !== unit.key);
        region.units.push(regular);

        state.gameState.unitsPool = state.gameState.unitsPool.filter(x => x.key !== regular.key);
        state.gameState.unitsPool.push(unit);
    }

    if (unit.side === Side.FreePeople) {
        let regular = current(state.gameState.deadUnits).find(x => x.faction === unit.faction && x.type === UnitType.Regular);

        if (regular) {
            state.gameState.deadUnits = state.gameState.deadUnits.filter(x => x.key !== regular.key);
        } else {
            regular = current(state.gameState.unitsPool).find(x => x.faction === unit.faction && x.type === UnitType.Regular);

            if (!regular) return;

            state.gameState.unitsPool = state.gameState.unitsPool.filter(x => x.key !== regular.key);
        }


        region.units = region.units.filter(x => x.key !== unit.key);
        region.units.push(regular);

        state.gameState.deadUnits.push(unit);
    }

    saveGame(state, `${state.username} downgraded unit in ${action.payload.regionKey}.`);
}