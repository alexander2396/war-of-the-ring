import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../tools/hooks/hooks';
import { GameModal } from '../../components/game-modal/GameModal';
import styles from './AppMenu.module.css';

export function AppMenu() {

    const [ShowMenu,setShowMenu]=useState(false);
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useAppDispatch();

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

            </div>
        }
        {modalShow && <GameModal show='true' onHide={() => setModalShow(false)} />}
        
        </div>
    );
}