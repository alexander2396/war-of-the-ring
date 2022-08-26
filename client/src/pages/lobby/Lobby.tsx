import { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { Socket } from "socket.io-client";
import { Game } from "../../models/game";
import { Side } from "../../models/side";
import { selectGame, startGame } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './Lobby.module.css';

type LobbyProps = {
    socket: Socket
}
export function Lobby({socket}: LobbyProps) {
    const [GameStarted, setGameStarted]=useState(false);
    const [UserName, setUserName]=useState(null);
    const [UserNameInput, setUserNameIput]=useState(null);
    const [Users, setUsers]=useState([]);
    const [Games, setGames]=useState([]);
    const gameSlice = useAppSelector(selectGame);
    const dispatch = useAppDispatch();

    function loginUser() {
        setUserName(UserNameInput);
        socket.auth = { username: UserNameInput };
        socket.connect();

        //socket.emit('userLogged', UserNameInput);
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
        console.log('done')
    }

    function joinGame(key: string) {
        socket.emit('join-game', key);
    }

    function _startGame(key: string) {
        const game = Games[key];
        game.gameState.key = key;
        dispatch(startGame(game));
        setGameStarted(true);
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

    return (
        <Modal show={!GameStarted} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Welcome {UserName}</Modal.Title>
                {
                    UserName &&
                    <>
                    <Button className={styles.newGameBtn} variant="primary" onClick={() => { createGame(Side.FreePeople) }}>Create game as FP</Button>
                    <Button className={styles.newGameBtn} variant="danger" onClick={() => { createGame(Side.SauronForces) }}>Create game as SF</Button>
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
                            { Games && Object.entries(Games).map((x: [string, Game]) => <>
                                <Card style={{ width: '340px', margin: '10px' }}>
                                    <Card.Body>
                                        <Card.Text>
                                            <div>Free People player: { x[1].freePeoplePlayer }</div>
                                            <div>Sauron Forces player: { x[1].sauronForcesPlayer }</div>
                                        </Card.Text>
                                        {
                                            ((x[1].freePeoplePlayer === null || x[1].sauronForcesPlayer === null) &&
                                                 UserName !== x[1].freePeoplePlayer && UserName !== x[1].sauronForcesPlayer) &&
                                            <>
                                            <Button variant="primary" onClick={() => joinGame(x[0])}>Join</Button>
                                            </>
                                        } 
                                        {
                                            (UserName === x[1].freePeoplePlayer || UserName === x[1].sauronForcesPlayer) &&
                                            <Button className={styles.newGameBtn} variant="success" onClick={() => _startGame(x[0])}>Start</Button>
                                        }
                                    </Card.Body>
                                </Card>
                            </>) }
                        </div>
                    </div>
                }  
            </Modal.Body>
        </Modal>
    );
}