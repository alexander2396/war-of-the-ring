import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Modal } from "react-bootstrap";
import { selectFreePeopleDices, selectFreePeopleUsedDices, selectSauronForcesDices, selectSauronForcesUsedDices, useFreePeopleDice, useSauronForcesDice } from "../../redux/game/gameSlice";
import { Dice } from "../../models/dice";

export function GameModal(props: any) {
    const freePeopleDices = useAppSelector(selectFreePeopleDices);
    const freePeopleUsedDices = useAppSelector(selectFreePeopleUsedDices);
    const sauronForcesDices = useAppSelector(selectSauronForcesDices);
    const sauronForcesUsedDices = useAppSelector(selectSauronForcesUsedDices);
    
    const dispatch = useAppDispatch();

    function _useFreePeopleDice(dice: Dice) {
        dispatch(useFreePeopleDice(dice));
    }

    function _useSauronForcesDice(dice: Dice) {
        dispatch(useSauronForcesDice(dice));
    }

    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h4>Free People</h4>
                    <div>
                        <div>Available dices:</div>
                        <div  className="d-flex flex-row">
                            {freePeopleDices.map((dice) => {
                                return (<div className="m-1 c-pointer" onClick={() => _useFreePeopleDice(dice)}>
                                    <img width={"40px"} src={dice.imageUrl} />
                                </div>) 
                            })}
                        </div>           
                    </div>
                    <div>
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
                    <h4>Sauron Forces</h4>
                    <div>
                        <div>Available dices:</div>
                        <div  className="d-flex flex-row">
                            {sauronForcesDices.map((dice) => {
                                return (<div className="m-1 c-pointer" onClick={() => _useSauronForcesDice(dice)}>
                                    <img width={"40px"} src={dice.imageUrl} />
                                </div>) 
                            })}
                        </div>           
                    </div>
                    <div>
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
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="primary" onClick={() => rollDices(4)}>Roll</Button>
            </Modal.Footer> */}
        </Modal>
    );
  }