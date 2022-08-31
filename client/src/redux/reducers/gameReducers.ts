import { PayloadAction } from "@reduxjs/toolkit";
import { CardService } from "../../core/cardService";
import { Game } from "../../models/game";
import { Unit } from "../../models/unit";

export const newGameReducer = (state) => {
    state.gameState.gameStarted = true;

    state.gameState.cards = {
        freePeople: {
            strategyDeck: CardService.buildFreePeopleStrategyDeck(),
            characterDeck: CardService.buildFreePeopleCharacterDeck(),
            hand: [],
            draft: [],
            active: []
        },
        sauronForces: {
            strategyDeck: CardService.buildSauronStrategyDeck(),
            characterDeck: CardService.buildSauronCharacterDeck(),
            hand: [],
            draft: [],
            active: []
        }
    };
}

export const setGameReducer = (state, action: PayloadAction<Game>) => {
    action.payload.gameState.regions.forEach(x => {
        var units = x.units.map(u => new Unit(u.side, u.faction, u.type, u.hero));
        x.units = units;
    });

    state.gameState = action.payload.gameState;
}