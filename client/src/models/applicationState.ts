import { GameState } from "./gameState";

export class ApplicationState {
    _id: string;
    socket: any;
    ping: number;
    username: string;
    freePeoplePlayer: string;
    sauronForcesPlayer: string;
    gameState: GameState;
}