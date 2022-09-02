import { PayloadAction } from "@reduxjs/toolkit";
import { CardService } from "../../core/cardService";
import { DiceService } from "../../core/diceService";
import { InitialData } from "../../core/initialData";
import { ApplicationState } from "../../models/applicationState";
import { DiceType } from "../../models/enums/diceType";
import { Game } from "../../models/game";
import { Unit } from "../../models/unit";
import { saveGame } from "./genericReducers";

export const setGameReducer = (state: ApplicationState, action: PayloadAction<Game>) => {
    action.payload.gameState.regions.forEach(x => {
        var units = x.units.map(u => new Unit(u.side, u.faction, u.type, u.hero));
        x.units = units;
    });

    state.gameState = action.payload.gameState;

    state.freePeoplePlayer = action.payload.freePeoplePlayer;
    state.sauronForcesPlayer = action.payload.sauronForcesPlayer;
};

export const startNewGameReducer = (state: ApplicationState) => {

    const initialData = new InitialData();

    state.gameState.gameStarted = true;

    state.gameState.regions = initialData.Regions;

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

    const freePeopleDices = DiceService.rollFreePeopleDices(4);
    const sauronForcesDices = DiceService.rollSauronForcesDices(7);

    state.gameState.dices = {
        freePeople: {
            available: freePeopleDices,
            used: [],
            hunt: []
        },
        sauronForces: {
            available: sauronForcesDices,
            used: [],
            hunt: sauronForcesDices.filter(x => x.type === DiceType.Eye).concat(state.gameState.dices.sauronForces.hunt)
        }
    };

    state.gameState.politics = initialData.Politics;

    new Audio('sounds/dice.wav').play();
    
    saveGame(state, `Game started.`);
};