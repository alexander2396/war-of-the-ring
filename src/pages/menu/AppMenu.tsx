import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../tools/hooks/hooks';
import { DiceService } from '../../core/diceService';
import { CardType } from '../../models/cardType';
import { Side } from '../../models/side';
import { GameModal } from '../../components/game-modal/GameModal';
import { drawCard, newGame, setFreePeopleDices, setSauronForcesDices } from '../../redux/game/gameSlice';
import styles from './AppMenu.module.css';

export function AppMenu() {

    const [ShowMenu,setShowMenu]=useState(false);
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useAppDispatch();

    function startNewGame(): void {
        dispatch(newGame())

        var freePeopleDices = DiceService.rollFreePeopleDices(4);
        dispatch(setFreePeopleDices(freePeopleDices));

        var sauronForcesDices = DiceService.rollSauronForcesDices(6);
        dispatch(setSauronForcesDices(sauronForcesDices));

        new Audio('sounds/dice.wav').play();

        dispatch(drawCard({ side: Side.FreePeople, cardType: CardType.Strategy }));
        dispatch(drawCard({ side: Side.FreePeople, cardType: CardType.Character }));
        dispatch(drawCard({ side: Side.SauronForces, cardType: CardType.Strategy }));
        dispatch(drawCard({ side: Side.SauronForces, cardType: CardType.Character }));

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
                    <Button className={styles.menuBoxBtn} variant="primary" onClick={() => startNewGame()}>New Game</Button>
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