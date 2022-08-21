import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Socket } from "socket.io-client";
import styles from './Lobby.module.css';

type LobbyProps = {
    socket: Socket
}
export function Lobby({socket}: LobbyProps) {
    const [UserName, setUserName]=useState(null);
    const [UserNameInput, setUserNameIput]=useState(null);
    const [Users, setUsers]=useState([]);

    function loginUser() {
        setUserName(UserNameInput);
        socket.auth = { username: UserNameInput };
        socket.connect();

        //socket.emit('userLogged', UserNameInput);
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

    return (
        <Modal show={true} size="xl">
            <Modal.Header closeButton>
            <Modal.Title>Welcome {UserName}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    !UserName &&
                    <div className="d-flex">
                        <Form.Control id="userName" className={styles.nameInput} placeholder="Enter your name" onChange={(e) => { setUserNameIput(e.target.value) }}/>
                        <Button variant="primary" onClick={() => { loginUser() }}>Submit</Button>
                    </div>
                }

                { UserName && <div>Users online: { Users.join(', ') }</div> }
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}