import { createSlice } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { RootState } from "../store";
import { openSocketReducer, setFreePeopleVictoryPointsReducer, setSauronForcesVictoryPointsReducer, setUserReducer } from "../reducers/genericReducers";
import { setGameReducer, startNewGameReducer } from "../reducers/gameReducers";
import { rollDicesReducer, setFreePeopleHuntDicesReducer, setSauronForcesHuntDicesReducer, useFreePeopleDiceReducer, useSauronForcesDiceReducer } from "../reducers/diceReducers";
import { setRegionUnitsReducer } from "../reducers/regionReducers";
import { activateCardReducer, draftCardReducer, drawCardReducer } from "../reducers/cardReducers";
import { IUserData } from "../../models/userData";
import { activatePoliticsReducer, movePoliticsReducer } from "../reducers/politicsReducers";
import { useFreePeopleRingReducer, useSauronForcesRingReducer } from "../reducers/ringReducers";

const initialState: ApplicationState = {
    socket: null,
    username: '',
    freePeoplePlayer: '',
    sauronForcesPlayer: '',
    gameState: {
        key: null,
        gameStarted: false,
        regions: [],
        dices: {
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
        },
        cards: {
            freePeople: {
                strategyDeck: [],
                characterDeck: [],
                hand: [],
                draft: [],
                active: []
            },
            sauronForces: {
                strategyDeck: [],
                characterDeck: [],
                hand: [],
                draft: [],
                active: []
            }
        },
        politics: [],
        rings: {
            freePeople: [],
            sauronForces: []
        },
        victoryPoints: {
            freePeople: 0,
            sauronForces: 0
        }
    }
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        openSocket: openSocketReducer,
        setUser: setUserReducer,
        setGame: setGameReducer,
        startNewGame: startNewGameReducer,

        useFreePeopleDice: useFreePeopleDiceReducer,
        useSauronForcesDice: useSauronForcesDiceReducer,
        rollDices: rollDicesReducer,
        setFreePeopleHuntDices: setFreePeopleHuntDicesReducer,
        setSauronForcesHuntDices: setSauronForcesHuntDicesReducer,

        setRegionUnits: setRegionUnitsReducer,
        drawCard: drawCardReducer,
        draftCard: draftCardReducer,
        activateCard: activateCardReducer,

        movePolitics: movePoliticsReducer,
        activatePolitics: activatePoliticsReducer,

        useFreePeopleRing: useFreePeopleRingReducer,
        useSauronForcesRing: useSauronForcesRingReducer,

        setFreePeopleVictoryPoints: setFreePeopleVictoryPointsReducer,
        setSauronForcesVictoryPoints: setSauronForcesVictoryPointsReducer
    }
});

export const {
    openSocket,
    setUser,
    setGame,
    startNewGame,
    setRegionUnits,

    useFreePeopleDice,
    useSauronForcesDice,
    rollDices,
    setFreePeopleHuntDices,
    setSauronForcesHuntDices,

    drawCard,
    draftCard,
    activateCard,

    movePolitics,
    activatePolitics,

    useFreePeopleRing,
    useSauronForcesRing,

    setFreePeopleVictoryPoints,
    setSauronForcesVictoryPoints

 } = gameSlice.actions;

export const getSocket = (state: RootState) => state.game.socket;

export const selectGame = (state: RootState) => state.game.gameState;

export const selectRegions = (state: RootState) => state.game.gameState.regions;

export const selectFreePeopleDices = (state: RootState) => state.game.gameState.dices.freePeople;
export const selectSauronForcesDices = (state: RootState) => state.game.gameState.dices.sauronForces;

export const selectGameStarted = (state: RootState) => state.game.gameState.gameStarted;

export const selectFreePeopleCards = (state: RootState) => state.game.gameState.cards.freePeople;
export const selectSauronForcesCards = (state: RootState) => state.game.gameState.cards.sauronForces;

export const selectPolitics = (state: RootState) => state.game.gameState.politics;

export const selectRings = (state: RootState) => state.game.gameState.rings;

export const selectVictoryPoints = (state: RootState) => state.game.gameState.victoryPoints;


export const selectUserData = (state: RootState) => {
    return {
        username: state.game.username,
        freePeoplePlayer: state.game.freePeoplePlayer,
        sauronForcesPlayer: state.game.sauronForcesPlayer
    } as IUserData;
}

export default gameSlice.reducer;