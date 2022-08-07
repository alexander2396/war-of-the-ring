import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../app/hooks';
import { DiceService } from '../../core/diceService';
import { GameModal } from '../game-modal/GameModal';
import { setFreePeopleDices, setSauronForcesDices } from '../gameSlice';
import styles from './AppMenu.module.css';

export function AppMenu() {

    const [ShowMenu,setShowMenu]=useState(false);
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useAppDispatch();

    function newGame(): void {
        var freePeopleDices = DiceService.rollFreePeopleDices(4);
        dispatch(setFreePeopleDices(freePeopleDices));

        var sauronForcesDices = DiceService.rollSauronForcesDices(6);
        dispatch(setSauronForcesDices(sauronForcesDices));

        new Audio('sounds/dice.wav').play();

        setModalShow(true);
    }

    return (
        <div className={styles.menu}>
            <Button className={styles.menuBtn} variant="light" size="lg"
                onClick={() => setShowMenu(!ShowMenu)}>
                Menu
            </Button>

        {ShowMenu && 
                <div className={styles.menuBox}>

                <div>
                    <Button className={styles.menuBoxBtn} variant="primary" onClick={() => newGame()}>New Game</Button>
                </div>

                <div>
                    <Button className={styles.menuBoxBtn} variant="primary" onClick={() => setModalShow(true)}>Current Game</Button>
                </div>

            </div>
        }
        {modalShow && <GameModal show='true' onHide={() => setModalShow(false)} />}
        
        </div>
    );
}