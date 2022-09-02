import { PayloadAction } from "@reduxjs/toolkit";
import { DiceService } from "../../core/diceService";
import { ApplicationState } from "../../models/applicationState";
import { Dice } from "../../models/dice";
import { DiceType } from "../../models/enums/diceType";
import { Side } from "../../models/enums/side";
import { saveGame } from "./genericReducers";

export const useFreePeopleDiceReducer = (state: ApplicationState, action: PayloadAction<{dice: Dice, type: DiceType}>) => {
    let dice = state.gameState.dices.freePeople.available.find(x => x.key === action.payload.dice.key);

    state.gameState.dices.freePeople.available = state.gameState.dices.freePeople.available.filter(x => x.key !== dice.key);

    let usedDice = dice;
    if (action.payload.type !== null) {
        usedDice = new Dice(dice.side, action.payload.type);
    }

    state.gameState.dices.freePeople.used.push(usedDice);

    saveGame(state, dice.type === DiceType.WillOfTheWest
        ? `${state.username} used ${DiceType[dice.type]} dice as ${DiceType[usedDice.type]}.`
        : `${state.username} used ${DiceType[dice.type]} dice.`);
}

export const useSauronForcesDiceReducer = (state, action: PayloadAction<Dice>) => {
    let dice = state.gameState.dices.sauronForces.available.find(x => x.key === action.payload.key);
    state.gameState.dices.sauronForces.available = state.gameState.dices.sauronForces.available.filter(x => x.key !== dice.key);
    state.gameState.dices.sauronForces.used.push(dice);

    saveGame(state, `${state.username} used ${DiceType[dice.type]} dice.`);
}

export const rollDicesReducer = (state: ApplicationState, action: PayloadAction<{side: Side, count: number}>) => {
    if (action.payload.side === Side.FreePeople) {
        if (state.gameState.dices.freePeople.available.length > 0) return;

        state.gameState.dices.freePeople.used = []
        state.gameState.dices.freePeople.available = DiceService.rollFreePeopleDices(action.payload.count);
    } else {
        if (state.gameState.dices.sauronForces.available.length > 0) return;

        state.gameState.dices.sauronForces.available = DiceService.rollSauronForcesDices(action.payload.count);
        state.gameState.dices.sauronForces.used = state.gameState.dices.sauronForces.available
            .filter(x => x.type === DiceType.Eye);

        state.gameState.dices.sauronForces.available = state.gameState.dices.sauronForces.available
            .filter(x => x.type !== DiceType.Eye);

        state.gameState.dices.sauronForces.hunt = state.gameState.dices.sauronForces.available
            .filter(x => x.type === DiceType.Eye)
            .concat(state.gameState.dices.sauronForces.hunt);
    }
    
    new Audio('sounds/dice.wav').play();

    saveGame(state, `${state.username} rolled dices.`);
}

export const setFreePeopleHuntDicesReducer = (state: ApplicationState, action: PayloadAction<Dice[]>) => {
    state.gameState.dices.freePeople.hunt = action.payload;

    saveGame(state, `${state.username} updated FP hunt.`);
}

export const setSauronForcesHuntDicesReducer = (state: ApplicationState, action: PayloadAction<Dice[]>) => {
    state.gameState.dices.sauronForces.hunt = action.payload;

    saveGame(state, `${state.username} updated SF hunt.`);
}