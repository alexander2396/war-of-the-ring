import { PayloadAction } from "@reduxjs/toolkit";
import { CardService } from "../../core/cardService";
import { DiceService } from "../../core/diceService";
import { Game } from "../../models/game";
import { GameState } from "../../models/gameState";
import { Unit } from "../../models/unit";
import { saveGame } from "./genericReducers";

export const setGameReducer = (state, action: PayloadAction<Game>) => {
    action.payload.gameState.regions.forEach(x => {
        var units = x.units.map(u => new Unit(u.side, u.faction, u.type, u.hero));
        x.units = units;
    });

    state.gameState = action.payload.gameState;
};

export const startNewGameReducer = (state) => {
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

    state.gameState.cards.freePeople.hand = [
        state.gameState.cards.freePeople.strategyDeck.shift(),
        state.gameState.cards.freePeople.characterDeck.shift(),
    ];

    state.gameState.cards.sauronForces.hand = [
        state.gameState.cards.sauronForces.strategyDeck.shift(),
        state.gameState.cards.sauronForces.characterDeck.shift(),
    ];

    state.gameState.dices = {
        freePeople: {
            available: DiceService.rollFreePeopleDices(4),
            used: []
        },
        sauronForces: {
            available: DiceService.rollSauronForcesDices(6),
            used: []
        }
    };

    new Audio('sounds/dice.wav').play();
    
    saveGame(state, `Game started.`);
};