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
    let regionFrom = state.gameState.regions.find(x => x.key === action.payload.regionFromKey);
    let regionTo = state.gameState.regions.find(x => x.key === action.payload.regionToKey);

    regionFrom.units = regionFrom.units.filter(x => !action.payload.units.map(u => u.key).includes(x.key));
    action.payload.units.forEach(x => regionTo.units.push(x));
    
    saveGame(state, `${state.username} moved army from ${action.payload.regionFromKey} to ${action.payload.regionToKey}.`);
}

export const removeUnitsReducer = (state: ApplicationState, action: PayloadAction<RemoveUnitsAction>) => {
    let region = state.gameState.regions.find(x => x.key === action.payload.regionKey);

    region.units = region.units.filter(x => !action.payload.units.map(u => u.key).includes(x.key));

    action.payload.units.forEach(x => state.gameState.deadUnits.push(x));

    saveGame(state, `${state.username} removed units in ${action.payload.regionKey}.`);
}

export const addUnitReducer = (state: ApplicationState, action: PayloadAction<AddUnitAction>) => {
    let region = state.gameState.regions.find(x => x.key === action.payload.regionKey);

    region.units.push(action.payload.unit);

    saveGame(state, `${state.username} added unit ${Faction[action.payload.unit.faction]} ${UnitType[action.payload.unit.type]} in ${action.payload.regionKey}.`);
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
        let regular = state.gameState.unitsPool.find(x => x.faction === unit.faction && x.type === UnitType.Regular);
        if (!regular) return;

        region.units = region.units.filter(x => x.key !== unit.key);
        region.units.push(regular);

        state.gameState.unitsPool = state.gameState.unitsPool.filter(x => x.key !== regular.key);
        state.gameState.unitsPool.push(unit);
    }

    if (unit.side === Side.FreePeople) {
        let regular = current(state.gameState.deadUnits).find(x => x.faction === unit.faction && x.type === UnitType.Regular);

        if (!regular) return;

        region.units = region.units.filter(x => x.key !== unit.key);
        region.units.push(regular);

        state.gameState.deadUnits = state.gameState.deadUnits.filter(x => x.key !== regular.key);
        state.gameState.deadUnits.push(unit);
    }

    saveGame(state, `${state.username} downgraded unit in ${action.payload.regionKey}.`);
}