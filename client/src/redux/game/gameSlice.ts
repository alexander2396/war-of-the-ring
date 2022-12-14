import { createSlice } from "@reduxjs/toolkit";
import { ApplicationState } from "../../models/applicationState";
import { RootState } from "../store";
import { openSocketReducer, setFreePeopleVictoryPointsReducer, setPingReducer, setSauronForcesVictoryPointsReducer, setUserReducer } from "../reducers/genericReducers";
import { setGameReducer, startNewGameReducer } from "../reducers/gameReducers";
import { rollDicesReducer, setFreePeopleHuntDicesReducer, setSauronForcesHuntDicesReducer, useFreePeopleDiceReducer, useSauronForcesDiceReducer } from "../reducers/diceReducers";
import { activateCardReducer, draftCardReducer, drawCardReducer } from "../reducers/cardReducers";
import { IUserData } from "../../models/userData";
import { activatePoliticsReducer, movePoliticsReducer } from "../reducers/politicsReducers";
import { useFreePeopleRingReducer, useSauronForcesRingReducer } from "../reducers/ringReducers";
import { hideFellowshipReducer, killRandomCompanionReducer, moveFellowshipToRegionReduces, revealFellowshipReducer, setCorruptionReducer, setFellowshipTrackPositionReducer, setMordorTrackReducer } from "../reducers/fellowshipReducers";
import { addHuntTileToPoolReducer, removeHuntTileFromPoolReducer, getRandomHuntTileFromPoolReducer } from "../reducers/huntReducers";
import { addUnitReducer, downgradeUnitReducer, moveDeadUnitToPoolReducer, moveUnitsReducer, removeUnitsReducer, setRegionCapturedReducer } from "../reducers/regionReducers";

const initialState: ApplicationState = {
    _id: null,
    socket: null,
    ping: 0,
    username: '',
    freePeoplePlayer: '',
    sauronForcesPlayer: '',
    gameState: {
        turn: 0,
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
        },
        fellowship: {
            isRevealed: false,
            trackPosition: 0,
            corruption: 0,
            mordorPosition: 0
        },
        hunt: {
            drawn: [],
            pool: []
        },
        unitsPool: [],
        deadUnits: [],
        turnStatistics: {
            freePeople: [],
            sauronForces: []
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

        moveUnits: moveUnitsReducer,
        removeUnits: removeUnitsReducer,
        addUnit: addUnitReducer,
        downgradeUnit: downgradeUnitReducer,
        moveDeadUnitToPool: moveDeadUnitToPoolReducer,
        setRegionCaptured: setRegionCapturedReducer,

        drawCard: drawCardReducer,
        draftCard: draftCardReducer,
        activateCard: activateCardReducer,

        movePolitics: movePoliticsReducer,
        activatePolitics: activatePoliticsReducer,

        useFreePeopleRing: useFreePeopleRingReducer,
        useSauronForcesRing: useSauronForcesRingReducer,

        setFreePeopleVictoryPoints: setFreePeopleVictoryPointsReducer,
        setSauronForcesVictoryPoints: setSauronForcesVictoryPointsReducer,

        moveFellowshipToRegion: moveFellowshipToRegionReduces,
        setFellowshipTrackPosition: setFellowshipTrackPositionReducer,
        setCorruption: setCorruptionReducer,
        revealFellowship: revealFellowshipReducer,
        hideFellowship: hideFellowshipReducer,
        setMordorTrack: setMordorTrackReducer,
        killRandomCompanion: killRandomCompanionReducer,

        addHuntTileToPool: addHuntTileToPoolReducer,
        removeHuntTileFromPool: removeHuntTileFromPoolReducer,
        getRandomHuntTileFromPool: getRandomHuntTileFromPoolReducer,

        setPing: setPingReducer
    }
});

export const {
    openSocket,
    setUser,
    setGame,
    startNewGame,
    setPing,

    moveUnits,
    removeUnits,
    addUnit,
    downgradeUnit,
    moveDeadUnitToPool,
    setRegionCaptured,

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
    setSauronForcesVictoryPoints,

    moveFellowshipToRegion,
    setFellowshipTrackPosition,
    setCorruption,
    revealFellowship,
    hideFellowship,
    setMordorTrack,
    killRandomCompanion,

    addHuntTileToPool,
    removeHuntTileFromPool,
    getRandomHuntTileFromPool
 } = gameSlice.actions;

export const selectGameId = (state: RootState) => state.game._id;

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

export const selectFellowship = (state: RootState) => state.game.gameState.fellowship;

export const selectHunt = (state: RootState) => state.game.gameState.hunt;

export const selectUnitsPool = (state: RootState) => state.game.gameState.unitsPool;
export const selectDeadUnits = (state: RootState) => state.game.gameState.deadUnits;

export const selectUserData = (state: RootState) => {
    return {
        username: state.game.username,
        freePeoplePlayer: state.game.freePeoplePlayer,
        sauronForcesPlayer: state.game.sauronForcesPlayer
    } as IUserData;
}

export const selectTurn = (state: RootState) => state.game.gameState.turn;

export const selectPing = (state: RootState) => state.game.ping;

export const selectStatistics = (state: RootState) => state.game.gameState.turnStatistics;

export default gameSlice.reducer;