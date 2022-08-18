import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Button, Modal } from "react-bootstrap";
import { drawCard, selectFreePeopleDices, selectFreePeopleHand, selectFreePeopleUsedDices, selectSauronForcesDices, selectSauronForcesHand, selectSauronForcesUsedDices, useFreePeopleDice, useSauronForcesDice } from "../gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import { Modal } from "react-bootstrap";
import { selectFreePeopleDices, selectFreePeopleUsedDices, selectSauronForcesDices, selectSauronForcesUsedDices, useFreePeopleDice, useSauronForcesDice } from "../../redux/game/gameSlice";
import { Dice } from "../../models/dice";
import styles from './GameModal.module.css';
import { Side } from "../../models/side";
import { CardType } from "../../models/cardType";

export function GameModal(props: any) {
    const freePeopleDices = useAppSelector(selectFreePeopleDices);
    const freePeopleUsedDices = useAppSelector(selectFreePeopleUsedDices);
    const sauronForcesDices = useAppSelector(selectSauronForcesDices);
    const sauronForcesUsedDices = useAppSelector(selectSauronForcesUsedDices);

    const freePeopleHand = useAppSelector(selectFreePeopleHand);
    const sauronForcesHand = useAppSelector(selectSauronForcesHand);
    
    const dispatch = useAppDispatch();

    function _useFreePeopleDice(dice: Dice) {
        dispatch(useFreePeopleDice(dice));
    }

    function _useSauronForcesDice(dice: Dice) {
        dispatch(useSauronForcesDice(dice));
    }

    return (
        <Modal {...props} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="d-flex">
                        <h4>Free People</h4>
                        <Button className={styles.drawButton} variant="primary" onClick={() => { 
                            dispatch(drawCard({ side: Side.FreePeople, cardType: CardType.Strategy }));
                        }}>Draw strategy card</Button>
                        <Button className={styles.drawButton}  variant="primary" onClick={() => { 
                            dispatch(drawCard({ side: Side.FreePeople, cardType: CardType.Character }));
                        }}>Draw character card</Button>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="w-50">
                            <div>Available dices:</div>
                            <div className="d-flex flex-row">
                                {freePeopleDices.map((dice) => {
                                    return (<div className="m-1 c-pointer" onClick={() => _useFreePeopleDice(dice)}>
                                        <img width={"40px"} src={dice.imageUrl} />
                                    </div>) 
                                })}
                            </div>           
                        </div>
                        <div className="w-50">
                            <div>Used dices:</div>
                            <div  className="d-flex flex-row">
                                {freePeopleUsedDices.map((dice) => {
                                    return (<div className="m-1 c-pointer">
                                        <img width={"40px"} src={dice.imageUrl} />
                                    </div>) 
                                })}
                            </div>           
                        </div>
                    </div>
                    <div>
                        <div>Cards:</div>
                        <div  className="d-flex flex-row">
                            {freePeopleHand.map((card) => {
                                return (<div className="m-1 c-pointer">
                                    <img src={card.imageUrl} />
                                </div>) 
                            })}
                        </div>             
                    </div>
                </div>
                <div>
                    <div className="d-flex mt-4">
                    <h4>Sauron Forces</h4>
                        <Button className={styles.drawButton} variant="primary" onClick={() => { 
                            dispatch(drawCard({ side: Side.SauronForces, cardType: CardType.Strategy }));
                        }}>Draw strategy card</Button>
                        <Button className={styles.drawButton}  variant="primary" onClick={() => { 
                            dispatch(drawCard({ side: Side.SauronForces, cardType: CardType.Character }));
                        }}>Draw character card</Button>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="w-50">
                            <div>Available dices:</div>
                            <div  className="d-flex flex-row">
                                {sauronForcesDices.map((dice) => {
                                    return (<div className="m-1 c-pointer" onClick={() => _useSauronForcesDice(dice)}>
                                        <img width={"40px"} src={dice.imageUrl} />
                                    </div>) 
                                })}
                            </div>           
                        </div>
                        <div className="w-50">
                            <div>Used dices:</div>
                            <div  className="d-flex flex-row">
                                {sauronForcesUsedDices.map((dice) => {
                                    return (<div className="m-1 c-pointer">
                                        <img width={"40px"} src={dice.imageUrl} />
                                    </div>) 
                                })}
                            </div>           
                        </div>
                    </div>
                    <div>
                        <div>Cards:</div>
                        <div  className="d-flex flex-row">
                            {sauronForcesHand.map((card) => {
                                return (<div className="m-1 c-pointer">
                                    <img src={card.imageUrl} />
                                </div>) 
                            })}
                        </div>             
                    </div>
                </div>              
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="primary" onClick={() => rollDices(4)}>Roll</Button>
            </Modal.Footer> */}
        </Modal>
    );
  }