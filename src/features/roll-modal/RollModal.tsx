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
        let diceRollArray = [];
        for (var i = 0; i < count; i++) {
            let number = Math.round(Math.random() * 6);

            console.log(number)
            switch (number) {
                case 0:
                case 1:
                    diceRollArray.push({ imageUrl: ADFParmymusterIcon } as Dice);
                    break;
                case 2: 
                case 3: 
                    diceRollArray.push({ imageUrl: ADFPcharacter } as Dice);
                    break;
                case 4: 
                    diceRollArray.push({ imageUrl: ADFPevent } as Dice);
                    break;
                case 5: 
                    diceRollArray.push({ imageUrl: ADFPmuster } as Dice);
                    break;
                case 6: 
                    diceRollArray.push({ imageUrl: ADFPwill } as Dice);
                    break;
            }
        }

        setDices(diceRollArray);
        console.log(diceRollArray)
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

                    {/* <div className="m-1">
                        <img width={"40px"} src={require("./../../images/dices/ADFParmymuster.png")} />
                    </div>
                    <div className="m-1">
                        <img width={"40px"} src={require("./../../images/dices/ADFPcharacter.png")} />
                    </div>
                    <div className="m-1">
                        <img width={"40px"} src={require("./../../images/dices/ADFPevent.png")} />
                    </div>
                    <div className="m-1">
                        <img width={"40px"} src={require("./../../images/dices/ADFPmuster.png")} />
                    </div>
                    <div className="m-1">
                        <img width={"40px"} src={require("./../../images/dices/ADFPwill.png")} />
                    </div> */}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => rollDices(4)}>Roll</Button>
            </Modal.Footer>
        </Modal>
    );
  }