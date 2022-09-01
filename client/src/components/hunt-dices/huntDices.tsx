import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { Dice } from "../../models/dice";
import { DiceType } from "../../models/enums/diceType";
import { Side } from "../../models/enums/side";
import { selectFreePeopleDices, selectSauronForcesDices, setFreePeopleHuntDices, setSauronForcesHuntDices } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './huntDices.module.css';

export const HuntDices = () => {
    
    const freePeopleDices = useAppSelector(selectFreePeopleDices);
    const sauronForcesDices = useAppSelector(selectSauronForcesDices);

    const dispatch = useAppDispatch();

    function addEye() {
        const eyes = [].concat(sauronForcesDices.hunt);
        eyes.push(new Dice(Side.SauronForces, DiceType.Eye));

        dispatch(setSauronForcesHuntDices(eyes));
    }

    function removeEye() {
        if (sauronForcesDices.hunt.length < 1) return;

        const eyes = [].concat(sauronForcesDices.hunt);
        eyes.shift();

        dispatch(setSauronForcesHuntDices(eyes));
    }

    function addSword() {
        const eyes = [].concat(freePeopleDices.hunt);
        eyes.push(new Dice(Side.FreePeople, DiceType.Character));

        dispatch(setFreePeopleHuntDices(eyes));
    }

    function removeSword() {
        if (freePeopleDices.hunt.length < 1) return;

        const eyes = [].concat(freePeopleDices.hunt);
        eyes.shift();

        dispatch(setFreePeopleHuntDices(eyes));
    }

    return (
        <div className={styles.dicesBlock}>
            <OverlayTrigger trigger="click" key="sf-hunt" placement="right"
                overlay={
                    <Popover>
                        <Popover.Body>
                            <Button variant="success" onClick={() => addEye()}>Add</Button>
                            <Button variant="danger" onClick={() => removeEye()}>Remove</Button>
                        </Popover.Body>
                    </Popover>
                }>
                <div className={styles.sauron}>
                    {sauronForcesDices.hunt.map((dice, i) => {
                        return (<div key={i} className={styles.dice}>
                            <img width={"30px"} src={dice.imageUrl} />
                        </div>) 
                    })}
                </div>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" key="fp-hunt" placement="right"
                overlay={
                    <Popover>
                        <Popover.Body>
                            <Button variant="success" onClick={() => addSword()}>Add</Button>
                            <Button variant="danger" onClick={() => removeSword()}>Remove</Button>
                        </Popover.Body>
                    </Popover>
                }>
                <div className={styles.freePeople}>
                    {freePeopleDices.hunt.map((dice, i) => {
                        return (<div key={i} className={styles.dice}>
                            <img width={"30px"} src={dice.imageUrl} />
                        </div>) 
                    })}
                </div>
            </OverlayTrigger>      
        </div>
    )
}