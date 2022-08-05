import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { RollModal } from '../roll-modal/RollModal';
import styles from './AppMenu.module.css';

export function AppMenu() {

  const [ShowMenu,setShowMenu]=useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={styles.menu}>
      <Button className={styles.menuBtn} variant="light" size="lg"
        onClick={() => setShowMenu(!ShowMenu)}>
          Menu
      </Button>

      {ShowMenu && 
        <div className={styles.menuBox}>

          <div>
            <Button className={styles.menuBoxBtn} variant="primary" onClick={() => setModalShow(true)}>Roll</Button>
          </div>
          
          <div>
            <Button className={styles.menuBoxBtn} variant="primary">Cards</Button>
          </div>

        </div>
      }

      <RollModal show={modalShow} onHide={() => setModalShow(false)} />
      
    </div>
  );
}
