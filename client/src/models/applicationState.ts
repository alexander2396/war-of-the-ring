import { Socket } from "socket.io-client";
import { GameState } from "./gameState";

export class ApplicationState {
    socket: any;
    gameState: GameState;
}