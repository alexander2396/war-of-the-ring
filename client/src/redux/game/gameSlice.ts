import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawCardAction } from "../../actions/drawCardAction";
import { SetUnitsAction } from "../../actions/setUnitsAction";
import { CardService } from "../../core/cardService";
import { InitialData } from "../../core/initialData";
import { ApplicationState } from "../../models/applicationState";
import { Card } from "../../models/card";
import { CardType } from "../../models/cardType";
import { Dice } from "../../models/dice";
import { Game } from "../../models/game";
import { GameState } from "../../models/gameState";
import { Side } from "../../models/side";
import { RootState } from "../store";
import { io } from 'socket.io-client';
import { Unit } from "../../models/unit";

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

function saveGame(state, message) {
    state.socket.emit('update-game', {
        key: state.gameState.key,
        gameState: state.gameState,
        message: message
    });
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        openSocket: (state) => {
            state.socket = process.env.NODE_ENV == 'development' 
                ? io("http://localhost:3001", { autoConnect: false }) 
                : io({ autoConnect: false });
        },
        setUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        newGame: (state) => {
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
        },
        setGame: (state, action: PayloadAction<Game>) => {

            action.payload.gameState.regions.forEach(x => {
                var units = x.units.map(u => new Unit(u.side, u.faction, u.type, u.hero));
                x.units = units;
            });

            state.gameState = action.payload.gameState;
        },
        setFreePeopleDices: (state, action: PayloadAction<Dice[]>) => {
            state.gameState.dices.freePeople.available = action.payload;
            state.gameState.dices.freePeople.used = [];
        },
        setSauronForcesDices: (state, action: PayloadAction<Dice[]>) => {
            state.gameState.dices.sauronForces.available = action.payload;
            state.gameState.dices.sauronForces.used = [];
        },
        setRegionUnits: (state, action: PayloadAction<SetUnitsAction>) => {
            state.gameState.regions.find(x => x.key === action.payload.regionKey).units = action.payload.units;

            saveGame(state, `${state.username} moved units.`);
        },
        useFreePeopleDice: (state, action: PayloadAction<Dice>) => {
            let dice = state.gameState.dices.freePeople.available.find(x => x.key === action.payload.key);
            state.gameState.dices.freePeople.available = state.gameState.dices.freePeople.available.filter(x => x.key !== dice.key);
            state.gameState.dices.freePeople.used.push(dice);

            saveGame(state, `${state.username} used dice.`);
        },
        useSauronForcesDice: (state, action: PayloadAction<Dice>) => {
            let dice = state.gameState.dices.sauronForces.available.find(x => x.key === action.payload.key);
            state.gameState.dices.sauronForces.available = state.gameState.dices.sauronForces.available.filter(x => x.key !== dice.key);
            state.gameState.dices.sauronForces.used.push(dice);

            saveGame(state, `${state.username} used dice.`);
        },
        drawCard: (state, action: PayloadAction<DrawCardAction>) => {
            let deck: Card[];

            if (action.payload.side === Side.FreePeople) {
                if (action.payload.cardType === CardType.Strategy)
                    deck = state.gameState.cards.freePeople.strategyDeck;
                else
                    deck = state.gameState.cards.freePeople.characterDeck;
            } else {
                if (action.payload.cardType === CardType.Strategy)
                    deck = state.gameState.cards.sauronForces.strategyDeck;
                else
                    deck = state.gameState.cards.sauronForces.characterDeck;
            }

            if (deck.length === 0) return; 

            const card = deck.shift();

            if (action.payload.side === Side.FreePeople) {
                state.gameState.cards.freePeople.hand.push(card);
            } else {
                state.gameState.cards.sauronForces.hand.push(card);
            }

            saveGame(state, `${state.username} drawn card.`);
        },
        draftCard: (state, action: PayloadAction<Card>) => {
            let hand: Card[];
            let draftCards: Card[];

            if (action.payload.side === Side.FreePeople) {
                hand = state.gameState.cards.freePeople.hand;
                draftCards = state.gameState.cards.freePeople.draft;
            } else {
                hand = state.gameState.cards.sauronForces.hand;
                draftCards = state.gameState.cards.sauronForces.draft;
            }

            let card = hand.find(x => x.key === action.payload.key);

            if (card) {
                hand.splice(hand.indexOf(card), 1);           
            } else {
                let activeCards = action.payload.side === Side.FreePeople
                    ? state.gameState.cards.freePeople.active
                    : state.gameState.cards.sauronForces.active;

                card = activeCards.find(x => x.key === action.payload.key);

                activeCards.splice(activeCards.indexOf(card), 1); 
            }

            draftCards.push(card);

            saveGame(state, `${state.username} discarded card.`);
        },
        activateCard: (state, action: PayloadAction<Card>) => {
            let hand: Card[];
            let activeCards: Card[];

            if (action.payload.side === Side.FreePeople) {
                hand = state.gameState.cards.freePeople.hand;
                activeCards = state.gameState.cards.freePeople.active;
            } else {
                hand = state.gameState.cards.sauronForces.hand;
                activeCards = state.gameState.cards.sauronForces.active;
            }

            const card = hand.find(x => x.key === action.payload.key);

            hand.splice(hand.indexOf(card), 1);
            activeCards.push(card);

            saveGame(state, `${state.username} activated card.`);
        }
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