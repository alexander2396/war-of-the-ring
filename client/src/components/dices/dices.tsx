import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { Dice } from "../../models/dice"
import { DiceType } from "../../models/enums/diceType";
import { Side } from "../../models/enums/side";
import { selectFellowship, selectFreePeopleDices, selectSauronForcesDices, setFellowshipTrackPosition, setFreePeopleHuntDices, useFreePeopleDice, useSauronForcesDice } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";

type DicesProps = {
    side: Side
}

export const Dices = ({ side }: DicesProps) => {

    const freePeopleDices = useAppSelector(selectFreePeopleDices);
    const sauronForcesDices = useAppSelector(selectSauronForcesDices);
    const fellowship = useAppSelector(selectFellowship);
    
    const dispatch = useAppDispatch();
    
    function _useFPDice(dice: Dice, type: DiceType = null) {
        dispatch(useFreePeopleDice({dice, type, huntDice: null}));
    }

    function _useSFDice(dice: Dice) {
        dispatch(useSauronForcesDice(dice));
    }

    function _moveFellowship(dice: Dice, type: DiceType = null) {
        dispatch(useFreePeopleDice({dice, type, huntDice: new Dice(Side.FreePeople, DiceType.Character)}));
        dispatch(setFellowshipTrackPosition(fellowship.trackPosition + 1));

        const eyes = [].concat(freePeopleDices.hunt);
        eyes.push(new Dice(Side.FreePeople, DiceType.Character));

        dispatch(setFreePeopleHuntDices(eyes));
    }

    return (<>
        {
            side === Side.FreePeople &&
            <div className="d-flex flex-row">
                {freePeopleDices.available.filter(x => x.type !== DiceType.WillOfTheWest && x.type !== DiceType.Character).map((dice, i) => {
                    return (<>
                        <div key={i} className="m-1 c-pointer" onClick={() => _useFPDice(dice)}>
                            <img width={"40px"} src={dice.imageUrl} />
                        </div>
                    </>) 
                })}
                {freePeopleDices.available.filter(x => x.type === DiceType.WillOfTheWest).map((dice, i) => {
                    return (<>
                        <OverlayTrigger trigger="click" key={i} placement="right" rootClose
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.Character)} width={"40px"} src='images/dices/ADFPcharacter.png' /></p>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.ArmyMuster)}  width={"40px"} src='images/dices/ADFParmymuster.png' /></p>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.Palantir)}  width={"40px"} src='images/dices/ADFPevent.png' /></p>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.Muster)}  width={"40px"} src='images/dices/ADFPmuster.png' /></p>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.WillOfTheWest)}  width={"40px"} src='images/dices/ADFPwill.png' /></p>
                                        <Button variant="primary" onClick={() => _moveFellowship(dice, DiceType.Character)}>Move fellowship</Button>
                                    </Popover.Body>
                                </Popover>
                            }>
                            <div key={i} className="m-1 c-pointer">
                                <img width={"40px"} src={dice.imageUrl} />
                            </div>
                        </OverlayTrigger>
                    </>) 
                })}
                {freePeopleDices.available.filter(x => x.type === DiceType.Character).map((dice, i) => {
                    return (<>
                        <OverlayTrigger trigger="click" key={i} placement="right" rootClose
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        <Button variant="primary" onClick={() => _moveFellowship(dice, DiceType.Character)}>Move fellowship</Button>
                                        <Button className="ml-10" variant="success" onClick={() => _useFPDice(dice, DiceType.Character)}>Use</Button>
                                    </Popover.Body>
                                </Popover>
                            }>
                            <div key={i} className="m-1 c-pointer">
                                <img width={"40px"} src={dice.imageUrl} />
                            </div>
                        </OverlayTrigger>
                    </>) 
                })}
            </div>
        }
        {
            side === Side.SauronForces &&
            <div className="d-flex flex-row">
                {sauronForcesDices.available.map((dice, i) => {
                    return (<div key={i} className="m-1 c-pointer" onClick={() => _useSFDice(dice)}>
                        <img width={"40px"} src={dice.imageUrl} />
                    </div>) 
                })}
            </div>
        }
    </>)
}