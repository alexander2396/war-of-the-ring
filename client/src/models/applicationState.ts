import { GameState } from "./gameState";

export class ApplicationState {
    key: string;
    socket: any;
    username: string;
    freePeoplePlayer: string;
    sauronForcesPlayer: string;
    gameState: GameState;
}