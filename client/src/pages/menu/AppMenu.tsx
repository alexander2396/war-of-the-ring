import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../tools/hooks/hooks';
import { GameModal } from '../../components/game-modal/GameModal';
import styles from './AppMenu.module.css';
import { getSocket, selectFellowship, selectGameId, selectTurn, selectUserData, setMordorTrack } from '../../redux/game/gameSlice';

export function AppMenu() {

    const [ShowMenu,setShowMenu]=useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [ping, setPing] = useState(0);

    const socket = useAppSelector(getSocket);
    const _id = useAppSelector(selectGameId);
    const userData = useAppSelector(selectUserData);
    const fellowship = useAppSelector(selectFellowship);
    const turn = useAppSelector(selectTurn);

    const dispatch = useAppDispatch();

    function rollDices(count: number) {
        let diceRollArray = [];

        for (var i = 0; i < count; i++) {
            let number = Math.round(Math.random() * 61);

            if (number >= 0 && number <= 10)
                diceRollArray.push(1);
                
            if (number > 10 && number <= 20)
                diceRollArray.push(2);

            if (number > 20 && number <= 30)
                diceRollArray.push(3);

            if (number > 30 && number <= 40)
                diceRollArray.push(4);

            if (number > 40 && number <= 50)
                diceRollArray.push(5);

            if (number > 50 && number <= 61)
                diceRollArray.push(6);
        }

        socket.emit('room-message', {
            _id: _id,
            message: userData.username + ' rolled ' + diceRollArray.join(' ')
        });
    }

    function fellowshipToMordor() {
        dispatch(setMordorTrack(fellowship.mordorPosition + 1));
    }

    setInterval(() => {
        const start = Date.now();
      
        socket.emit("ping", () => {
          setPing(Date.now() - start);
        });
    }, 2000);

    return (
        <div className={styles.menu}>
            <Button className={styles.menuBtn} variant="light" size="lg"
                onClick={() => setShowMenu(!ShowMenu)}>
                Menu
            </Button>

        {ShowMenu && 
                <div className={styles.menuBox}>

                <div>
                    <Button className={styles.menuBoxBtn} variant="primary" onClick={() => setModalShow(true)}>Current Game</Button>
                </div>

                <h5>Turn: {turn}</h5>

                <div>
                    <div>Roll dices</div>
                    <Button variant="secondary" onClick={() => rollDices(1)}>1</Button>
                    <Button className="ml-5" variant="secondary" onClick={() => rollDices(2)}>2</Button>
                    <Button className="ml-5" variant="secondary" onClick={() => rollDices(3)}>3</Button>
                    <Button className="ml-5" variant="secondary" onClick={() => rollDices(4)}>4</Button>
                    <Button className="ml-5" variant="secondary" onClick={() => rollDices(5)}>5</Button>
                </div>

                <div className='mt-5'>
                    <Button variant="danger" onClick={() => fellowshipToMordor()}>To Mordor!!!</Button>
                </div>

                <span className="mt-4">Ping: {ping}</span>
            </div>
        }

        {modalShow && <GameModal show='true' onHide={() => setModalShow(false)} />}
        
        </div>
    );
}