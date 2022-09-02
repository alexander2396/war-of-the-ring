import { GameState } from "./gameState";

export class ApplicationState {
    socket: any;
    username: string;
    freePeoplePlayer: string;
    sauronForcesPlayer: string;
    gameState: GameState;
}