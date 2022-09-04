import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { Card } from "../../models/card";
import { selectFreePeopleCards, selectSauronForcesCards, draftCard } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './activeCards.module.css';

export const ActiveCards = () => {
    const dispatch = useAppDispatch();
    
    const freePeopleCards = useAppSelector(selectFreePeopleCards);
    const sauronForcesCards = useAppSelector(selectSauronForcesCards);
    
    function _draftCard(card: Card) {
        dispatch(draftCard(card));
    }

    return (
        <div className={styles.cards}>
            {freePeopleCards.active.map((card) => {

                return (
                    <>
                        <OverlayTrigger trigger="click" key={card.key} placement="right" rootClose
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        <Button variant="secondary" onClick={() => _draftCard(card)}>Remove</Button>
                                    </Popover.Body>
                                </Popover>
                            }>
                            <div className={styles.card}>
                                <img src={card.smallImageUrl} />
                            </div>
                        </OverlayTrigger>
                    </>
                )
            })}
            {sauronForcesCards.active.map((card) => {
                return (<div className={styles.card}>
                    <img src={card.smallImageUrl} />
                </div>) 
            })}
        </div>
    )
}