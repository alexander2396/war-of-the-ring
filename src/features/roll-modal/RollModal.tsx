import { useState } from "react";
import { Button, Modal, ModalFooter } from "react-bootstrap";
import ADFParmymusterIcon from './../../images/dices/ADFParmymuster.png';
import ADFPcharacter from './../../images/dices/ADFPcharacter.png';
import ADFPevent from './../../images/dices/ADFPevent.png';
import ADFPmuster from './../../images/dices/ADFPmuster.png';
import ADFPwill from './../../images/dices/ADFPwill.png';

class Dice {
    imageUrl: string;
}

export function RollModal(props: any) {
    const [Dices,setDices]=useState([] as Dice[]);

    function rollDices(count: number) {
        let diceRollArray: any = [];
        for (var i = 0; i < count; i++) {
            let number = Math.round(Math.random() * 61);

            if (number >= 0 && number <= 10)
                diceRollArray.push({ imageUrl: ADFParmymusterIcon });

            if (number > 10 && number <= 30)
                diceRollArray.push({ imageUrl: ADFPcharacter });

            if (number > 30 && number <= 40)
                diceRollArray.push({ imageUrl: ADFPevent });

            if (number > 40 && number <= 50)
                diceRollArray.push({ imageUrl: ADFPmuster });

            if (number > 50 && number <= 61)
                diceRollArray.push({ imageUrl: ADFPwill });
        }


        setDices(diceRollArray);
    }

    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Roll</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-row">
                    {Dices.map((dice, i) => {
                        return (<div className="m-1">
                            <img width={"40px"} src={dice.imageUrl} />
                        </div>) 
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => rollDices(4)}>Roll</Button>
            </Modal.Footer>
        </Modal>
    );
  }