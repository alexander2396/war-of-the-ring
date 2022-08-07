import { useAppSelector } from "../../app/hooks";
import { Modal } from "react-bootstrap";
import { selectFreePeopleDices, selectSauronForcesDices } from "../gameSlice";

export function GameModal(props: any) {
    const freePeopleDices = useAppSelector(selectFreePeopleDices);
    const sauronForcesDices = useAppSelector(selectSauronForcesDices);

    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h4>Free People</h4>
                    <div className="d-flex flex-row">
                        {freePeopleDices.map((dice, i) => {
                            return (<div className="m-1">
                                <img width={"40px"} src={dice.imageUrl} />
                            </div>) 
                        })}
                    </div>
                </div>
                <div>
                    <h4>Sauron Forces</h4>
                    <div className="d-flex flex-row">
                        {sauronForcesDices.map((dice, i) => {
                            return (<div className="m-1">
                                <img width={"40px"} src={dice.imageUrl} />
                            </div>) 
                        })}
                    </div>
                </div>              
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="primary" onClick={() => rollDices(4)}>Roll</Button>
            </Modal.Footer> */}
        </Modal>
    );
  }