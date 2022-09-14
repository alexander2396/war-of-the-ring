import { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { Game } from "../../models/game";
import { Side } from "../../models/enums/side";
import { getSocket, selectGame, setGame, setUser, startNewGame } from "../../redux/game/gameSlice";
import { startNewGameReducer } from "../../redux/reducers/gameReducers";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './Lobby.module.css';

export function Lobby() {
    const [ShowLobby, setShowLobby]=useState(false);
    const [UserName, setUserName]=useState(null);
    const [UserNameInput, setUserNameIput]=useState(null);
    const [Users, setUsers]=useState([]);
    const [Games, setGames]=useState([]);
    const gameSlice = useAppSelector(selectGame);
    const dispatch = useAppDispatch();

    const socket = useAppSelector(getSocket);

    function loginUser() {
        setUserName(UserNameInput);
        socket.auth = { username: UserNameInput };
        socket.connect();

        dispatch(setUser(UserNameInput));
    }

    function createGame(side: Side) {
        const game = {
            freePeoplePlayer: null,
            sauronForcesPlayer: null,
            gameState: gameSlice
        } as Game;

        side === Side.FreePeople
            ? game.freePeoplePlayer = UserName
            : game.sauronForcesPlayer = UserName;

        socket.emit('new-game', game);
    }

    function joinGame(key: string) {
        socket.emit('join-game', key);
    }

    function _startGame(key: string) {
        const game = Games.find(x => x.gameState.key === key) as Game;

        socket.emit('enter-game', key);

        dispatch(setGame(game));

        if (!game.gameState.gameStarted) {
            dispatch(startNewGame());
        }

        setShowLobby(true);
    }

    socket.on("connect_error", (err) => {
        // if (err.message === "invalid username") {
        //   this.usernameAlreadySelected = false;
        // }
        console.log(err)
    });

    socket.on('users', (data) => {
        setUsers(data.map(x => x.username));
    });
    
    socket.on('games', (data) => {
        setGames(data);
    });

    socket.on('game-updated', (game) => {
        dispatch(setGame(game));
    });

    return (
        <Modal show={!ShowLobby} size="xl">
            <Modal.Header closeButton>
                <Modal.Title className={styles.marginRight}>Welcome {UserName}</Modal.Title>
                {
                    UserName &&
                    <>
                    <Button className={styles.marginRight} variant="primary" onClick={() => { createGame(Side.FreePeople) }}>Create game as FP</Button>
                    <Button variant="danger" onClick={() => { createGame(Side.SauronForces) }}>Create game as SF</Button>
                    </>
                }
            </Modal.Header>

            <Modal.Body>
                <div>
                    {
                        !UserName &&
                        <div className="d-flex">
                            <Form.Control id="userName" className={styles.nameInput} placeholder="Enter your name" onChange={(e) => { setUserNameIput(e.target.value) }}/>
                            <Button variant="primary" onClick={() => { loginUser() }}>Submit</Button>
                        </div>
                    }

                    { UserName && <div>Users online: { Users.join(', ') }</div> }
                </div>
                {
                    UserName &&
                    <div className="mt-3">
                        <h4>Games</h4>     
                        <div className="d-flex flex-row flex-wrap">
                            { Games && Object.entries(Games).map((x: [string, Game], i) =>
                                <Card key={i} style={{ width: '340px', margin: '10px' }}>
                                    <Card.Title>
                                        <div className={styles.title}>{x[1].gameState.key}</div>
                                    </Card.Title>
                                    <Card.Body>
                                        <div>Free People player: { x[1].freePeoplePlayer }</div>
                                        <div className="mb-4">Sauron Forces player: { x[1].sauronForcesPlayer }</div>
                                        {
                                            ((x[1].freePeoplePlayer === null || x[1].sauronForcesPlayer === null) &&
                                                 UserName !== x[1].freePeoplePlayer && UserName !== x[1].sauronForcesPlayer) &&
                                            <>
                                            <Button className={styles.marginRight} variant="primary" onClick={() => joinGame(x[1].gameState.key)}>Join</Button>
                                            </>
                                        } 
                                        {
                                            (UserName === x[1].freePeoplePlayer || UserName === x[1].sauronForcesPlayer) &&
                                            (x[1].freePeoplePlayer !== null && x[1].sauronForcesPlayer !== null) &&
                                            <Button variant="success" onClick={() => _startGame(x[1].gameState.key)}>Start</Button>
                                        }
                                    </Card.Body>
                                </Card>
                            ) }
                        </div>
                    </div>
                }  
            </Modal.Body>
        </Modal>
    );
}