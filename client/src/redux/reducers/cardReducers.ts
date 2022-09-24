import { PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../models/card";
import { CardType } from "../../models/enums/cardType";
import { Side } from "../../models/enums/side";

class DrawCardAction {
    side: Side;
    cardType: CardType;
}

export const drawCardReducer = (state, action: PayloadAction<DrawCardAction>) => {
    state.socket.emit('draw-card', {
        _id: state._id,
        side: action.payload.side,
        cardType: action.payload.cardType
    });
}

export const draftCardReducer = (state, action: PayloadAction<{card: Card, isPlayed: boolean}>) => {
    state.socket.emit('draft-card', {
        _id: state._id,
        card: action.payload.card,
        isPlayed: action.payload.isPlayed
    });
}

export const activateCardReducer = (state, action: PayloadAction<Card>) => {
    state.socket.emit('activate-card', {
        _id: state._id,
        card: action.payload
    });
}