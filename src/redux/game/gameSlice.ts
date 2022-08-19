import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawCardAction } from "../../actions/drawCardAction";
import { SetUnitsAction } from "../../actions/setUnitsAction";
import { CardService } from "../../core/cardService";
import { InitialData } from "../../core/initialData";
import { Card } from "../../models/card";
import { CardType } from "../../models/cardType";
import { Dice } from "../../models/dice";
import { Region } from "../../models/region";
import { Side } from "../../models/side";
import { RootState } from "../store";


export interface GameState {
    gameStarted: boolean;
    regions: Region[];
    dices: {
        freePeople: {
            available: Dice[];
            used: Dice[];
        },
        sauronForces: {
            available: Dice[];
            used: Dice[];
        }
    },
    cards: {
        freePeople: {
            strategyDeck: Card[],
            characterDeck: Card[],
            hand: Card[],
            played: Card[]
        },
        sauronForces: {
            strategyDeck: Card[],
            characterDeck: Card[],
            hand: Card[],
            played: Card[]
        }
    }
}

const initialState: GameState = {
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
            played: []
        },
        sauronForces: {
            strategyDeck: CardService.buildSauronStrategyDeck(),
            characterDeck: CardService.buildSauronCharacterDeck(),
            hand: [],
            played: []
        }
    }
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        newGame: (state) => {
            state.gameStarted = true;

            state.cards = {
                freePeople: {
                    strategyDeck: CardService.buildFreePeopleStrategyDeck(),
                    characterDeck: CardService.buildFreePeopleCharacterDeck(),
                    hand: [],
                    played: []
                },
                sauronForces: {
                    strategyDeck: CardService.buildSauronStrategyDeck(),
                    characterDeck: CardService.buildSauronCharacterDeck(),
                    hand: [],
                    played: []
                }
            };
        },
        setFreePeopleDices: (state, action: PayloadAction<Dice[]>) => {
            state.dices.freePeople.available = action.payload;
            state.dices.freePeople.used = [];
        },
        setSauronForcesDices: (state, action: PayloadAction<Dice[]>) => {
            state.dices.sauronForces.available = action.payload;
            state.dices.sauronForces.used = [];
        },
        setRegionUnits: (state, action: PayloadAction<SetUnitsAction>) => {
            state.regions.find(x => x.key === action.payload.regionKey).units = action.payload.units;
        },
        useFreePeopleDice: (state, action: PayloadAction<Dice>) => {
            let dice = state.dices.freePeople.available.find(x => x.key === action.payload.key);
            state.dices.freePeople.available = state.dices.freePeople.available.filter(x => x.key !== dice.key);
            state.dices.freePeople.used.push(dice);
        },
        useSauronForcesDice: (state, action: PayloadAction<Dice>) => {
            let dice = state.dices.sauronForces.available.find(x => x.key === action.payload.key);
            state.dices.sauronForces.available = state.dices.sauronForces.available.filter(x => x.key !== dice.key);
            state.dices.sauronForces.used.push(dice);
        },
        drawCard: (state, action: PayloadAction<DrawCardAction>) => {
            let deck: Card[];

            if (action.payload.side === Side.FreePeople) {
                if (action.payload.cardType === CardType.Strategy)
                    deck = state.cards.freePeople.strategyDeck;
                else
                    deck = state.cards.freePeople.characterDeck;
            } else {
                if (action.payload.cardType === CardType.Strategy)
                    deck = state.cards.sauronForces.strategyDeck;
                else
                    deck = state.cards.sauronForces.characterDeck;
            }

            if (deck.length === 0) return; 

            const card = deck.shift();

            if (action.payload.side === Side.FreePeople) {
                state.cards.freePeople.hand.push(card);
            } else {
                state.cards.sauronForces.hand.push(card);
            }
        }
    }
});

export const { 
    setFreePeopleDices,
    setSauronForcesDices,
    newGame,
    setRegionUnits,
    useFreePeopleDice,
    useSauronForcesDice,
    drawCard
 } = gameSlice.actions;

export const selectRegions = (state: RootState) => state.game.regions;

export const selectFreePeopleDices = (state: RootState) => state.game.dices.freePeople.available;
export const selectFreePeopleUsedDices = (state: RootState) => state.game.dices.freePeople.used;
export const selectSauronForcesDices = (state: RootState) => state.game.dices.sauronForces.available;
export const selectSauronForcesUsedDices = (state: RootState) => state.game.dices.sauronForces.used;

export const selectGameStarted = (state: RootState) => state.game.gameStarted;

export const selectFreePeopleCards = (state: RootState) => state.game.cards.freePeople;
export const selectSauronForcesCards = (state: RootState) => state.game.cards.sauronForces;

export default gameSlice.reducer;