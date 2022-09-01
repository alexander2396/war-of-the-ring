import { OverlayTrigger, Popover } from "react-bootstrap";
import { Dice } from "../../models/dice"
import { DiceType } from "../../models/enums/diceType";
import { Side } from "../../models/enums/side";
import { selectFreePeopleDices, selectSauronForcesDices, useFreePeopleDice, useSauronForcesDice } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";

type DicesProps = {
    side: Side
}

export const Dices = ({ side }: DicesProps) => {

    const freePeopleDices = useAppSelector(selectFreePeopleDices);
    const sauronForcesDices = useAppSelector(selectSauronForcesDices);
    
    const dispatch = useAppDispatch();
    
    function _useFPDice(dice: Dice, type: DiceType = null) {
        dispatch(useFreePeopleDice({dice, type}));
    }

    function _useSFDice(dice: Dice) {
        dispatch(useSauronForcesDice(dice));
    }

    return (<>
        {
            side === Side.FreePeople &&
            <div className="d-flex flex-row">
                {freePeopleDices.available.filter(x => x.type !== DiceType.WillOfTheWest).map((dice, i) => {
                    return (<>
                        <div key={i} className="m-1 c-pointer" onClick={() => _useFPDice(dice)}>
                            <img width={"40px"} src={dice.imageUrl} />
                        </div>
                    </>) 
                })}
                {freePeopleDices.available.filter(x => x.type === DiceType.WillOfTheWest).map((dice, i) => {
                    return (<>
                        <OverlayTrigger trigger="click" key={i} placement="right"
                            overlay={
                                <Popover>
                                    <Popover.Body>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.Character)} width={"40px"} src='images/dices/ADFPcharacter.png' /></p>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.ArmyMuster)}  width={"40px"} src='images/dices/ADFParmymuster.png' /></p>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.Palantir)}  width={"40px"} src='images/dices/ADFPevent.png' /></p>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.Muster)}  width={"40px"} src='images/dices/ADFPmuster.png' /></p>
                                        <p><img className="c-pointer" onClick={() => _useFPDice(dice, DiceType.WillOfTheWest)}  width={"40px"} src='images/dices/ADFPwill.png' /></p>
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