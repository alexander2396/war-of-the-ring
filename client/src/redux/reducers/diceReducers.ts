import { PayloadAction } from "@reduxjs/toolkit";
import { DiceService } from "../../core/diceService";
import { ApplicationState } from "../../models/applicationState";
import { Dice } from "../../models/dice";
import { DiceType } from "../../models/enums/diceType";
import { Side } from "../../models/enums/side";

export const useFreePeopleDiceReducer = (state: ApplicationState, action: PayloadAction<{dice: Dice, type: DiceType}>) => {
    state.socket.emit('use-fp-dice', {
        _id: state._id,
        diceKey: action.payload.dice.key,
        diceAs: action.payload.type ? new Dice(action.payload.dice.side, action.payload.type) : null
    });
}

export const useSauronForcesDiceReducer = (state, action: PayloadAction<Dice>) => {
    state.socket.emit('use-sf-dice', {
        _id: state._id,
        diceKey: action.payload.key
    });
}

export const rollDicesReducer = (state: ApplicationState, action: PayloadAction<{side: Side, count: number}>) => {
    if (action.payload.side === Side.FreePeople) {
        if (state.gameState.dices.freePeople.available.length > 0) return;

        state.socket.emit('roll-fp-dices', {
            _id: state._id,
            dices: DiceService.rollFreePeopleDices(action.payload.count)
        });
    } else {
        if (state.gameState.dices.sauronForces.available.length > 0) return;

        let available = DiceService.rollSauronForcesDices(action.payload.count);
        let used = available.filter(x => x.type === DiceType.Eye);
        available = available.filter(x => x.type !== DiceType.Eye);

        state.socket.emit('roll-sf-dices', {
            _id: state._id,
            available: available,
            used: used
        });  
    }
    
    new Audio('sounds/dice.wav').play();
}

export const setFreePeopleHuntDicesReducer = (state: ApplicationState, action: PayloadAction<Dice[]>) => {
    state.socket.emit('set-fp-hunt-dices', {
        _id: state._id,
        dices: action.payload
    });
}

export const setSauronForcesHuntDicesReducer = (state: ApplicationState, action: PayloadAction<Dice[]>) => {
    state.socket.emit('set-sf-hunt-dices', {
        _id: state._id,
        dices: action.payload
    });
}