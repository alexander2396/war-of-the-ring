import { createSlice } from "@reduxjs/toolkit";
import { CardService } from "../../core/cardService";
import { InitialData } from "../../core/initialData";
import { ApplicationState } from "../../models/applicationState";
import { RootState } from "../store";
import { openSocketReducer, setUserReducer } from "../reducers/genericReducers";
import { newGameReducer, setGameReducer } from "../reducers/gameReducers";
import { setFreePeopleDicesReducer, setSauronForcesDicesReducer, useFreePeopleDiceReducer, useSauronForcesDiceReducer } from "../reducers/diceReducers";
import { setRegionUnitsReducer } from "../reducers/regionReducers";
import { activateCardReducer, draftCardReducer, drawCardReducer } from "../reducers/cardReducers";

const initialState: ApplicationState = {
    socket: null,
    username: '',
    gameState: {
        key: null,
        gameStarted: false,
        regions: new InitialData().Regions,
        dices: {
            freePeople: {
                available: [],
                used: []
            },
            sauronForces: {
                available: [],
                used: []
            }
        },
        cards: {
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
        }
    }
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        openSocket: openSocketReducer,
        setUser: setUserReducer,
        newGame: newGameReducer,
        setGame: setGameReducer,
        setFreePeopleDices: setFreePeopleDicesReducer,
        setSauronForcesDices: setSauronForcesDicesReducer,
        setRegionUnits: setRegionUnitsReducer,
        useFreePeopleDice: useFreePeopleDiceReducer,
        useSauronForcesDice: useSauronForcesDiceReducer,
        drawCard: drawCardReducer,
        draftCard: draftCardReducer,
        activateCard: activateCardReducer
    }
});

export const {
    openSocket,
    setUser,
    setFreePeopleDices,
    setSauronForcesDices,
    newGame,
    setGame,
    setRegionUnits,
    useFreePeopleDice,
    useSauronForcesDice,
    drawCard,
    draftCard,
    activateCard
 } = gameSlice.actions;

 export const getSocket = (state: RootState) => state.game.socket;

 export const selectGame = (state: RootState) => state.game.gameState;

export const selectRegions = (state: RootState) => state.game.gameState.regions;

export const selectFreePeopleDices = (state: RootState) => state.game.gameState.dices.freePeople.available;
export const selectFreePeopleUsedDices = (state: RootState) => state.game.gameState.dices.freePeople.used;
export const selectSauronForcesDices = (state: RootState) => state.game.gameState.dices.sauronForces.available;
export const selectSauronForcesUsedDices = (state: RootState) => state.game.gameState.dices.sauronForces.used;

export const selectGameStarted = (state: RootState) => state.game.gameState.gameStarted;

export const selectFreePeopleCards = (state: RootState) => state.game.gameState.cards.freePeople;
export const selectSauronForcesCards = (state: RootState) => state.game.gameState.cards.sauronForces;

export default gameSlice.reducer;