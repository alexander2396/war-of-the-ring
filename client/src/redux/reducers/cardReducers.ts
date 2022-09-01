import { PayloadAction } from "@reduxjs/toolkit";
import { DrawCardAction } from "../../actions/drawCardAction";
import { Card } from "../../models/card";
import { CardType } from "../../models/enums/cardType";
import { Side } from "../../models/enums/side";
import { saveGame } from "./genericReducers";

export const drawCardReducer = (state, action: PayloadAction<DrawCardAction>) => {
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
}

export const draftCardReducer = (state, action: PayloadAction<Card>) => {
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
}

export const activateCardReducer = (state, action: PayloadAction<Card>) => {
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