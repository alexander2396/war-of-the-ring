import { PayloadAction } from "@reduxjs/toolkit";
import { CardService } from "../../core/cardService";
import { InitialData } from "../../core/initialData";
import { ApplicationState } from "../../models/applicationState";
import { Game } from "../../models/game";
import { Unit } from "../../models/unit";
import { saveGame } from "./genericReducers";

export const setGameReducer = (state: ApplicationState, action: PayloadAction<Game>) => {
    action.payload.gameState.regions.forEach(x => {
        var units = x.units.map(u => new Unit(u.side, u.faction, u.type, u.hero, u.key));
        x.units = units;
    });

    state._id = action.payload._id;
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

    state.gameState.dices = {
        freePeople: {
            available: [],
            used: [],
            hunt: []
        },
        sauronForces: {
            available: [],
            used: [],
            hunt: []
        }
    };

    state.gameState.politics = initialData.Politics;

    state.gameState.rings.freePeople.push({ number: 1 });
    state.gameState.rings.freePeople.push({ number: 2 });
    state.gameState.rings.freePeople.push({ number: 3 });

    state.gameState.hunt.drawn = initialData.Hunt.Drawn;
    state.gameState.hunt.pool = initialData.Hunt.Pool;

    state.gameState.unitsPool = initialData.UnitsPool;
    
    saveGame(state, `Game started.`);
};