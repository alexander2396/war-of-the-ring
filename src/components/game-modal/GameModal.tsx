import { Dice } from "../../models/dice";
import { Side } from "../../models/side";
import { CardType } from "../../models/cardType";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import { selectFreePeopleDices, selectFreePeopleUsedDices, selectSauronForcesDices, selectSauronForcesUsedDices, useFreePeopleDice, useSauronForcesDice, drawCard, selectFreePeopleCards, selectSauronForcesCards } from "../../redux/game/gameSlice";
import { useAppSelector, useAppDispatch } from "../../tools/hooks/hooks";
import { useState } from "react";
import { Card } from "../../models/card";
import styles from './GameModal.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function GameModal(props: any) {
    const [SelectedCard, setSelectedCard]=useState(null as Card);

    const freePeopleDices = useAppSelector(selectFreePeopleDices);
    const freePeopleUsedDices = useAppSelector(selectFreePeopleUsedDices);
    const sauronForcesDices = useAppSelector(selectSauronForcesDices);
    const sauronForcesUsedDices = useAppSelector(selectSauronForcesUsedDices);

    const freePeopleCards = useAppSelector(selectFreePeopleCards);
    const sauronForcesCards = useAppSelector(selectSauronForcesCards);
    
    const dispatch = useAppDispatch();

    function _useFreePeopleDice(dice: Dice) {
        dispatch(useFreePeopleDice(dice));
    }

    function _useSauronForcesDice(dice: Dice) {
        dispatch(useSauronForcesDice(dice));
    }

    function _selectCard(card: Card) {
        setSelectedCard(card);
    }

    return (
        <Modal {...props} dialogClassName={styles.gameModal}>
            <Modal.Header closeButton>
                <Modal.Title>Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Tabs defaultActiveKey="free-people" onSelect={() => _selectCard(null)}>
                <Tab eventKey="free-people" title="Free People">
                    <div className="pt-2">
                        <Container>
                            <Row>
                                <Col className="d-flex">
                                    <h4>Free People</h4>

                                    <Button className={styles.btnLeftMargin} variant="primary" onClick={() => { 
                                        dispatch(drawCard({ side: Side.FreePeople, cardType: CardType.Strategy }));
                                    }}>Draw strategy card</Button>

                                    <div className={styles.cardCounter}>({freePeopleCards.strategyDeck.length})</div>

                                    <Button className={styles.btnLeftMargin}  variant="primary" onClick={() => { 
                                        dispatch(drawCard({ side: Side.FreePeople, cardType: CardType.Character }));
                                    }}>Draw character card</Button>

                                    <div className={styles.cardCounter}>({freePeopleCards.characterDeck.length})</div>
                                </Col>
                                <Col className="d-flex flex-row-reverse">
                                    {SelectedCard &&
                                    <>
                                        <Button variant="danger" className={styles.btnLeftMargin}>Drop</Button>
                                        <Button variant="success">Play</Button>
                                    </>}
                                </Col>
                            </Row>
                        </Container>
                        <div className="d-flex flex-row mt-3">
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
                            <div className="d-flex flex-row">
                                {freePeopleCards.hand.map((card) => {
                                    return (<div className={"m-1 c-pointer "+ (SelectedCard?.key === card.key ? styles.selectedCard : "")} onClick={() => _selectCard(card)}>
                                            <img src={card.imageUrl} />
                                    </div>) 
                                })}
                            </div>             
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="sauron-forces" title="Sauron Forces">
                    <div className="pt-2">
                        <Container>
                            <Row>
                                <Col className="d-flex">
                                    <h4>Sauron Forces</h4>

                                    <Button className={styles.drawButton} variant="primary" onClick={() => { 
                                        dispatch(drawCard({ side: Side.SauronForces, cardType: CardType.Strategy }));
                                    }}>Draw strategy card</Button>
                                    
                                    <div className={styles.cardCounter}>({sauronForcesCards.strategyDeck.length})</div>

                                    <Button className={styles.drawButton}  variant="primary" onClick={() => { 
                                        dispatch(drawCard({ side: Side.SauronForces, cardType: CardType.Character }));
                                    }}>Draw character card</Button>
                            
                                    <div className={styles.cardCounter}>({sauronForcesCards.characterDeck.length})</div>
                                </Col>
                                <Col className="d-flex flex-row-reverse">
                                    {SelectedCard &&
                                    <>
                                        <Button variant="danger" className={styles.btnLeftMargin}>Drop</Button>
                                        <Button variant="success">Play</Button>
                                    </>}
                                </Col>
                            </Row>
                        </Container>
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
                                {sauronForcesCards.hand.map((card) => {
                                    return (<div className={"m-1 c-pointer "+ (SelectedCard?.key === card.key ? styles.selectedCard : "")} onClick={() => _selectCard(card)}>
                                        <img src={card.imageUrl} />
                                    </div>) 
                                })}
                            </div>             
                        </div>
                    </div>   
                </Tab>
            </Tabs>          
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="primary" onClick={() => rollDices(4)}>Roll</Button>
            </Modal.Footer> */}
        </Modal>
    );
  }