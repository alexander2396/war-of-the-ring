import { Dice } from "../../models/dice";
import { Side } from "../../models/enums/side";
import { CardType } from "../../models/enums/cardType";
import { Modal, Button, Tabs, Tab, Form } from "react-bootstrap";
import { selectFreePeopleDices, selectSauronForcesDices, useFreePeopleDice, useSauronForcesDice, drawCard, selectFreePeopleCards, selectSauronForcesCards, draftCard, activateCard, rollDices } from "../../redux/game/gameSlice";
import { useAppSelector, useAppDispatch } from "../../tools/hooks/hooks";
import { useState } from "react";
import { Card } from "../../models/card";
import styles from './GameModal.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Dices } from "../dices/dices";

export function GameModal(props: any) {
    const [SelectedCard, setSelectedCard]=useState(null as Card);

    const freePeopleDices = useAppSelector(selectFreePeopleDices);
    const sauronForcesDices = useAppSelector(selectSauronForcesDices);

    const freePeopleCards = useAppSelector(selectFreePeopleCards);
    const sauronForcesCards = useAppSelector(selectSauronForcesCards);

    const [fpDiceCount, setFPDiceCount] = useState(4);
    const [sfDiceCount, setSFDiceCount] = useState(7);
    
    const dispatch = useAppDispatch();

    function _selectCard(card: Card) {
        setSelectedCard(card);
    }

    function _draftSelectedCard() {
        if (!SelectedCard) return;
        dispatch(draftCard(SelectedCard));
        setSelectedCard(null);
    }

    function _activateSelectedCard() {
        if (!SelectedCard) return;
        dispatch(activateCard(SelectedCard));
        setSelectedCard(null);
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
                                <Col xs={9} className={styles.topNav}>
                                    <h4>Free People</h4>

                                    <Button className={styles.btnLeftMargin} variant="primary" onClick={() => { 
                                        dispatch(drawCard({ side: Side.FreePeople, cardType: CardType.Strategy }));
                                    }}>Draw strategy card</Button>

                                    <div className={styles.cardCounter}>({freePeopleCards.strategyDeck.length})</div>

                                    <Button className={styles.btnLeftMargin}  variant="primary" onClick={() => { 
                                        dispatch(drawCard({ side: Side.FreePeople, cardType: CardType.Character }));
                                    }}>Draw character card</Button>

                                    <div className={styles.cardCounter}>({freePeopleCards.characterDeck.length})</div>

                                    <Form.Control type="number" className={styles.countInput} value={fpDiceCount} onChange={(e) => { setFPDiceCount(Number(e.target.value)) }}/>
                                    <Button className={styles.btnLeftMargin}  variant="secondary" onClick={() => { 
                                        dispatch(rollDices({ side: Side.FreePeople, count: fpDiceCount }));
                                    }}>Roll dices</Button>
                                </Col>
                                <Col xs={3} className="d-flex flex-row-reverse">
                                    {SelectedCard &&
                                    <>
                                        <Button variant="danger" className={styles.btnLeftMargin} onClick={() => _draftSelectedCard()}>Draft</Button>
                                        <Button variant="success" onClick={() => _activateSelectedCard()}>Activate</Button>
                                    </>}
                                </Col>
                            </Row>
                        </Container>
                        <div className="d-flex flex-row mt-3">
                            <div className="w-50">
                                <div>Available dices:</div>
                                <Dices side={Side.FreePeople} />         
                            </div>
                            <div className="w-50">
                                <div>Used dices:</div>
                                <div  className="d-flex flex-row">
                                    {freePeopleDices.used.map((dice) => {
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
                                <Col xs={9} className={styles.topNav}>
                                    <h4>Sauron Forces</h4>

                                    <Button className={styles.btnLeftMargin} variant="primary" onClick={() => { 
                                        dispatch(drawCard({ side: Side.SauronForces, cardType: CardType.Strategy }));
                                    }}>Draw strategy card</Button>
                                    
                                    <div className={styles.cardCounter}>({sauronForcesCards.strategyDeck.length})</div>

                                    <Button className={styles.btnLeftMargin}  variant="primary" onClick={() => { 
                                        dispatch(drawCard({ side: Side.SauronForces, cardType: CardType.Character }));
                                    }}>Draw character card</Button>
                            
                                    <div className={styles.cardCounter}>({sauronForcesCards.characterDeck.length})</div>

                                    <Form.Control type="number" className={styles.countInput} value={sfDiceCount} onChange={(e) => { setSFDiceCount(Number(e.target.value)) }}/>
                                    <Button className={styles.btnLeftMargin}  variant="secondary" onClick={() => { 
                                        dispatch(rollDices({ side: Side.SauronForces, count: sfDiceCount }));
                                    }}>Roll dices</Button>
                                </Col>
                                <Col xs={3} className="d-flex flex-row-reverse">
                                    {SelectedCard &&
                                    <>
                                        <Button variant="danger" className={styles.btnLeftMargin} onClick={() => _draftSelectedCard()}>Draft</Button>
                                        <Button variant="success" onClick={() => _activateSelectedCard()}>Activate</Button>
                                    </>}
                                </Col>
                            </Row>
                        </Container>
                        <div className="d-flex flex-row">
                            <div className="w-50">
                                <div>Available dices:</div>
                                <Dices side={Side.SauronForces} />           
                            </div>
                            <div className="w-50">
                                <div>Used dices:</div>
                                <div  className="d-flex flex-row">
                                    {sauronForcesDices.used.map((dice) => {
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